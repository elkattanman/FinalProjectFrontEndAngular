import {Course} from './course';
import {CourseType} from './course-type.enum';
import {Day} from './day.enum';
import {Term} from './term';
import {TeachingStaff} from './teaching-staff';
import {Labs} from './labs';


export class CourseInTerm {

  public id: number;

  public term: Term;

  public course: Course;

  public instructor: TeachingStaff;

  public lectureDay: Day;

  public lectureTime: number;

  public courseType: CourseType;

  public studentCnt: number;

  public minStudent: number;

  public createTime: Date;

  public updateTime: Date;

  // studentHasCourseInTerms: StudentHasCourseInTerm[];


  public labs: Labs[];
}
