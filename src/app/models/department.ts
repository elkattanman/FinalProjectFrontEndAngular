import { Course } from './course';
import { Student } from './student';

export class Department {

    id: number;

    nameEnglish: string;

    nameArabic: string;

    code: string;

    graduationProjectHours: number;

    graduationHours: number;

    minTerms: number;

    maxDegreeOnFail: number;

    students: Student[];

    courses: Course;

}
