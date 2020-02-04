import {Component, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';
import {ImportService} from '../../shared/services/firebase/import.service';

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

    // wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
    constructor(private importService: ImportService,) {
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
            console.log('Deleting Database')
            this.importService.itemsService.db.collection('item').ref.get().then(res=> {
                res.docs.forEach(doc => {
                    doc.ref.delete();
                })
                console.log('item deleted');
            })
            this.importService.itemsService.db.collection('permission').ref.get().then(res=> {
                res.docs.forEach(doc => {
                    doc.ref.delete();
                })
                console.log('permissions deleted');
            })
            this.importService.itemsService.db.collection('pricelist').ref.get().then(res=> {
                res.docs.forEach(doc => {
                    doc.ref.delete();
                })
                console.log('pricelist deleted');
            })
            this.importService.itemsService.db.collection('carts').ref.get().then(res=> {
                res.docs.forEach(doc => {
                    doc.ref.delete();
                })
                console.log('carts deleted');
            })
            this.importService.itemsService.db.collection('combinations').ref.get().then(res=> {
                res.docs.forEach(doc => {
                    doc.ref.delete();
                })
                console.log('combinations deleted');
            })
        }
    }
    uploadImages() {
        let i = 0;
        this.value.forEach(file => {
            file.newName = Math.floor(Math.random() * 10000000) + '-' + i + '.' + file.name.split('.').reverse()[0];
            let data = {
                barCodeId:file.name.split('.')[0],
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
            const data = XLSX.utils.sheet_to_json(ws,{header:['no','code','barCodeId','nameArFUll','storageBalance','branchBalance']}).slice(1);

            data.forEach( newItem => {
                if (this.importService.itemsService.itemArray.find(item => item.code === newItem['code'])) {
                    this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).storageBalance = newItem['storageBalance'];
                    this.importService.itemsService.itemArray.find(item => item.code === newItem['code']).branchBalance = newItem['branchBalance'];
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
            const wsname: string = wb.SheetNames[1];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const data = XLSX.utils.sheet_to_json(ws,{header:['no','code','barCodeId','nameArFUll','unitNameAr','price','size']}).slice(1);
            console.log(wsname,data)
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
            const wsname: string = wb.SheetNames[2];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const data = XLSX.utils.sheet_to_json(ws,{header:['no','code','barCodeId','nameArFUll','amount']}).slice(1);
            console.log(wsname,data)
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
            const wsname: string = wb.SheetNames[3];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const data = XLSX.utils.sheet_to_json(ws,{header:['no','code','barCodeId','nameArFUll','length','width','height','weight','size']}).slice(1);
            console.log(wsname,data)
        };
        reader.readAsBinaryString(target.files[0]);
    }

}
