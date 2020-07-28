import { CourseInTerm } from './course-in-term';
import { Department } from './department';

export class Course {

    code: String;

    nameEnglish: String;

    nameArabic: String;

    hours: number;

    lecHours: number;

    LabHours: number;


    description: number;


    program: number;


    preCourse: Course;

    childern: Course[];


    createTime: Date;

    updateTime: Date;


    courseInTermList: CourseInTerm[];


    departments: Department;


}
