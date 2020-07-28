import { CourseInTerm } from './course-in-term';
import { Department } from './department';

export class Course {

    code: string;

    nameEnglish: string;

    nameArabic: string;

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
