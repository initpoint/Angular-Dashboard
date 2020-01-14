import {Component, OnInit, ViewChild, QueryList} from '@angular/core';
import {PermissionService} from 'src/app/shared/services/firebase/permission.service';
import {Category} from 'src/app/shared/model/category.model';
import DataSource from 'devextreme/data/data_source';
import CustomeStore from 'devextreme/data/custom_store';
import {NgForm} from '@angular/forms';
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

    constructor(private itemsService: ItemsService,
                private permissionService: PermissionService) {
        this.customersSource = new DataSource(new CustomeStore({
            key: 'uid',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') === 'ar';
                    this.permissionService.getCustomers().subscribe(res => {
                        resolve({data: res});
                    });
                });
            }
        }));
        this.itemsService.getItemsSync().subscribe(res => {
            this.source = Object.keys(res.data()).map(key => res.data()[key]);
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
        this.permissionService.updateUserPermission(this.currentUser.uid, this.selectedItems);
    }

    onFocusedRowChanged(e: any) {
        this.currentUser = e.row.data;
        this.permissionService.getUserPermissions(e.row.data.uid).subscribe(doc => {
            this.currentUserPermissions = doc.data().items;
            this.currentFilter = [];
            for (let i = 0; i < doc.data().items.length; i++) {
                this.currentFilter.push(['code', '=', doc.data().items[i]]);
                if (doc.data().items.length - i > 1) {
                    this.currentFilter.push('or');
                }
            }
            this.filterValue = this.currentFilter;
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
}
