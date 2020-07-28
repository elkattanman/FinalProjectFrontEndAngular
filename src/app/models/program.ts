import { Course } from './course';

export class Program {
    id: number;
    nameEnglish: String;

    nameArabic: String;

    hours: number;

    underRequirement: Program;

    childern: Program[];

    courses: Course[];

    createTime: Date;

    updateTime: Date;
}
