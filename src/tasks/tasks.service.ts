import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const created = new this.taskModel(createTaskDto);
    return await created.save();
  }

  async findAll(limit = 100): Promise<Partial<Task>[]> {
    // Use lean() for faster reads and limit to 100 by default
    return await this.taskModel.find().sort({ createdAt: -1 }).limit(limit).lean().exec();
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.taskModel.findOne({ id }).exec();
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const updated = await this.taskModel.findOneAndUpdate({ id }, updateTaskDto, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return updated;
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    const res = await this.taskModel.deleteOne({ id });
    if (res.deletedCount === 0) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return { deleted: true };
  }
}
