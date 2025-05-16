import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getForm(): {};
    handleFormAction(body: any): Promise<{
        message: string;
        student: import("./interface/student.interface").Student;
        students?: undefined;
        error?: undefined;
    } | {
        student: import("./interface/student.interface").Student;
        message?: undefined;
        students?: undefined;
        error?: undefined;
    } | {
        students: import("./interface/student.interface").Student[];
        message?: undefined;
        student?: undefined;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
        student?: undefined;
        students?: undefined;
    }>;
}
