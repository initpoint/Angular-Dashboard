import { Ranking } from "./ranking.model";

export class Category {
    public constructor(
        public id?: string,
        public active?: boolean,
        public code?: string,
        public name_ar?: string,
        public name_en?: string,
        public type?: string,
        public childern?: Ranking[],
        public headId: number = 0,
    ) { }
}