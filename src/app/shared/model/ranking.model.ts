import { Material } from "./material.model";

export class Ranking {
    public constructor(
        public id?: string,
        public active?: boolean,
        public code?: string,
        public name_ar?: string,
        public name_en?: string,
        public type?: string,
        public childern?: Material[],
        public headId: number = 0,
    ) { }
}