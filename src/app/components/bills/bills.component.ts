import {Component, OnInit, Output} from '@angular/core';
import {BillsService} from '../../shared/services/firebase/bills.service';
import {ImportService} from '../../shared/services/firebase/import.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-bills',
    templateUrl: './bills.component.html',
    styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
    billSource;
    lang = localStorage.getItem('lang') === 'ar';
    itemsToShow: any[] = [];
    columnObjects: any[] = [];
    columnToShow: any[] = [];
    rowCounter: number = 0;
    dataFromFile: any[] = [];
    popupVisible = false;

    constructor(private billsService: BillsService, private importService: ImportService, private toastr: ToastrService) {
        this.billsService.getBills().subscribe(res => {
            this.billSource = res;
        });
    }

    ngOnInit() {
    }

    addBill(event) {
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(event.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        this.popupVisible = true;
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            let data = XLSX.utils.sheet_to_json(ws, {header: 'A'});
            this.dataFromFile = data.slice(1);
            this.columnToShow = [];
            this.columnObjects = [];
            let i = 0;
            Object.values(data[0]).forEach(column => {
                this.columnObjects.push({text: column, valueField: Object.keys(data[0])[i]});
                i++;
            });
            this.importService.billsData.forEach(column => {
                let field = this.columnObjects.find(row => row.text === column.text);
                if (field) {
                    this.columnToShow.push({
                        text: column.text,
                        isFound: true,
                        value: field.text,
                        valueField: field.valueField,
                        field: column.field
                    });
                } else {
                    this.columnToShow.push({
                        text: column.text,
                        isFound: false,
                        value: field.text,
                        valueField: field.valueField,
                        field: column.field
                    });
                }
            });
            this.rowCounter = data.length - 1;
        };
        reader.readAsBinaryString(target.files[0]);
    }

    rowClick(e) {
        // const wb = XLSX.utils.book_new();
        // const ws = XLSX.utils.json_to_sheet([...e.data.itemsArray, ...e.data.bills]);
        // XLSX.utils.book_append_sheet(wb, ws, 'bill');
        // XLSX.writeFile(wb, 'xlsxout.xlsx');

        // e.component.isRowExpanded(e.key) ? e.component.collapseRow(e.key) : e.component.expandRow(e.key);
    }

    btnClicked() {
        this.popupVisible = true;
    }

    downloadTemplate(data) {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet([data.map(item => item.text)], {skipHeader: true});
        XLSX.utils.book_append_sheet(wb, ws, 'priceList');
        XLSX.writeFile(wb, 'priceListTemplate.xlsx');
    }

    saveData() {
        let documents = {
            pricelistCode: '',
            pricelistName: '',
        };
        this.dataFromFile.forEach(item => {
            Object.keys(item).forEach(key => {
                if (this.columnToShow.find(column => column.valueField == key)) {
                    // replace old keys (A,B,C,....) with the fields names
                    item[this.columnToShow.find(column => column.valueField == key).field] = item[key];
                }
                // Delete old keys
                delete item[key];
            });
            console.log(item);
        });
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
