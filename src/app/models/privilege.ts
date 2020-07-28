import { Role } from './role';

export class Privilege {

    id: number;

    name: string;

    createTime: Date;

    updateTime: Date;

    roles: Role[];


}
