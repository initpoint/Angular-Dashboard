import {Component, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';
import {ImportService} from '../../shared/services/firebase/import.service';
import {json} from '@angular-devkit/core';

@Component({
    selector: 'app-import',
    templateUrl: './import.component.html',
    styleUrls: ['./import.component.scss'],
})
export class ImportComponent implements OnInit {
    data: any;
    public show: boolean;
    // wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
    constructor(private importService:ImportService) {
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
            this.data = XLSX.utils.sheet_to_json(ws, {header: ['barCodeId','code','nameAr','materialCode','materialNameAr','rankingCode','rankingNameAr','unitCode','unitNameAr','size']}).slice(1);
           //console.log(this.data);
            this.data.forEach(data=> {
                this.importService.importJSON(data);
            })
            this.show = false;
        };
        reader.readAsBinaryString(target.files[0]);

    }

    ngOnInit() {

    }


}
