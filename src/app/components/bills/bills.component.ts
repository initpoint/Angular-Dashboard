import {Component, OnInit} from '@angular/core';
import {BillsService} from '../../shared/services/firebase/bills.service';
import {ImportService} from '../../shared/services/firebase/import.service';
import {LogsService} from '../../shared/services/firebase/logs.service';
import {CustomerService} from '../../shared/services/firebase/customer.service';
import {ItemsService} from '../../shared/services/firebase/items.service';
import {formatDate} from '@angular/common';

import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Component({
    selector: 'app-bills',
    templateUrl: './bills.component.html',
    styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
    customersSource: any;
    lang = localStorage.getItem('lang') === 'ar';
    currentCustomer;
    customerBills = [];
    doneSaving = false;
    currentUser = JSON.parse(localStorage.getItem('user'));
    constructor(public itemsService: ItemsService, private logs: LogsService, public billsService: BillsService,private router: Router,
                public importService: ImportService, public customerService: CustomerService) {
        this.customerService.getCustomers().subscribe(res => {
            this.customersSource = res;
        });
    }

    ngOnInit() {
        this.currentUser.permissions.canUpdate = this.currentUser.permissions.update.includes(this.router.url);
        this.currentUser.permissions.canCreate = this.currentUser.permissions.create.includes(this.router.url);
        this.currentUser.permissions.canRemove = this.currentUser.permissions.delete.includes(this.router.url);
        this.currentUser.permissions.canExport = this.currentUser.permissions.export.includes(this.router.url);
        this.currentUser.permissions.canImport = this.currentUser.permissions.import.includes(this.router.url);
        this.currentUser.permissions.canView = this.currentUser.permissions.view.includes(this.router.url);
    }

    onFocusedRowChanged(e: any) {
        this.currentCustomer = e.row.data;
        this.customerBills = [];
        this.billsService.getCustomerBills(this.currentCustomer.uid).subscribe(items => {
            this.customerBills = items;
        });
    }

    saveImportedData(dataFromFile, columnToShow) {
        this.doneSaving = false;
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
            customerId: this.currentCustomer.uid
        });
        this.logs.createLog('Imported Bills');
        this.doneSaving = true;
    }
}
