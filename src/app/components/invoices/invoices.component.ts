import {Component, OnInit, Output} from '@angular/core';
import {ImportService} from '../../shared/services/firebase/import.service';
import * as XLSX from 'xlsx';
import {CustomerService} from '../../shared/services/firebase/customer.service';
import {formatDate} from '@angular/common';
import {InvoicesService} from '../../shared/services/firebase/invoices.service';
import {LogsService} from '../../shared/services/firebase/logs.service';

@Component({
    selector: 'app-invoices',
    templateUrl: './invoices.component.html',
    styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
    customersSource: any;
    lang = localStorage.getItem('lang') === 'ar';
    rowCounter: number = 0;
    currentUser;
    customerInvoices = [];
    doneSaving = false;

    constructor(public invoicesService: InvoicesService, private logs: LogsService, public importService: ImportService, public customerService: CustomerService) {
        this.customerService.getCustomers().subscribe(res => {
            this.customersSource = res;
        });
    }

    ngOnInit() {
    }

    onFocusedRowChanged(e: any) {
        this.currentUser = e.row.data;
        this.customerInvoices = [];
        this.invoicesService.getCustomerInvoices(this.currentUser.uid).subscribe(items => {
            this.customerInvoices = items;
        });
    }

    saveImportedData(dataFromFile, columnToShow) {
        this.doneSaving = false;
        const invoices = dataFromFile.map(fileRow => {
            Object.keys(fileRow).forEach(oldKey => {
                const newColumn = columnToShow.find(column => column.valueField === oldKey);
                if (newColumn) {
                    fileRow[newColumn.field] = fileRow[oldKey]; // replace old keys (A,B,C,....) with the fields names
                }
                delete fileRow[oldKey];
            });
            fileRow['createDate'] = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss.SSSSSS', 'en-US');
            fileRow['customerId'] = this.currentUser.uid;
            return fileRow;
        });
        this.invoicesService.addInvoices(invoices).then(() => {
            this.logs.createLog(`Imported ${invoices.length} Invoices`);
            this.doneSaving = true;
        });
    }
}
