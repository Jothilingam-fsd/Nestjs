import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { Student } from './interface/student.interface';
import { StudentDTO } from './dto/student.dto';

@Injectable()
export class StudentService {

    constructor(@InjectModel('Student') private readonly studentModel: Model<Student>,) {}

    async getStudents(): Promise<Student[]> {
        try {
          return await this.studentModel.find().exec();
        } catch (error) {
          console.error('Error in getStudents:', error.message);
          throw error;
        }
      }
      
    async getOneStudent(id: string): Promise<Student> {
        const student = await this.studentModel.findById(id).exec();
        if (!student) {
            throw new Error(`Student with ID ${id} not found`);
        }
        return student;
    }

    async updateOneStudent(id: string , data: StudentDTO): Promise<Student> {
        const updatedStudent = await this.studentModel.findOneAndUpdate({_id: id} , data , {new: true}).exec();
        if (!updatedStudent) {
            throw new Error(`Student with ID ${id} not found`);
        }
        return updatedStudent;
    }

    async deleteOneStudent(id: string): Promise<Student> {
        const deletedStudent = await this.studentModel.findOneAndDelete({_id: id}).exec();
        if (!deletedStudent) {
            throw new Error(`Student with ID ${id} not found`);
        }
        return deletedStudent;
    }

    async createStudent(data: StudentDTO): Promise<Student> {
        const student = new this.studentModel(data);
        return await student.save();
    }
}