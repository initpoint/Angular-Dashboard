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

    // wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
    constructor(private importService: ImportService) {
        this.lang = localStorage.getItem('lang') === 'ar';
    }

    onFileChange(evt: any) {
        this.show = true;
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
            const data = XLSX.utils.sheet_to_json(ws, {header: ['barCodeId', 'code', 'nameArFull', 'materialCode', 'materialNameAr', 'rankingCode', 'rankingNameAr', 'unitCode', 'unitNameAr', 'size']}).slice(1);
            this.importService.db.doc('item/itemArray').delete().then(() => {
                Promise.all([this.importService.importToPhones(data), this.importService.importJSON(data)]).then(res => {
                    this.show = false;
                });
            });
        };
        reader.readAsBinaryString(target.files[0]);
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') === 'ar';
    }

    uploadPriceList(evt: any) {
        this.show = true;
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        console.log(target.files.item(0).name);
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];

            /* save data */

            let data = XLSX.utils.sheet_to_json(ws, {header: ['no', 'bla1', 'bla2', 'bla3', 'bla4', 'bla5', 'code', 'bla7', 'bla8', 'bla9', 'bla10', 'bla11', 'price', 'bla13', 'bla14', 'bla15', 'bla16', 'bla17', 'bla18', 'bla19', 'bla20', 'bla21', 'bla22', 'bla23', 'bla24', 'bla25', 'qty']}).slice(1);
            this.importService.db.collection('pricelist').add({name: target.files.item(0).name.split('.')[0]}).then(res => {
                data.forEach(data => {
                    this.importService.importPriceList(data, res.id);
                });
                this.show = false;
            });
        };
        reader.readAsBinaryString(target.files[0]);
    }

}
