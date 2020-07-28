import { City } from './city';
import { State } from './state';

export class Country {

    id: number;
    name: String;

    iso3: String;

    iso2: String;

    phoneCode: String;

    capital: String;

    currency: String;

    nativ: String;

    emoji: String;

    emojiU: String;

    createdAt: Date;

    updatedAt: Date;

    flag: boolean;

    wikiDataId: String;

    states: State[];

    cities: City[];
}
