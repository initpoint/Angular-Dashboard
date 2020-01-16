// export interface Combinations {
//         isActive?: boolean,
//         isNew?: boolean,
//         nameArFull?: string,
//         code?: string,
//         size?: string,
//         prices?: object,
//         barCodeId?: string,
//         materialCode?: string,
//         materialNameAr?: string,
//         rankingCode?: string,
//         rankingNameAr?: string,
//         unitCode?: string,
//         unitNameAr?: string,
//         docIndex?: number,
//         pics?: [],
// }
export class Combinations {
        isActive?: boolean;
        isNew?: boolean;
        nameArFull?: string;
        code?: string;
        size?: string = null;
        prices?: object;
        barCodeId?: string;
        materialCode?: string;
        materialNameAr?: string;
        rankingCode?: string;
        rankingNameAr?: string;
        unitCode?: string;
        unitNameAr?: string;
        docIndex?: number;
        pics?: [];
}
