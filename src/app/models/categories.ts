import {Ranking} from './ranking';

export class Categories {
    public constructor(
        active?: boolean,
        name_ar?: string,
        name_en?: string,
        children?: Ranking[],
        code?: string,
    ) {}
}
