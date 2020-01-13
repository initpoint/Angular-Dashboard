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
    filterValue: Array<any>;
    currentRow;
    selectedRowKeys: any[] = [];
    selectedRowData: any[] = [];
    currentDeselectedRowKeys: any[] = [];


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
            },
            update: (key, values) => {
                return this.permissionService.updatePermission(key, values);
            },
            remove: (key) => {
                let item = this.customersSource.items().find(item => item.id === key);
                item.isActive = !item.isActive;
                return this.permissionService.updatePermission(key, item);
            },
            insert: (values) => {
                return this.permissionService.createPermission(values);
            },

        }));

        this.source = new DataSource(new CustomeStore({
            key: 'code',
            load: (opts) => this.itemsService.getItems(),
            update: (key, newValues) => this.itemsService.updateItem(key, newValues),
            remove: (key) => this.itemsService.updateItem(key, {isActive: false})
        }));

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

    RowClicked(e: any) {
        this.filterValue = ['code', 'startswith', '9311'];
        this.currentRow = e.data;
        // this.dataGrids.instance.filter();
    }

    SaveCustomerPermissions() {
        this.currentDeselectedRowKeys.forEach(DeselectedKey => {
            this.permissionService.removePermission(this.currentRow, this.source.items().find(item => item.key === DeselectedKey).data);
        });
        this.selectedRowKeys.forEach(SelectedRow => {
            this.permissionService.addPermission(this.currentRow, this.selectedRowData.find(item => item.id === SelectedRow));
        });
    }

}
