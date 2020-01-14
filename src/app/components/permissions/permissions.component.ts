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
    currentFitler: Array<any>;
    currentUser;
    selectedItems: any;
    canChangePermissions = false;
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
        console.log(this.selectedItems);
        console.log(this.currentUser);
        this.permissionService.updateUserPermission(this.currentUser.uid, this.selectedItems);
        // this.currentDeselectedRowKeys.forEach(DeselectedKey => {
        //     this.permissionService.removePermission(this.currentRow, this.source.items().find(item => item.key === DeselectedKey).data);
        // });
        // this.selectedRowKeys.forEach(SelectedRow => {
        //     this.permissionService.addPermission(this.currentRow, this.selectedRowData.find(item => item.id === SelectedRow));
        // });
    }

    onFocusedRowChanged(e: any) {
        this.currentUser = e.row.data;
        this.currentFitler = [];
        // this.filterValue = ['code', 'startswith', '9311'];
        this.permissionService.getUserPermissions(e.row.data.uid).subscribe(doc => {
            this.currentUserPermissions = doc.data().items;
            doc.data().items.forEach(item => {
                this.currentFitler.push(['code', '=', item]);
                this.currentFitler.push(['or']);
            });
        });
        this.currentFitler.slice(0, this.currentFitler.length - 1);
        this.filterValue = this.currentFitler;
    }

    // uid: "b8gWFvNAYmRVpZCzTzvuISMHdRD2"
    // code: "sadsda"
    // email: "customer2@mailinator.com"
    // isActive: true
    // lastLoginAt: 1578938483679
    // mobile: 123456
    // name: "Customer"
    // pricelist: null
    filterItems(e: any) {
        this.filterValue = e.value ? this.currentFitler : undefined;
        if (e.value) {
            this.dataGrids.instance.deselectAll();
        } else {
            this.dataGrids.instance.selectRows(this.currentUserPermissions, false);
        }
    }
}
