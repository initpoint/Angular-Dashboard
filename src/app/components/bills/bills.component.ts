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
    currentUser;
    customerBills = [];
    doneSaving = false;

    constructor(public itemsService: ItemsService, private logs: LogsService, public billsService: BillsService,
                public importService: ImportService, public customerService: CustomerService) {
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

    saveImportedData(dataFromFile, columnToShow) {
        const billInfo = dataFromFile.map(fileRow => {
            Object.keys(fileRow).forEach(oldKey => {
                const newColumn = columnToShow.find(column => column.valueField === oldKey);
                if (newColumn) {
                    fileRow[newColumn.field] = fileRow[oldKey]; // replace old keys (A,B,C,....) with the fields names
                }
                delete fileRow[oldKey];
            });
            return fileRow;
        });
        billInfo.map(billItem => {
            this.itemsService.updateItem(billItem.code.toString(), {soldQty: firebase.firestore.FieldValue.increment(billItem.qty)});
        });
        this.billsService.addBill({
            items: billInfo,
            createDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss.SSSSSS', 'en-US'),
            customerId: this.currentUser.uid
        });
        this.logs.createLog('Imported Bills');
        this.doneSaving = true;
    }
}
