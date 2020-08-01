import { Gender } from './gender.enum';
import { City } from './city';
import { CourseInTerm } from './course-in-term';
import { Labs } from './labs';
import { Student } from './student';
import { User } from './user';
export class TeachingStaff {

    id: number;

    nameEnglish: string;

    nameArabic: string;

    img: string;

    nationality: string;

    gender: Gender;

    religion: string;

    DOB: Date;

    nationalId: string;

    email: string;

    phdDegree: string;

    user: User;


    city: City;

    createTime: Date;

    updateTime: Date;

    courseInTermList: CourseInTerm[];

    labs: Labs[];

    students: Student[];
}
