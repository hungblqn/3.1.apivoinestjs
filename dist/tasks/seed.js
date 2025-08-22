"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const tasks_service_1 = require("./tasks.service");
const uuid_1 = require("uuid");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const tasksService = app.get(tasks_service_1.TasksService);
    const tasks = Array.from({ length: 100 }).map((_, i) => ({
        id: (0, uuid_1.v4)(),
        title: `Task ${i + 1}`,
        description: `This is task number ${i + 1}`,
        status: 'To Do',
        createdAt: new Date(),
    }));
    await Promise.all(tasks.map((task) => tasksService.create(task)));
    console.log('Inserted 100 tasks successfully');
    await app.close();
}
bootstrap();
//# sourceMappingURL=seed.js.map