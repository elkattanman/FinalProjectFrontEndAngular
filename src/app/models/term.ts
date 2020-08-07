import {CourseInTerm} from './course-in-term';
import {Student} from './student';
import {TermType} from './term-type.enum';
import {Transaction} from './transaction';

export class Term {
  public id: number;

  public nameEnglish: string;

  public nameArabic: string;

  public termType: TermType;

  public start: Date;

  public end: Date;

  public startRegistration: Date;

  public endRegistration: Date;

  public startUpdating: Date;

  public endUpdating: Date;

  public startWithdrawn: Date;

  public endWithdrawn: Date;

  public createTime: Date;

  public updateTime: Date;

  public courseInTermList: CourseInTerm[];

  public transactions: Transaction[];

  public students: Student[];
}
