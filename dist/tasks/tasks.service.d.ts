import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(limit?: number): Promise<Partial<Task>[]>;
    findOne(id: string): Promise<Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
//# sourceMappingURL=tasks.service.d.ts.map