import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TaskStatus } from '../task-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

export type TaskDocument = HydratedDocument<Task>;

@Schema({ timestamps: { createdAt: true, updatedAt: false }, collection: 'tasks' })
export class Task {
  @ApiProperty({ example: 'a03f3b61-1a87-4b31-8f0e-1e3a0e0f1b9e', readOnly: true })
  @Prop({ type: String, default: uuidv4 })
  id: string;

  @ApiProperty({ example: 'Write documentation' })
  @Prop({ type: String, required: true, trim: true })
  title: string;

  @ApiProperty({ example: 'Write README and API docs', required: false })
  @Prop({ type: String, default: '' })
  description?: string;

  @ApiProperty({ enum: TaskStatus, example: TaskStatus.TODO })
  @Prop({ type: String, enum: Object.values(TaskStatus), default: TaskStatus.TODO })
  status: TaskStatus;

  @ApiProperty({ type: String, format: 'date-time', readOnly: true })
  @Prop({ type: Date })
  createdAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

// Ensure index on createdAt for faster sorting/filtering
TaskSchema.index({ createdAt: -1 });
