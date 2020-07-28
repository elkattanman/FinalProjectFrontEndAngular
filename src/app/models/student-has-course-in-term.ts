import { Student } from './student';
import { Status } from './status.enum';
import { CourseInTerm } from './course-in-term';
import { StudentHasCourseInTermID } from './student-has-course-in-term-id';

export class StudentHasCourseInTerm {

    studentHasCourseInTermID: StudentHasCourseInTermID;

    student: Student;

    courseInTerm: CourseInTerm;

    labAttend: number;

    lecAttend: number;

    midterm: number;

    finl: number;

    degree: number;

    points: number;

    grade: number;

    status: Status;

    createTime: Date;

    updateTime: Date;
}
