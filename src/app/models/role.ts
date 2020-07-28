import { User } from './user';
import { Privilege } from './privilege';

export class Role {

    id: number;

    name: String;

    discription: String;

    createTime: Date;

    updateTime: Date;

    users: User[];

    privileges: Privilege[];
}
