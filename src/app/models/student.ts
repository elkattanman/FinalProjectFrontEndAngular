import {Gender} from './gender.enum';
import { Department } from './department';
import { City } from './city';
import { StudentHasCourseInTerm } from './student-has-course-in-term';
import { StudentInfo } from './student-info';
import { TeachingStaff } from './teaching-staff';
import { Term } from './term';
import { Transaction } from './transaction';
import { User } from './user';

export class Student {

    id: number;

    nameEnglish: string;

    nameArabic: string;

    img: string;

    nationality: string;

    gender: Gender;

    religion: string;

    DOB: Date;

    nationalId: string;

    guardianName: string;

    GuardianJob: string;

    email: string;

    secSchool: string;

    preQualfication: string;

    QuilificationYear: Date;

    degrees: number;

    guide: TeachingStaff;

    user: User;

    department: Department;

    city: City;

    studentInfo: StudentInfo;

    createTime: Date;


    updateTime: Date;

    studentHasCourseInTerms: StudentHasCourseInTerm[];


    transactions: Transaction[];



    terms: Term[];



}
