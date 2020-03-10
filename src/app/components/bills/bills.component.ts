import {Component, OnInit, Output} from '@angular/core';
import {BillsService} from '../../shared/services/firebase/bills.service';
import {ImportService} from '../../shared/services/firebase/import.service';
import * as XLSX from 'xlsx';
import {LogsService} from '../../shared/services/firebase/logs.service';
import {CustomerService} from '../../shared/services/firebase/customer.service';
import {ItemsService} from '../../shared/services/firebase/items.service';
import {formatDate} from '@angular/common';

import * as firebase from 'firebase';

@Component({
    selector: 'app-bills',
    templateUrl: './bills.component.html',
    styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
    customersSource: any;
    lang = localStorage.getItem('lang') === 'ar';
    fileColumns: any[] = [];
    columnToShow: any[] = [];
    rowCounter = 0;
    dataFromFile: any[] = [];
    popupVisible = false;
    currentUser;
    customerBills = [];

    constructor(public itemsService: ItemsService, private logs:LogsService,public billsService: BillsService, public importService: ImportService, public customerService: CustomerService) {
        this.customerService.getCustomers().subscribe(res => {
            this.customersSource = res;
        });
    }

    ngOnInit() {
    }

    onFocusedRowChanged(e: any) {
        this.currentUser = e.row.data;
        this.customerBills = [];
        this.billsService.getCustomerBills(this.currentUser.uid).subscribe(items => {
            this.customerBills = items;
        });
    }

    addBill(event) {
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(event.target);
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
            const file = XLSX.utils.sheet_to_json(ws, {header: 'A', defval: ''});
            console.log(file);
            const fileHeaderRow = file[0];
            this.dataFromFile = file.slice(1);
            this.rowCounter = this.dataFromFile.length;
            this.columnToShow = [];
            this.fileColumns = Object.values(fileHeaderRow).map((columnValue, index) => {
                return {text: columnValue, valueField: Object.keys(fileHeaderRow)[index]};
            });
            this.importService.billStructure.forEach(billStructureField => {
                const field = this.fileColumns.find(column => column.text === billStructureField.text);
                if (field) {
                    this.columnToShow.push({
                        text: billStructureField.text,
                        isFound: true,
                        value: field.text,
                        valueField: field.valueField,
                        field: billStructureField.field
                    });
                } else {
                    this.columnToShow.push({
                        text: billStructureField.text,
                        isFound: false,
                        value: null,
                        valueField: null,
                        field: billStructureField.field
                    });
                }
            });
        };
        reader.readAsBinaryString(target.files[0]);
    }

    downloadTemplate(data) {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet([data.map(item => item.text)], {skipHeader: true});
        XLSX.utils.book_append_sheet(wb, ws, 'Bills');
        XLSX.writeFile(wb, 'BillTemplate.xlsx');
    }

    saveData() {
        let billInfo = [];
        this.dataFromFile.forEach(fileRow => {
            Object.keys(fileRow).forEach(key => {
                if (this.columnToShow.find(column => column.valueField == key)) {
                    // replace old keys (A,B,C,....) with the fields names
                    fileRow[this.columnToShow.find(column => column.valueField == key).field] = fileRow[key];
                }
                // Delete old keys
                delete fileRow[key];
            });
            billInfo.push(fileRow);

        });
        billInfo.map(billItem => {
            this.itemsService.updateItem(billItem.code.toString(), {soldQty: firebase.firestore.FieldValue.increment(billItem.qty)});
        });
        this.billsService.addBill({
            items: billInfo,
            createDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss.SSSSSS', 'en-US'),
            customerId: this.currentUser.uid
        });
        this.cancelData();
        const logData = 'Imported Bills';
        this.logs.createLog(logData);
    }

    rowFound(row, value) {
        (<any>this).defaultSetCellValue(row, value);

    }

    cancelData() {
        this.columnToShow = [];
        this.fileColumns = [];
        this.rowCounter = 0;
        this.popupVisible = false;
    }
}
