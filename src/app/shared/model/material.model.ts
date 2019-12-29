import { Combination } from "./combination.model";

export class Material {
    public constructor(
        public id?: string,
        public active?: boolean,
        public code?: string,
        public name_ar?: string,
        public name_en?: string,
        public type?: string,
        public childern?: Combination[],
        public headId: number = 0,
    ) { }
}