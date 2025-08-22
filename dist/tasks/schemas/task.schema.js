"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = exports.Task = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const task_status_enum_1 = require("../task-status.enum");
const swagger_1 = require("@nestjs/swagger");
const uuid_1 = require("uuid");
let Task = class Task {
};
exports.Task = Task;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'a03f3b61-1a87-4b31-8f0e-1e3a0e0f1b9e', readOnly: true }),
    (0, mongoose_1.Prop)({ type: String, default: uuid_1.v4 }),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Write documentation' }),
    (0, mongoose_1.Prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Write README and API docs', required: false }),
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: task_status_enum_1.TaskStatus, example: task_status_enum_1.TaskStatus.TODO }),
    (0, mongoose_1.Prop)({ type: String, enum: Object.values(task_status_enum_1.TaskStatus), default: task_status_enum_1.TaskStatus.TODO }),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, format: 'date-time', readOnly: true }),
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Task.prototype, "createdAt", void 0);
exports.Task = Task = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: true, updatedAt: false }, collection: 'tasks' })
], Task);
exports.TaskSchema = mongoose_1.SchemaFactory.createForClass(Task);
exports.TaskSchema.index({ createdAt: -1 });
//# sourceMappingURL=task.schema.js.map