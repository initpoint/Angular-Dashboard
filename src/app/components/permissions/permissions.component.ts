import {Component, OnInit, ViewChild, QueryList} from '@angular/core';
import {PermissionService} from 'src/app/shared/services/firebase/permission.service';
import {ItemsService} from '../../shared/services/firebase/items.service';
import {DxDataGridComponent} from 'devextreme-angular';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-Permission',
    templateUrl: './permissions.component.html',
    styleUrls: ['./permissions.component.scss'],
})
export class PermissionComponent implements OnInit {
    @ViewChild('items', {static: false}) dataGrids: DxDataGridComponent;
    customersSource: any;
    source: any;
    lang;
    materialSelectedRows = {};
    rankingSelectedRows = {};
    filterValue = [];
    currentFilter: Array<any>;
    currentUser;
    selectedItems: any;
    showCurrentPermissions = true;
    currentUserPermissions: [];
    popupVisible: boolean;
    selectedForCopy;
    items: any[] = [];

    constructor(public itemsService: ItemsService,
                private permissionService: PermissionService) {
        this.permissionService.customerService.getCustomers().subscribe(res => {
            this.customersSource = res;
        });
        this.itemsService.getItems().subscribe(items => {
            this.items = items;
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
        const addedPerms = this.selectedItems.filter(newItem => !this.currentUserPermissions.find(item => item === newItem));
        const removedPerms = this.currentUserPermissions.filter(oldItem => !this.selectedItems.find(item => item === oldItem));
        const unchangedPerms = this.currentUserPermissions.filter(oldItem => this.selectedItems.find(item => item === oldItem));
        const proceed = confirm(`${addedPerms.length} New Premissions\n
        ${removedPerms.length} Removed Premissions\n
        ${unchangedPerms.length} Unchanged Premissions\n`);
        if (proceed) {
            this.permissionService.updateUserPermission(this.currentUser.uid, this.selectedItems, addedPerms, removedPerms, unchangedPerms);
        }
    }

    onFocusedRowChanged(e: any) {
        this.currentUser = e.row.data;
        this.permissionService.getUserPermissions(e.row.data.uid).subscribe(doc => {
            if (doc.exists) { // Check if Permission doc exists
                this.currentUserPermissions = doc.data().items;
                this.currentFilter = [];
                for (let i = 0; i < doc.data().items.length; i++) {
                    this.currentFilter.push(['code', '=', doc.data().items[i]]);
                    if (doc.data().items.length - i > 1) {
                        this.currentFilter.push('or');
                    }
                }
                this.filterValue = this.currentFilter;

                this.dataGrids.instance.selectRows(this.currentUserPermissions, false);
            } else {
                console.log('Permission Doc does not exist, creating empty one.');
                this.permissionService.createDoc(e.row.data.uid);
            }
        });
        this.showCurrentPermissions = true;
    }

    filterItems(e: any) {
        this.filterValue = e.value ? this.currentFilter : [];
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
