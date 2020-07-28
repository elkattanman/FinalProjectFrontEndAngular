import { City } from './city';
import { State } from './state';

export class Country {

    id: number;
    name: string;

    iso3: string;

    iso2: string;

    phoneCode: string;

    capital: string;

    currency: string;

    nativ: string;

    emoji: string;

    emojiU: string;

    createdAt: Date;

    updatedAt: Date;

    flag: boolean;

    wikiDataId: string;

    states: State[];

    cities: City[];
}
