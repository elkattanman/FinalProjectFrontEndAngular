import {Gender} from './gender.enum';
import {City} from './city';
import {CourseInTerm} from './course-in-term';
import {Labs} from './labs';
import {Student} from './student';
import {User} from './user';

export class TeachingStaff {

  public id: number;

  public nameEnglish: string;

  public nameArabic: string;

  public img: string;

  public nationality: string;

  public gender: Gender;

  public religion: string;

  public DOB: Date;

  public nationalId: string;

  public email: string;

  public phdDegree: string;

  public user: User;


  public city: City;

  public createTime: Date;

  public updateTime: Date;

  public courseInTermList: CourseInTerm[];

  public labs: Labs[];

  public students: Student[];
}
