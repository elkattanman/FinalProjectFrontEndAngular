import { CourseInTerm } from './course-in-term';
import { Department } from './department';
import { Program } from './program';

export class Course {

    constructor(
        code: string,

        nameEnglish: string,

        nameArabic: string,

        hours: number,

        lecHours: number,

        labHours: number,


        description: number,

        program: Program,

        preCourse: Course,

        childern: Course[],

        createTime: Date,

        updateTime: Date,

        courseInTermList: CourseInTerm[],

        departments: Department
    ){}

}
