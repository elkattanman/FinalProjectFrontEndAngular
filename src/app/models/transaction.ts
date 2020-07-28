import { Student } from './student';
import { Term } from './term';

export class Transaction {

    id: number;

    student: Student;

    term: Term;

    courseCnt: number;

    total: number;

    billNo: number;

    createTime: Date;

    updateTime: Date;
}
