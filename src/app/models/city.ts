import { Country } from './country';
import { State } from './state';
import { Student } from './student';
import { TeachingStaff } from './teaching-staff';

export class City {

    constructor(public id: number,
        public name: string,

        public state: State,

        public stateCode: string,

        public country: Country,

        public countryCode: string,

        public latitude: number,

        public longitude: number,

        public createdAt: Date,

        public updatedOn: Date,

        public flag: boolean,

        public wikiDataId: string,

        public teachingStaffs: TeachingStaff[],

        public students: Student[]){ }



}
