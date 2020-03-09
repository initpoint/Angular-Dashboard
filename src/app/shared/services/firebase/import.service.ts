import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {ItemsService} from './items.service';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class ImportService {
    combinationsStructure = [
        {field: 'barCodeId', text: 'الرمز الخطي'},
        {field: 'code', text: 'تركيبة المادة المستودعية - الرمز'},
        {field: 'nameArFull', text: 'تركيبة المادة المستودعية - الوصف العربي'},
        {field: 'materialCode', text: 'المادة المستودعية - الرمز'},
        {field: 'materialNameAr', text: 'المادة المستودعية - الوصف العربي'},
        {field: 'rankingCode', text: 'التصنيف- الرمز'},
        {field: 'rankingNameAr', text: 'التصنيف- الاسم العربي'},
        {field: 'unitCode', text: 'الوحدة - الرمز'},
        {field: 'unitNameAr', text: 'الوحدة - الاسم العربي'},
        {field: 'size', text: 'شد الكرتون'},
    ];
    priceListData = [
        {field: 'barCodeId', text: 'الرمز الخطي'},
        {field: 'code', text: 'التركيبة  -الرمز'},
        {field: 'nameArFull', text: 'التركيبة  -الاسم'},
        {field: 'materialCode', text: 'المادة  -الرمز'},
        {field: 'materialNameAr', text: 'المادة  -الاسم'},
        {field: 'unitCode', text: 'الوحدة  -الرمز'},
        {field: 'unitNameAr', text: 'الوحدة  -الاسم'},
        {field: 'size', text: 'رقم الموديل'},
        {field: 'price', text: 'السعر'},
        {field: 'pricelistCode', text: 'قوائم الاسعار  -الرمز'},
        {field: 'pricelistName', text: 'قوائم الاسعار  -الاسم'},
    ];
    promotionStructure = [
        {field: 'code', text: 'الرمز'},
        {field: 'nameArFull', text: 'الاسم العربي'},
        {field: 'usage', text: 'الاستخدام'},
        {field: 'promotionType', text: 'نوع العرض'},
        {field: 'hasChildren', text: 'له شرائح'},
        {field: 'childrenType', text: 'نوع الشريحة'},
        {field: 'paymentMethods', text: 'طرق الدفع'},
        {field: 'resolver', text: 'العامل'},
        {field: 'applyOn', text: 'تطبيق على'},
        {field: 'priceFrom', text: 'المبلغ : من'},
        {field: 'priceTo', text: 'الى'},
        {field: 'isTotalDiscount', text: 'خصم عام'},
        {field: 'hasFreeItem', text: 'المواد المجانية'},
        {field: 'disCountType', text: 'نوع الخصم'},
        {field: 'disCountValue', text: '%'},
        {field: 'price', text: 'المبلغ'},
        {field: 'validFrom', text: 'الصلاحية: من (م)'},
        {field: 'validTo', text: 'الى (م)'},
        {field: 'counter', text: '#'},
        {field: 'sites', text: 'الموقع'},
        {field: 'sitesGroups', text: 'مجموعة المواقع'},
        {field: 'partsCategories', text: 'فئة الأطراف'},
        {field: 'excludeFromTotalDiscount', text: 'إستثناء العروض من الخصم العام'},
        {field: 'notes', text: 'الملاحظات'},
        {field: 'status', text: 'الحالة'},
        {field: 'priceListNameAr', text: 'قائمة الأسعار - الاسم العربي'},
        {field: 'priceListCode', text: 'قائمة الأسعار - الرمز'},
        {field: 'conditionCombinationBarCodeId', text: 'الرمز الخطي', defaultValueField: 'AH'},
        {field: 'conditionCombinationCode', text: 'التركيبة -الرمز', defaultValueField: 'AJ'},
        {field: 'conditionCombinationNameAr', text: 'التركيبة -الاسم', defaultValueField: 'AK'},
        {field: 'conditionRangeFrom', text: 'المدى  -من', defaultValueField: 'AN'},
        {field: 'conditionRangeTo', text: 'المدى  -الى', defaultValueField: 'AO'},
        {field: 'materialDiscountCombinationBarCodeId', text: 'الرمز الخطي', defaultValueField: 'AP'},
        {field: 'materialDiscountCombinationCode', text: 'التركيبة -الرمز', defaultValueField: 'AQ'},
        {field: 'materialDiscountCombinationNameAr', text: 'التركيبة -الاسم', defaultValueField: 'AR'},
        {field: 'freeItemCombinationBarCodeId', text: 'الرمز الخطي', defaultValueField: 'AV'},
        {field: 'freeItemCombinationCode', text: 'التركيبة -الرمز', defaultValueField: 'AW'},
        {field: 'freeItemCombinationNameAr', text: 'التركيبة -الاسم', defaultValueField: 'AX'},
        {field: 'materialType', text: 'نوع المادة'},
        {field: 'typeOfValue', text: 'نوع القيمة'},
        {field: 'discountAmount', text: 'المبلغ', defaultValueField: 'AT'},
        {field: 'discountPercentage', text: '%', defaultValueField: 'AU'},
        {field: 'unitCode', text: 'الوحدة -الرمز'},
        {field: 'unitName', text: 'الوحدة -الاسم'},
        {field: 'amount', text: 'الكمية'},
        {field: 'clientCode', text: 'رمز العميل'},
        {field: 'clientName', text: 'اسم العميل / مجموعه'},
    ];
    billStructure = [
        {field: 'code', text: 'التركيبة  -الرمز'},
        {field: 'nameArFull', text: 'التركيبة  -الاسم'},
        {field: 'materialCode', text: 'المادة  -الرمز'},
        {field: 'materialNameAr', text: 'المادة  -الاسم'},
        {field: 'qty', text: 'الكمية'},
        {field: 'freeQty', text: 'الكمية المجانية  -العرض'},
        {field: 'unitNameAr', text: 'الوحدة  -الاسم'},
        {field: 'pricePerUnit', text: 'سعر الوحدة  -(ع.م)'},
        {field: 'totalPrice', text: 'إجمالي السعر  -(ع.م)'},
        {field: 'tax', text: 'الضريبة المضافة  -(ع.م)'},
        {field: 'basicPrice', text: 'السعر الصافي  -(ع.م)'},
        {field: 'dealerCode', text: 'مندوب المبيعات  -الرمز'},
        {field: 'dealerName', text: 'مندوب المبيعات  -الاسم'},
        {field: 'siteCode', text: 'الموقع  -الرمز'},
        {field: 'siteName', text: 'الموقع  -الاسم'},
    ];
    invoiceStructure = [
        {field: 'date', text: 'التاريخ  -(م)'},
        {field: 'dateH', text: 'التاريخ  -(هـ)'},
        {field: 'description', text: 'الوصف'},
        {field: 'debt', text: 'مدين (ع.م)'},
        {field: 'credit', text: 'دائن (ع.م)'},
        {field: 'account', text: 'الرصيد  -الرصيد'},
        {field: 'refNumber', text: 'رقم المرجع'},
        {field: 'typeCode', text: 'نوع السند  -الرمز'},
        {field: 'typeName', text: 'نوع السند  -الاسم'},
        {field: 'siteCode', text: 'الموقع  -الرمز'},
        {field: 'siteName', text: 'الموقع  -الاسم'},
    ];

    constructor(public db: AngularFirestore,
                public itemsService: ItemsService,
    ) {
    }

    importJSON(data) {
        data.forEach(dataItem => {
            this.itemsService.getItem(dataItem.code).subscribe(res => {
                let item = res.data();
                if (item) {
                    item.barCodeId.push(dataItem.barCodeId);
                    item.size = dataItem.size || null;
                    item.unitCode = dataItem.unitCode || null;
                    item.unitNameAr = dataItem.unitNameAr || null;
                    item.nameArFull = dataItem.nameArFull || null;
                } else {
                    item = {
                        code: dataItem.code || null,
                        prices: {},
                        pics: [],
                        barCodeId: [],
                        isNew: false,
                        isActive: true,
                        size: dataItem.size || null,
                        unitCode: dataItem.unitCode || null,
                        unitNameAr: dataItem.unitNameAr || null
                    };
                    item.barCodeId.push(dataItem.barCodeId);
                    Object.keys(dataItem).forEach(row => {
                        if (row != 'barCodeId') {
                            item[row] = dataItem[row];
                        }
                    });
                }
                this.db.collection('combinations').doc(item.code).set(item, {merge: true});
            });
        });
    }

    importPriceList(rows, listID) {
        this.itemsService.getItem(rows.code).subscribe(res => {
            let item = res.data();
            if (res.exists) {
                item.prices[listID] = rows.price;
                this.itemsService.updateItem(item.code, item);
            }
            console.log(item);
        });
    }

    importPromotions(data) {
        data.forEach(item => {
            this.db.collection('promotions').doc(item.code).set(item, {merge: true}).then(res => {

                if (item.materialDiscountCombinationCode) {
                    this.itemsService.getItem(item.materialDiscountCombinationCode).subscribe(combination => {
                        if (combination.exists) {
                            this.itemsService.updateItem(combination.id, {
                                hasPromotion: true,
                                promotionCode: firebase.firestore.FieldValue.arrayUnion(item.code)
                            });
                        }
                    });

                }
                if (item.freeItemCombinationCode) {
                    this.itemsService.getItem(item.freeItemCombinationCode).subscribe(combination => {
                        if (combination.exists) {
                            this.itemsService.updateItem(combination.id, {
                                hasPromotion: true,
                                promotionCode: firebase.firestore.FieldValue.arrayUnion(item.code)
                            });
                        }
                    });
                }
            });
        });
        this.db.collection('meta').doc('promotions').update({count: firebase.firestore.FieldValue.increment(data.length)});
    }
}
