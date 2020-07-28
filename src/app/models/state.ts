import { City } from './city';
import { Country } from './country';

export class State {
    id: number;

    name: String;

    country: Country;

    countryCode: String;

    fipsCode: String;

    iso2: String;

    createdAt: Date;

    updatedAt: Date;

    flag: boolean;

    wikiDataId: String;

    cities: City;

}
