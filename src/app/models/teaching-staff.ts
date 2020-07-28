import {Gender} from './gender.enum';
import { City } from './city';
import { CourseInTerm } from './course-in-term';
import { Labs } from './labs';
import { Student } from './student';
import { User } from './user';
export class TeachingStaff {

    id: number;

    nameEnglish: String;

    nameArabic: String;

    img: String;

     nationality: String;

    gender: Gender;

    religion: String;

    DOB: Date;

    nationalId: String;

    email: String;

    phdDegree: String;

    user: User;


    city: City;

    createTime: Date;

    updateTime: Date;

    courseInTermList: CourseInTerm[];

    labs: Labs[];

    students: Student[];
}
