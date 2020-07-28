import { CourseInTerm } from './course-in-term';
import { Day } from './day.enum';
import { TeachingStaff } from './teaching-staff';

export class Labs {
    id: number;

    courseInTerm: CourseInTerm;

    labDay: Day;

    labTime: number;

    teachingStaff: TeachingStaff;

    studentCnt: number;

    maxStudent: number;

    createTime: Date;

    updateTime: Date;
}
