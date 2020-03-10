import {Component, OnInit, ViewChild, QueryList} from '@angular/core';
import {PermissionService} from 'src/app/shared/services/firebase/permission.service';
import {ItemsService} from '../../shared/services/firebase/items.service';
import {LogsService} from '../../shared/services/firebase/logs.service';
import {DxDataGridComponent} from 'devextreme-angular';
import * as XLSX from 'xlsx';
import {CustomerService} from '../../shared/services/firebase/customer.service';
import CustomStore from 'devextreme/data/custom_store';

@Component({
    selector: 'app-permission',
    templateUrl: './permissions.component.html',
    styleUrls: ['./permissions.component.scss'],
})
export class PermissionComponent implements OnInit {
    @ViewChild('allItemsDataGrid', {static: false}) allItemsDataGrid: DxDataGridComponent;
    customersSource: any;
    lang;
    materialSelectedRows = {};
    rankingSelectedRows = {};
    currentUser;
    selectedItems: any;
    showCurrentPermissions = true;
    customerItemsCodes = [];
    customerItemsList = [];
    allItemsSource: any;

    constructor(public itemsService: ItemsService,
                private logs: LogsService,
                private permissionService: PermissionService,
                public customerService: CustomerService) {
        this.customerService.getCustomers().subscribe(res => {
            this.customersSource = res;
        });
        this.itemsService.lastItem = null;
        this.allItemsSource = new CustomStore({
            key: 'code',
            totalCount: () => new Promise(resolve => {
                this.itemsService.getItemsTotalCount().subscribe(metaDoc => {
                    resolve(metaDoc.data()['count']);
                });
            }),
            load: (opts) => {
                return new Promise((resolve) => {
                    this.itemsService.getItemsForPagination().subscribe(items => {
                        resolve(items);
                    });
                });
            }
        });
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') === 'ar';
    }

    materialRowSelected(event, key, items, collapsedItems, component) {
        this.materialSelectedRows[key[1]] = event.value;
        component.expandRow(key);
        if (items) {
            items.forEach(item => {
                if (event.value) {
                    component.selectRows(item.code, true);
                } else {
                    component.deselectRows(item.code);
                }
            });
        }
        if (collapsedItems) {
            collapsedItems.forEach(item => {
                if (event.value) {
                    component.selectRows(item.code, true);
                } else {
                    component.deselectRows(item.code);
                }
            });
        }
    }

    rankingRowSelected(event, ranking) {
        this.rankingSelectedRows[ranking.key[0]] = event.value;
        ranking.component.expandRow(ranking.key);
        if (ranking.data.items) {
            ranking.data.items.forEach(item => {
                this.materialRowSelected(event, [ranking.key[0], item.key], item.items, item.collapsedItems, ranking.component);
            });
        }
        if (ranking.data.collapsedItems) {
            ranking.data.collapsedItems.forEach(item => {
                this.materialRowSelected(event, [ranking.key[0], item.key], item.items, item.collapsedItems, ranking.component);
            });
        }
    }

    getMaterialSelectValue(material) {
        return this.materialSelectedRows[material.key[1]];
    }

    getRankingSelectValue(ranking) {
        return this.rankingSelectedRows[ranking.key[0]];
    }

    saveCustomerPermissions() {
        const addedPerms = this.selectedItems.filter(newItem => !this.customerItemsCodes.find(item => item === newItem));
        const removedPerms = this.customerItemsCodes.filter(oldItem => !this.selectedItems.find(item => item === oldItem));
        const unchangedPerms = this.customerItemsCodes.filter(oldItem => this.selectedItems.find(item => item === oldItem));
        const proceed = confirm(`${addedPerms.length} New Premissions\n
        ${removedPerms.length} Removed Premissions\n
        ${unchangedPerms.length} Unchanged Premissions\n`);
        if (proceed) {
            this.permissionService.updateUserPermission(this.currentUser.uid, this.selectedItems, addedPerms, removedPerms, unchangedPerms).then(res => {
                let logData = 'Updated customer Permissions [' + this.currentUser.name + '] data ';
                if (addedPerms.length != 0) {
                    logData = logData.concat('[added] to [' + addedPerms + ']  & ');
                }
                if (removedPerms.length != 0) {
                    logData = logData.concat('[removed] to [' + removedPerms + ']  & ');
                }
                if (unchangedPerms.length != 0) {
                    logData = logData.concat(' & [unchanged] to [' + unchangedPerms + ']');
                }
                this.logs.createLog(logData);
            });
        }
    }

    onFocusedRowChanged(e: any) {
        this.currentUser = e.row.data;
        this.customerItemsList = [];
        this.customerItemsCodes = [];
        this.itemsService.getItemsForUser(this.currentUser.uid).subscribe(items => {
            this.customerItemsList = items;
            this.customerItemsCodes = this.customerItemsList.map(item => item.code);
            this.allItemsDataGrid.instance.selectRows(this.customerItemsCodes, false);
        });
    }

    importPermissions(evt) {
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
            const data = XLSX.utils.sheet_to_json(ws, {header: ['no', 'code', 'barCodeId', 'nameArFUll', 'soldQty']}).slice(1);
            this.selectedItems = data.map(item => item['code']);
            this.saveCustomerPermissions();
        };
        reader.readAsBinaryString(target.files[0]);
    }

    isNew(data) {
        if (data.value && this.currentUser && data.value.includes(this.currentUser.uid)) {
            return true;
        }
        return false;
    }
}
