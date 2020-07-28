import { User } from './user';
import { Privilege } from './privilege';

export class Role {

    id: number;

    name: string;

    discription: string;

    createTime: Date;

    updateTime: Date;

    users: User[];

    privileges: Privilege[];
}
