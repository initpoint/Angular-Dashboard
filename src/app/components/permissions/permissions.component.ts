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
    enableUpdateCombinations: boolean = true;

    constructor(public itemsService: ItemsService,
                private permissionService: PermissionService) {
        this.permissionService.customerService.getCustomers().subscribe(res => {
            this.customersSource = res;
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
        this.permissionService.updateUserPermission(this.currentUser.uid, this.currentUserPermissions, this.selectedItems);
    }

    onFocusedRowChanged(e: any) {
        this.currentUser = e.row.data;
        this.permissionService.getUserPermissions(e.row.data.uid).subscribe(doc => {
            if (doc.exists) { // Check if Permission doc is exists
                this.currentUserPermissions = doc.data().items;
                this.currentFilter = [];
                for (let i = 0; i < doc.data().items.length; i++) {
                    this.currentFilter.push(['code', '=', doc.data().items[i]]);
                    if (doc.data().items.length - i > 1) {
                        this.currentFilter.push('or');
                    }
                }
                this.filterValue = this.currentFilter;
            } else {
                console.log('Permission Doc does not exist, creating empty one.');
                this.permissionService.createDoc(e.row.data.uid);
            }
        });
        this.showCurrentPermissions = true;
    }

    filterItems(e: any) {
        this.filterValue = e.value ? this.currentFilter : [];
        this.enableUpdateCombinations = false;
        if (e.value) {
            this.dataGrids.instance.deselectAll();
        } else {
            this.dataGrids.instance.selectRows(this.currentUserPermissions, false);
        }
        this.enableUpdateCombinations = true;
    }


    RowClicked($event: any) {
        if ($event.rowType === 'data') {
            if ($event.event.target.className === 'btn btn-sm btn-pill btn-primary') {
                this.popupVisible = true;
            }
        }
    }

    click(e: any) {
        this.permissionService.getUserPermissions(this.selectedForCopy.uid).subscribe(doc => {
            this.selectedItems = doc.data().items;
            this.saveCustomerPermissions();
        });
        this.popupVisible = false;
    }

    // selectionChanged(e) {
    //     if (!this.enableUpdateCombinations) {
    //         return;
    //     }
    //     if (e.currentSelectedRowKeys) {
    //         e.currentSelectedRowKeys.forEach(key => {
    //             this.permissionService.addCombinationUsers(this.currentUser.uid, key);
    //         });
    //     }
    //     if (e.currentDeselectedRowKeys) {
    //         e.currentDeselectedRowKeys.forEach(key => {
    //             this.permissionService.removeCombinationUsers(this.currentUser.uid, key);
    //         });
    //     }
    // }

    importPermissions(evt, customerId) {
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
}
