import { CourseInTerm } from './course-in-term';
import { Department } from './department';
import { Program } from './program';

export class Course {

    constructor(
        public code: string,

        public nameEnglish: string,

        public nameArabic: string,

        public hours: number,

        public lecHours: number,

        public labHours: number,


        public description: number,

        public program: Program,

        public preCourse: Course,

        public childern: Course[],

        public createTime: Date,

        public updateTime: Date,

        public courseInTermList: CourseInTerm[],

        public departments: Department
    ){}

}
