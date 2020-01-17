import {Component, OnInit, ViewChild, QueryList} from '@angular/core';
import {PermissionService} from 'src/app/shared/services/firebase/permission.service';
import {ItemsService} from '../../shared/services/firebase/items.service';
import {DxDataGridComponent} from 'devextreme-angular';

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

    constructor(private itemsService: ItemsService,
                private permissionService: PermissionService) {
        this.permissionService.getCustomers().subscribe(res => {
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
                    component.selectRows(item.barCodeId, true);
                } else {
                    component.deselectRows(item.barCodeId);
                }
            });
        }
        if (collapsedItems) {
            collapsedItems.forEach(item => {
                if (event.value) {
                    component.selectRows(item.barCodeId, true);
                } else {
                    component.deselectRows(item.barCodeId);
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
        this.permissionService.updateUserPermission(this.currentUser.uid, this.selectedItems);
    }

    onFocusedRowChanged(e: any) {
        this.currentUser = e.row.data;
        this.permissionService.getUserPermissions(e.row.data.uid).subscribe(doc => {
            if (doc.exists) { // Check if Permission doc is exists
                this.currentUserPermissions = doc.data().items;
                this.currentFilter = [];
                for (let i = 0; i < doc.data().items.length; i++) {
                    this.currentFilter.push(['barCodeId', '=', doc.data().items[i]]);
                    if (doc.data().items.length - i > 1) {
                        this.currentFilter.push('or');
                    }
                }
                this.filterValue = this.currentFilter;
            }
        });
        this.showCurrentPermissions = true;
    }

    filterItems(e: any) {
        this.filterValue = e.value ? this.currentFilter : [];
        if (e.value) {
            this.dataGrids.instance.deselectAll();
        } else {
            this.dataGrids.instance.selectRows(this.currentUserPermissions, false);
        }
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
}
