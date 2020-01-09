import { Ranking } from "./ranking.model";

export class Category {
    public constructor(
        public id?: string,
        public active?: boolean,
        public code?: string,
        public nameAr?: string,
        public nameEn?: string,
        public type?: string,
        public h?: Ranking[],
        public headId: number = 0,
    ) { }
}
