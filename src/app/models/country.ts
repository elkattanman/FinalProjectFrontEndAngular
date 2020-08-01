import { City } from './city';
import { State } from './state';

export class Country {

    constructor(public id: number,
        public name: string,

        public iso3: string,

        public iso2: string,

        public phoneCode: string,

        public capital: string,

        public currency: string,

        public nativ: string,

        public emoji: string,

        public emojiU: string,

        public createdAt: Date,

        public updatedAt: Date,

        public flag: boolean,

        public wikiDataId: string,

        public states: State[],

        public cities: City[]){}
}
