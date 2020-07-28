import { City } from './city';
import { Country } from './country';

export class State {
    id: number;

    name: string;

    country: Country;

    countryCode: string;

    fipsCode: string;

    iso2: string;

    createdAt: Date;

    updatedAt: Date;

    flag: boolean;

    wikiDataId: string;

    cities: City;

}
