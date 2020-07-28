import { TeachingStaff } from './teaching-staff';
import { Student } from './student';
import { Role } from './role';

export class User {

    id: number;

    name: string;

    username: string;

    email: string;

    password: string;

    enabled: boolean;

    createTime: Date;

    updateTime: Date;

    roles: Role[];

    teachingStaff: TeachingStaff;

    student: Student;
}
