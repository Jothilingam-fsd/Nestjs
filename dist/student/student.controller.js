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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
let StudentController = class StudentController {
    studentService;
    constructor(studentService) {
        this.studentService = studentService;
    }
    getForm() {
        return {};
    }
    async handleFormAction(body) {
        const { action, id, name, age, city, department } = body;
        try {
            if (action === 'create') {
                const newStudent = await this.studentService.createStudent({
                    name,
                    age: parseInt(age),
                    city,
                    department,
                });
                return { message: 'Student Created!', student: newStudent };
            }
            if (action === 'read') {
                const student = await this.studentService.getOneStudent(id);
                return { student };
            }
            if (action === 'update') {
                const updatedStudent = await this.studentService.updateOneStudent(id, {
                    name,
                    age: parseInt(age),
                    city,
                    department,
                });
                return { message: 'Student Updated!', student: updatedStudent };
            }
            if (action === 'delete') {
                const deletedStudent = await this.studentService.deleteOneStudent(id);
                return { message: 'Student Deleted!', student: deletedStudent };
            }
            if (action === 'getAll') {
                const students = await this.studentService.getStudents();
                return { students };
            }
            return { error: 'Invalid action' };
        }
        catch (err) {
            return { error: err.message };
        }
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Get)('form'),
    (0, common_1.Render)('form'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "getForm", null);
__decorate([
    (0, common_1.Post)('form-action'),
    (0, common_1.Render)('form'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "handleFormAction", null);
exports.StudentController = StudentController = __decorate([
    (0, common_1.Controller)('student'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
//# sourceMappingURL=student.controller.js.map