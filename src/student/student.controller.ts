import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDTO } from './dto/student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('form')
  @Render('form') // renders views/form.pug
  getForm() {
    return {};
  }

  @Post('form-action')
  @Render('form')
  async handleFormAction(@Body() body: any) {
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
    } catch (err) {
      return { error: err.message };
    }
  }
}
