import { CourseInTerm } from './course-in-term';
import { Student } from './student';
import { TermType } from './term-type.enum';
import { Transaction } from './transaction';

export class Term {
    id: number;

     nameEnglish: String;

    nameArabic: String;

    termType: TermType;

     start: Date;

    end: Date;

     startRegistration: Date;

    endRegistration: Date;

    startUpdating: Date;

    endUpdating: Date;

    startWithdrawn: Date;

    endWithdrawn: Date;

    createTime: Date;

    updateTime: Date;

    courseInTermList: CourseInTerm[];

    transactions: Transaction[];

    students: Student[];
}
