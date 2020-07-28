import { Country } from './country';
import { State } from './state';
import { Student } from './student';
import { TeachingStaff } from './teaching-staff';

export class City {

    id: number;
    name: string;

    state: State;

    stateCode: string;

    country: Country;

    countryCode: string;

    latitude: number;

    longitude: number;

    createdAt: Date;

    updatedOn: Date;

    flag: boolean;

    wikiDataId: string;

    teachingStaffs: TeachingStaff[];


    students: Student[];
}
