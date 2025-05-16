import { Model } from 'mongoose';
import { Student } from './interface/student.interface';
import { StudentDTO } from './dto/student.dto';
export declare class StudentService {
    private readonly studentModel;
    constructor(studentModel: Model<Student>);
    getStudents(): Promise<Student[]>;
    getOneStudent(id: string): Promise<Student>;
    updateOneStudent(id: string, data: StudentDTO): Promise<Student>;
    deleteOneStudent(id: string): Promise<Student>;
    createStudent(data: StudentDTO): Promise<Student>;
}
