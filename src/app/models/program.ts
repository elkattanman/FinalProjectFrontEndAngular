import { Course } from './course';

export class Program {
    constructor(
    id: number,
    nameEnglish: string,

    nameArabic: string,

    hours: number,

    underRequirement: Program,

    childern: Program[],

    courses: Course[],

    createTime: Date,

    updateTime: Date){}
}
