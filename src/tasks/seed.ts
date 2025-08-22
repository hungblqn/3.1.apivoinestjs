import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { TasksService } from './tasks.service';
import { v4 as uuidv4 } from 'uuid';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const tasksService = app.get(TasksService);

  const tasks = Array.from({ length: 100 }).map((_, i) => ({
    id: uuidv4(),
    title: `Task ${i + 1}`,
    description: `This is task number ${i + 1}`,
    status: 'To Do',
    createdAt: new Date(),
  }));

  await Promise.all(tasks.map((task) => tasksService.create(task as any)));
  console.log('Inserted 100 tasks successfully');
  await app.close();
}

bootstrap();
