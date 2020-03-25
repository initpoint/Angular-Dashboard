import {Component, OnInit} from '@angular/core';
import {ImportService} from '../../shared/services/firebase/import.service';
import {CustomerService} from '../../shared/services/firebase/customer.service';
import {formatDate} from '@angular/common';
import {InvoicesService} from '../../shared/services/firebase/invoices.service';
import {LogsService} from '../../shared/services/firebase/logs.service';
import {BillsService} from '../../shared/services/firebase/bills.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-invoices',
    templateUrl: './invoices.component.html',
    styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
    customersSource: any;
    lang = localStorage.getItem('lang') === 'ar';
    currentCustomer;
    customerInvoices = [];
    doneSaving = false;
    currentUser = JSON.parse(localStorage.getItem('user'));
    constructor(public invoicesService: InvoicesService, private logs: LogsService, public importService: ImportService,private router: Router,
                public customerService: CustomerService) {
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
        this.customerInvoices = [];
        this.invoicesService.getCustomerInvoices(this.currentCustomer.uid).subscribe(items => {
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
            fileRow['customerId'] = this.currentCustomer.uid;
            return fileRow;
        });
        this.invoicesService.addInvoices(invoices).then(() => {
            this.logs.createLog(`Imported ${invoices.length} Invoices`);
            this.doneSaving = true;
        });
    }
}
