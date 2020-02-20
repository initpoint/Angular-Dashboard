import {Component, OnInit, ViewChild} from '@angular/core';
import * as XLSX from 'xlsx';
import {ImportService} from '../../shared/services/firebase/import.service';
import {DxDataGridComponent} from 'devextreme-angular';

@Component({
    selector: 'app-import',
    templateUrl: './import.component.html',
    styleUrls: ['./import.component.scss'],
})
export class ImportComponent implements OnInit {
    data: any;
    public show: boolean;
    lang;
    value: any[] = [];
    combinationsDetailsColumns = ['رمز التركيبة', 'الرمز الخطي', 'إسم الصنف', 'الطول', 'العرض', 'الارتفاع', 'الوزن', 'الحجم'];
    balanceColumns = ['رمز التركيبة', ' الرمز الخطي ', 'إسم الصنف', 'رصيد المخازن', 'رصيد الفروع'];
    popupVisible: boolean = false;
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
        },{
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
        },{
            field: 'materialType',
            text: 'نوع المادة'
        },{
            field: 'combinationCode',
            text: 'التركيبة -الرمز'
        },{
            field: 'combinationNameAr',
            text: 'التركيبة -الاسم'
        },{
            field: 'typeOfValue',
            text: 'نوع القيمة'
        },{
            field: 'discountAmount',
            text: 'المبلغ'
        },{
            field: 'discountPercentage',
            text: '%'
        },{
            field: 'unitCode',
            text: 'الوحدة -الرمز'
        },{
            field: 'unitName',
            text: 'الوحدة -الاسم'
        },{
            field: 'Amount',
            text: 'الكمية'
        },
    ];
    columnObjects: any[] = [];
    columnToShow: any[] = [];
    rowCounter: number = 0;
    dataFromFile: any[] = [];

    // wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
    constructor(private importService: ImportService) {
        this.lang = localStorage.getItem('lang') === 'ar';
    }

    onFileChange(evt: any) {

        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        this.show = true;
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const data = XLSX.utils.sheet_to_json(ws, {header: ['barCodeId', 'code', 'nameArFull', 'materialCode', 'materialNameAr', 'rankingCode', 'rankingNameAr', 'unitCode', 'unitNameAr', 'size']}).slice(1);

            Promise.all([this.importService.importJSON(data)]).then(res => {
                this.show = false;
            });
        };
        reader.readAsBinaryString(target.files[0]);
    }

    TestFile(evt: any) {
        this.popupVisible = true;
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        // this.show = true;
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const data = XLSX.utils.sheet_to_json(ws, {header: 'A'});
            this.dataFromFile = data.slice(1);
            this.columnToShow = [];
            this.columnObjects = [];
            let i = 0;
            Object.values(data[0]).forEach(column => {
                this.columnObjects.push({value: column, valueField: Object.keys(data[0])[i]});
                i++;
            });
            this.combinationsData.forEach(column => {
                let field = this.columnObjects.find(row => row.value === column.text);
                if (field) {

                    this.columnToShow.push({
                        text: column.text,
                        isFound: true,
                        value: field.value,
                        valueField: field.valueField,
                        field: column.field
                    });
                } else {
                    this.columnToShow.push({
                        text: column.text,
                        isFound: false,
                        value: field.value,
                        valueField: field.valueField,
                        field: column.field
                    });
                }
            });
            this.rowCounter = data.length - 1;
        };
        reader.readAsBinaryString(target.files[0]);
    }

    promotionImport(evt: any) {
        this.popupVisible = true;
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        // this.show = true;
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const data = XLSX.utils.sheet_to_json(ws, {header: 'A'});
            this.dataFromFile = data.slice(2);
            this.columnToShow = [];
            this.columnObjects = [];
            let i = 0;
            Object.values(data[0]).forEach(column => {
                let key = Object.keys(data[0])[i];
                this.columnObjects.push({
                    columnName: column + ' (' + key + ')',
                    value: column,
                    valueField: key,
                    source: 0
                });
                i++;
            });
            i = 0;
            Object.values(data[1]).forEach(column => {
                let key = Object.keys(data[1])[i];
                this.columnObjects.push({
                    columnName: column + ' (' + key+'2' + ')',
                    value: column,
                    valueField: key+'2',
                    source: 1
                });
                i++;
            });
            // ToDo fix the duplicated columns (edit not working)
            this.promotionRows.forEach(column => {
                let field = this.columnObjects.find(row => row.value === column.text);
                if (field) {
                    this.columnToShow.push({
                        text: column.text,
                        columnName: column.text + ' (' + field.valueField + ')',
                        isFound: true,
                        value: field.value,
                        valueField: field.valueField,
                        field: column.field
                    });
                } else {
                    this.columnToShow.push({
                        text: column.text,
                        isFound: false,
                        value: null,
                        valueField: null,
                        field: column.field
                    });
                }
            });
            this.rowCounter = data.length - 2;
            console.log(this.columnToShow)
            console.log(this.columnObjects)
        };
        reader.readAsBinaryString(target.files[0]);
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') === 'ar';
    }

    rowPrepared(row) {
        if (row.data.isFound === false) {
            row.rowElement.classList.add('bg-danger');
        }
    }

    uploadPriceList(evt: any) {

        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        this.show = true;
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            let data = XLSX.utils.sheet_to_json(ws, {header: ['no', 'column1', 'barCodeId', 'column3', 'column4', 'column5', 'code', 'column7', 'column8', 'column9', 'column10', 'column11', 'price', 'column13', 'column14', 'column15', 'column16', 'column17', 'pricelistCode', 'name', 'column20', 'column21', 'column22', 'column23', 'column24', 'column25', 'qty']}).slice(1);
            this.importService.db.collection('pricelist').doc(data[0]['pricelistCode']).set({
                name: data[0]['name'],
                code: data[0]['pricelistCode']
            }).then(res => {
                data.forEach(rows => {
                    this.importService.importPriceList(rows, data[0]['pricelistCode']);
                });
                this.importService.itemsService.updateItems();
                this.show = false;
            });
        };
        reader.readAsBinaryString(target.files[0]);
    }

    reset() {
        if (confirm('Are you sure about this?\n This will delete all the data you have\n This cannot be undone \nهل تريد مسح كل البيانات؟ \n لا يمكن التراجع عن ذلك')) {
            console.log('Deleting Database');
            this.importService.itemsService.db.collection('item').ref.get().then(res => {
                res.docs.forEach(doc => {
                    doc.ref.delete();
                });
                console.log('item deleted');
            });
            this.importService.itemsService.db.collection('permission').ref.get().then(res => {
                res.docs.forEach(doc => {
                    doc.ref.delete();
                });
                console.log('permissions deleted');
            });
            this.importService.itemsService.db.collection('carts').ref.get().then(res => {
                res.docs.forEach(doc => {
                    doc.ref.delete();
                });
                console.log('carts deleted');
            });
            this.importService.itemsService.db.collection('pricelist').ref.get().then(res => {
                res.docs.forEach(doc => {
                    doc.ref.delete();
                });
                console.log('pricelist deleted');
            });
            this.importService.itemsService.db.collection('carts').ref.get().then(res => {
                res.docs.forEach(doc => {
                    doc.ref.delete();
                });
                console.log('carts deleted');
            });
            this.importService.itemsService.db.collection('combinations').ref.get().then(res => {
                res.docs.forEach(doc => {
                    doc.ref.delete();
                });
                console.log('combinations deleted');
            });
        }
    }

    uploadImages() {
        let i = 0;
        this.value.forEach(file => {
            file.newName = Math.floor(Math.random() * 10000000) + '-' + i + '.' + file.name.split('.').reverse()[0];
            let data = {
                barCodeId: file.name.split('.')[0],
            };
            this.importService.itemsService.uploadImage(file, data);
            i++;
        });
    }

    // تحديث الرصيد
    updateBalance(evt: any) {
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const data = XLSX.utils.sheet_to_json(ws, {header: ['no', 'code', 'barCodeId', 'nameArFUll', 'storageBalance', 'branchBalance']}).slice(1);

            data.forEach(newItem => {
                if (this.importService.itemsService.itemArray.find(item => item.code === newItem['code'])) {
                    this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).storageBalance = newItem['storageBalance'];
                    this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).branchBalance = newItem['branchBalance'];
                    // this.importService.itemsService.updateItem(newItem['code'],{
                    //     storageBalance:newItem['storageBalance'],
                    //     branchBalance:newItem['branchBalance']
                    // })
                }
            });
            this.importService.itemsService.updateItems();
        };
        reader.readAsBinaryString(target.files[0]);
    }

    // تحديث السعر و الشد
    updatePrice(evt: any) {
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const data = XLSX.utils.sheet_to_json(ws, {header: ['no', 'code', 'barCodeId', 'nameArFUll', 'unitNameAr', 'price', 'size']}).slice(1);
            console.log(wsname, data);
        };
        reader.readAsBinaryString(target.files[0]);
    }

    // تحديث الاصناف التي بيعت للعميل
    customerOrderList(evt: any) {
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const data = XLSX.utils.sheet_to_json(ws, {header: ['no', 'code', 'barCodeId', 'nameArFUll', 'amount']}).slice(1);
            console.log(wsname, data);
        };
        reader.readAsBinaryString(target.files[0]);
    }

    // تحديث حجم و وزن التركيبات
    combinationDetails(evt: any) {
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const data = XLSX.utils.sheet_to_json(ws, {header: ['no', 'code', 'barCodeId', 'nameArFUll', 'length', 'width', 'height', 'weight', 'volume']}).slice(1);
            data.forEach(newItem => {
                if (this.importService.itemsService.itemArray.find(item => item.code === newItem['code'])) {
                    this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).length = newItem['length'];
                    this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).width = newItem['width'];
                    this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).height = newItem['height'];
                    this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).weight = newItem['weight'];
                    this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).volume = newItem['volume'];
                    this.importService.itemsService.updateItem(newItem['code'], {
                        length: newItem['length'],
                        width: newItem['width'],
                        height: newItem['height'],
                        weight: newItem['weight'],
                        volume: newItem['volume'],
                    });
                }
            });
            this.importService.itemsService.updateItems();
            console.log(wsname, data);
        };
        reader.readAsBinaryString(target.files[0]);
    }

    saveData() {
        return;
        this.dataFromFile.forEach(item => {
            Object.keys(item).forEach(key => {
                if (this.columnToShow.find(column => column.valueField == key)) {
                    // replace old keys (A,B,C,....) with the fields names
                    item[this.columnToShow.find(column => column.valueField == key).field] = item[key];
                    // Delete old key
                    delete item[key];
                    // O/P exmp. => {
                    // barCodeId: "0304042002201"
                    // size: "شد 18"
                    // pics: []
                    // users: []
                    // prices: {}
                    // isNew: true
                    // isActive: false
                    // code: "933101001098"
                    // nameArFull: "ابريق شاي غرش دائري سعة 2.5 لتر نقشة شعبية ابيض مقبض حديد السنيدي SNHW-0196W-2.5"
                    // materialCode: "933101001"
                    // materialNameAr: "ابريق شاي"
                    // rankingCode: "933101"
                    // rankingNameAr: "اواني منزلية - اباريق شاي"
                    // unitCode: "01001"
                    // unitNameAr: "حبة"
                    // }
                    item['size'] = item.size || null;
                    item['pics'] = [];
                    item['customerList'] = [];
                    item['prices'] = {};
                    item['isNew'] = true;
                    item['isActive'] = false;
                    if (this.importService.itemsService.itemArray.find(oldItem => oldItem.code === item['code'])) {
                        this.importService.itemsService.itemArray.find(oldItem => oldItem.code === item['code']).length = item['length'];
                        this.importService.itemsService.itemArray.find(oldItem => oldItem.code === item['code']).width = item['width'];
                        this.importService.itemsService.itemArray.find(oldItem => oldItem.code === item['code']).height = item['height'];
                        this.importService.itemsService.itemArray.find(oldItem => oldItem.code === item['code']).weight = item['weight'];
                        this.importService.itemsService.itemArray.find(oldItem => oldItem.code === item['code']).volume = item['volume'];
                        this.importService.itemsService.updateItem(item['code'], {
                            length: item['length'],
                            width: item['width'],
                            height: item['height'],
                            weight: item['weight'],
                            volume: item['volume'],
                        });
                    } else {
                        this.importService.itemsService.itemArray.push(item);
                    }

                }

            });

        });
        console.log(this.importService.itemsService.itemArray);
    }

    rowFound(row, value) {
            (<any>this).defaultSetCellValue(row, value);

    }

    cancelData() {
        this.columnToShow = [];
        this.columnObjects = [];
        this.rowCounter = 0;
        this.popupVisible = false;
    }
}
