import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {ItemsService} from './items.service';

@Injectable({
    providedIn: 'root'
})
export class ImportService {
    combinationsData = [
        {
            field: 'barCodeId',
            text: 'الرمز الخطي'
        },
        {
            field: 'code',
            text: 'تركيبة المادة المستودعية - الرمز'
        },
        {
            field: 'nameArFull',
            text: 'تركيبة المادة المستودعية - الوصف العربي'
        },
        {
            field: 'materialCode',
            text: 'المادة المستودعية - الرمز'
        },
        {
            field: 'materialNameAr',
            text: 'المادة المستودعية - الوصف العربي'
        },
        {
            field: 'rankingCode',
            text: 'التصنيف- الرمز'
        },
        {
            field: 'rankingNameAr',
            text: 'التصنيف- الاسم العربي'
        },
        {
            field: 'unitCode',
            text: 'الوحدة - الرمز'
        },
        {
            field: 'unitNameAr',
            text: 'الوحدة - الاسم العربي'
        },
        {
            field: 'size',
            text: 'شد الكرتون'
        },
    ];
    priceListData = [
        {
            field: 'barCodeId',
            text: 'الرمز الخطي'
        },
        {
            field: 'code',
            text: 'التركيبة  -الرمز'
        },
        {
            field: 'nameArFull',
            text: 'التركيبة  -الاسم'
        },
        {
            field: 'materialCode',
            text: 'المادة  -الرمز'
        },
        {
            field: 'materialNameAr',
            text: 'المادة  -الاسم'
        },
        {
            field: 'unitCode',
            text: 'الوحدة  -الرمز'
        },
        {
            field: 'unitNameAr',
            text: 'الوحدة  -الاسم'
        },
        {
            field: 'size',
            text: 'رقم الموديل'
        }, {
            field: 'price',
            text: 'السعر'
        }, {
            field: 'pricelistCode',
            text: 'قوائم الاسعار  -الرمز'
        }, {
            field: 'pricelistName',
            text: 'قوائم الاسعار  -الاسم'
        },
    ];
    promotionRows = [
        {
            field: 'code',
            text: 'الرمز'
        },
        {
            field: 'nameArFull',
            text: 'الاسم العربي'
        },
        {
            field: 'usage',
            text: 'الاستخدام'
        },
        {
            field: 'promotionType',
            text: 'نوع العرض'
        },
        {
            field: 'hasChildren',
            text: 'له شرائح'
        },
        {
            field: 'childrenType',
            text: 'نوع الشريحة'
        },
        {
            field: 'paymentMethods',
            text: 'طرق الدفع'
        },
        {
            field: 'resolver',
            text: 'العامل'
        },
        {
            field: 'applyOn',
            text: 'تطبيق على'
        },
        {
            field: 'priceFrom',
            text: 'المبلغ : من'
        }, {
            field: 'priceTo',
            text: 'الى'
        }, {
            field: 'isTotalDiscount',
            text: 'خصم عام'
        }, {
            field: 'hasFreeItem',
            text: 'المواد المجانية'
        }, {
            field: 'disCountType',
            text: 'نوع الخصم'
        }, {
            field: 'disCountValue',
            text: '%'
        }, {
            field: 'price',
            text: 'المبلغ'
        }, {
            field: 'validFrom',
            text: 'الصلاحية: من (م)'
        }, {
            field: 'validTo',
            text: 'الى (م)'
        },
        {
            field: 'counter',
            text: '#'
        },
        // {
        //     field: 'allBranches',
        //     text: '# لكل فرع'
        // },{
        //     field: 'selectBranches',
        //     text: 'تحديد عدد المرات لكل فرع'
        // },{
        //     field: 'allBranches',
        //     text: 'تحديد عدد المرات لكل فرع'
        // },
        {
            field: 'excludeFromTotalDiscount',
            text: 'إستثناء العروض من الخصم العام'
        }, {
            field: 'notes',
            text: 'الملاحظات'
        }, {
            field: 'status',
            text: 'الحالة'
        }, {
            field: 'priceListNameAr',
            text: 'قائمة الأسعار - الاسم العربي'
        }, {
            field: 'priceListCode',
            text: 'قائمة الأسعار - الرمز'
        }, {
            field: 'conditionBarCodeId',
            text: 'الرمز الخطي'
        },
        {
            field: 'materialDiscountBarCodeId',
            text: 'الرمز الخطي'
        },
        {
            field: 'freeItemBarCodeId',
            text: 'الرمز الخطي'
        }, {
            field: 'materialType',
            text: 'نوع المادة'
        }, {
            field: 'combinationCode',
            text: 'التركيبة -الرمز'
        }, {
            field: 'combinationNameAr',
            text: 'التركيبة -الاسم'
        }, {
            field: 'typeOfValue',
            text: 'نوع القيمة'
        }, {
            field: 'discountAmount',
            text: 'المبلغ'
        }, {
            field: 'discountPercentage',
            text: '%'
        }, {
            field: 'unitCode',
            text: 'الوحدة -الرمز'
        }, {
            field: 'unitName',
            text: 'الوحدة -الاسم'
        }, {
            field: 'Amount',
            text: 'الكمية'
        },
    ];
    billsData = [
        {
            field: 'code',
            text: 'التركيبة  -الرمز'
        }, {
            field: 'materialCode',
            text: 'المادة  -الرمز'
        }, {
            field: 'materialNameAr',
            text: 'المادة  -الرمز'
        },
        {
            field: 'nameArFull',
            text: 'التركيبة  -الاسم'
        }, {
            field: 'qty',
            text: 'الكمية'
        }, {
            field: 'FreeQty',
            text: 'الكمية المجانية  -العرض'
        }, {
            field: 'unitNameAr',
            text: 'الوحدة  -الاسم'
        }, {
            field: 'pricePerUnit',
            text: 'سعر الوحدة  -(ع.م)'
        }, {
            field: 'totalPrice',
            text: 'إجمالي السعر  -(ع.م)'
        }, {
            field: 'tax',
            text: 'الضريبة المضافة  -(ع.م)'
        }, {
            field: 'tax',
            text: 'الضريبة المضافة  -(ع.م)'
        }, {
            field: 'basicPrice',
            text: 'السعر الصافي  -(ع.م)'
        }, {
            field: 'dealerCode',
            text: 'مندوب المبيعات  -الرمز'
        }, {
            field: 'dealerName',
            text: 'مندوب المبيعات  -الاسم'
        }, {
            field: 'siteCode',
            text: 'الموقع  -الرمز'
        }, {
            field: 'siteName',
            text: 'الموقع  -الاسم'
        },
    ];

    constructor(public db: AngularFirestore,
                private toastr: ToastrService,
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
                    item =
                        {
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

}
