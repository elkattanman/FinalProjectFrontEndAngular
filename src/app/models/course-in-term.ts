import { Course } from './course';
import { CourseType } from './course-type.enum';
import { Day } from './day.enum';
import { Term } from './term';
import { TeachingStaff } from './teaching-staff';


export class CourseInTerm {

    id: number;

    term: Term;

    course: Course;

    instructor: TeachingStaff;

    lectureDay: Day;

    courseType: CourseType;

    StudentCnt: number;

    minStudent: number;

    createTime: Date;

    updateTime: Date;

    // studentHasCourseInTerms: StudentHasCourseInTerm[];


    // labs: Labs[];
}
