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

    nameEnglish: String;

    nameArabic: String;

    img: String;

    nationality: String;

    gender: Gender;

    religion: String;

    DOB: Date;

    nationalId: String;

    guardianName: String;

    GuardianJob: String;

    email: String;

    secSchool: String;

    preQualfication: String;

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
