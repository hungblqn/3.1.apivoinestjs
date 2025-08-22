import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TasksService } from '../src/tasks/tasks.service';
import { Task } from '../src/tasks/schemas/task.schema';

describe('TasksService', () => {
  let service: TasksService;

  // Mock Mongoose Model
  const mockTaskModel: any = {
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    findOneAndUpdate: jest.fn(),
    deleteOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getModelToken(Task.name),
          useValue: mockTaskModel,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);

    // Reset tất cả mock trước mỗi test
    Object.values(mockTaskModel).forEach((fn: any) => fn.mockReset && fn.mockReset());
  });

  it('should create a task', async () => {
    const dto = { title: 'Test', description: 'Desc' };
    const saved = { ...dto, id: 'uuid', status: 'To Do', createdAt: new Date() };
    const save = jest.fn().mockResolvedValue(saved);

    // Gán trực tiếp taskModel = constructor fake
    // @ts-ignore
    service['taskModel'] = function(this: any) {
      this.save = save;
    } as any;

    const result = await service.create(dto as any);
    expect(result.title).toBe('Test');
    expect(save).toHaveBeenCalled();
  });

  it('should get all tasks (lean array)', async () => {
    const data = Array.from({ length: 3 }).map((_, i) => ({
      id: `id-${i}`,
      title: `Task ${i}`,
      description: '',
      status: 'To Do',
      createdAt: new Date(),
    }));

    const exec = jest.fn().mockResolvedValue(data);
    const lean = jest.fn().mockReturnValue({ exec });
    const limit = jest.fn().mockReturnValue({ lean });
    const sort = jest.fn().mockReturnValue({ limit });
    mockTaskModel.find.mockReturnValue({ sort });

    const res = await service.findAll(3);
    expect(mockTaskModel.find).toHaveBeenCalled();
    expect(sort).toHaveBeenCalledWith({ createdAt: -1 });
    expect(limit).toHaveBeenCalledWith(3);
    expect(lean).toHaveBeenCalled();
    expect(res).toHaveLength(3);
  });
});
