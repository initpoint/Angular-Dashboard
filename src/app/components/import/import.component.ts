import {Component, OnInit, ViewChild} from '@angular/core';
import * as XLSX from 'xlsx';
import {ImportService} from '../../shared/services/firebase/import.service';
import {DxDataGridComponent} from 'devextreme-angular';
import * as firebase from '../../shared/services/firebase/items.service';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';
import {ItemsService} from '../../shared/services/firebase/items.service';

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
    columnObjects: any[] = [];
    columnToShow: any[] = [];
    rowCounter: number = 0;
    dataFromFile: any[] = [];

    constructor(private importService: ImportService, public translateService: TranslateService,
                public toasterService: ToastrService, public itemsService: ItemsService) {
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


    ngOnInit() {
        this.lang = localStorage.getItem('lang') === 'ar';
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
            }, {merge: true}).then(res => {
                data.forEach(item => {
                    this.importService.importPriceList(item, data[0]['pricelistCode']);
                    // console.log(item)
                });

                //this.importService.itemsService.updateItems();

            });
            this.show = false;
        };
        reader.readAsBinaryString(target.files[0]);
    }

    reset() {
        // todo delete pictures in firestorage
        if (confirm('Are you sure about this?\n This will delete all the data you have\n This cannot be undone ' +
            '\nهل تريد مسح كل البيانات؟ \n لا يمكن التراجع عن ذلك')) {

            this.translateService.get('Dropping DB').subscribe(msg => this.toasterService.warning(msg));

            this.importService.itemsService.db.collection('permission').ref.get().then(res =>
                Promise.all(res.docs.map(doc => doc.ref.delete())).then(() =>
                    this.translateService.get('Permission Deleted').subscribe(msg => this.toasterService.success(msg))
                ));

            this.importService.itemsService.db.collection('carts').ref.get().then(res =>
                Promise.all(res.docs.map(doc => doc.ref.delete())).then(() =>
                    this.translateService.get('Carts Deleted').subscribe(msg => this.toasterService.success(msg))
                ));

            this.importService.itemsService.db.collection('pricelist').ref.get().then(res =>
                Promise.all(res.docs.map(doc => doc.ref.delete())).then(() =>
                    this.translateService.get('Pricelist Deleted').subscribe(msg => this.toasterService.success(msg))
                ));

            this.importService.itemsService.db.collection('combinations').ref.get().then(res =>
                Promise.all(res.docs.map(doc => doc.ref.delete())).then(() =>
                    this.translateService.get('Combinations Deleted').subscribe(msg => this.toasterService.success(msg))
                ));

            this.importService.itemsService.db.collection('logs').ref.get().then(res =>
                Promise.all(res.docs.map(doc => doc.ref.delete())).then(() =>
                    this.translateService.get('Logs Deleted').subscribe(msg => this.toasterService.success(msg))
                ));

            this.importService.itemsService.db.collection('meta').ref.get().then(res =>
                Promise.all(res.docs.map(doc => doc.ref.delete())).then(() =>
                    this.translateService.get('Meta Deleted').subscribe(msg => this.toasterService.success(msg))
                ));

            this.importService.itemsService.db.collection('bills').ref.get().then(res =>
                Promise.all(res.docs.map(doc => doc.ref.delete())).then(() =>
                    this.translateService.get('Bills Deleted').subscribe(msg => this.toasterService.success(msg))
                ));

            this.importService.itemsService.db.collection('invoices').ref.get().then(res =>
                Promise.all(res.docs.map(doc => doc.ref.delete())).then(() =>
                    this.translateService.get('Invoices Deleted').subscribe(msg => this.toasterService.success(msg))
                ));

            this.importService.itemsService.db.collection('promotions').ref.get().then(res =>
                Promise.all(res.docs.map(doc => doc.ref.delete())).then(() =>
                    this.translateService.get('Promotions Deleted').subscribe(msg => this.toasterService.success(msg))
                ));

            this.importService.itemsService.db.collection('messages').ref.get().then(res =>
                Promise.all(res.docs.map(doc => doc.ref.delete())).then(() =>
                    this.translateService.get('Messages Deleted').subscribe(msg => this.toasterService.success(msg))
                ));
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
                this.importService.itemsService.updateItem(newItem['code'], {
                    storageBalance: newItem['storageBalance'],
                    branchBalance: newItem['branchBalance']
                });
            });
            // this.importService.itemsService.updateItems();
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
            // data.forEach(newItem => {
            //     if (this.importService.itemsService.itemArray.find(item => item.code === newItem['code'])) {
            //         this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).length = newItem['length'];
            //         this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).width = newItem['width'];
            //         this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).height = newItem['height'];
            //         this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).weight = newItem['weight'];
            //         this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).volume = newItem['volume'];
            //         this.importService.itemsService.updateItem(newItem['code'], {
            //             length: newItem['length'],
            //             width: newItem['width'],
            //             height: newItem['height'],
            //             weight: newItem['weight'],
            //             volume: newItem['volume'],
            //         });
            //     }
            // });
            // this.importService.itemsService.updateItems();
            // console.log(wsname, data);
        };
        reader.readAsBinaryString(target.files[0]);
    }

    saveData() {

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
