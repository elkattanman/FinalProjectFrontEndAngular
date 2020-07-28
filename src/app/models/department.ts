import { Course } from './course';
import { Student } from './student';

export class Department {

    id: number;

    nameEnglish: String;

    nameArabic: String;

    code: String;

    graduationProjectHours: number;

    graduationHours: number;

    minTerms: number;

    maxDegreeOnFail: number;

    students: Student[];

    courses: Course;

}
