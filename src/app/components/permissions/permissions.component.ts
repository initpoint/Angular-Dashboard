import {Component, OnInit, ViewChild} from '@angular/core';
import {PermissionService} from 'src/app/shared/services/firebase/permission.service';
import {Category} from 'src/app/shared/model/category.model';
import DataSource from 'devextreme/data/data_source';
import CustomeStore from 'devextreme/data/custom_store';
import {NgForm} from '@angular/forms';
import {ProductsService} from 'src/app/shared/services/firebase/products.service';

@Component({
    selector: 'app-Permission',
    templateUrl: './permissions.component.html',
    styleUrls: ['./permissions.component.scss'],
})
export class PermissionComponent implements OnInit {
    @ViewChild('form', {static: false}) form: NgForm;
    value: any[] = [];
    categories: Category[];
    CustomersStore: CustomeStore;
    initSelectedRows: any[] = [];
    lang;
    currentRow;
    currentTreeRow;
    itemStore: CustomeStore;
    itemSource: DataSource;
    CustomersData: DataSource;
    selectedRowKeys: any[] = [];
    selectedRowData: any[] = [];
    currentDeselectedRowKeys: any[] = [];

    constructor(
        private productService: ProductsService,
        private permissionService: PermissionService) {
        this.CustomersStore = new CustomeStore({
            key: 'uid',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    this.permissionService.getCustomers().subscribe(res => {
                        resolve({data: res});
                    });
                });
            },
            update: (key, values) => {
                return this.permissionService.updatePermission(key, values);
            },
            remove: (key) => {
                let item = this.CustomersData.items().find(item => item.id == key);
                item.isActive = !item.isActive;
                return this.permissionService.updatePermission(key, item);
            },
            insert: (values) => {
                return this.permissionService.createPermission(values);
            },

        });
        this.CustomersData = new DataSource({
            store: this.CustomersStore,
        });
        this.itemStore = new CustomeStore({
            key: 'id',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    if (opts.filter[2] == '') {
                        this.productService.getCategories().subscribe(res => {
                            resolve({data: res});
                        });
                    } else {
                        this.productService.getItems(opts.filter[2], {
                            'category': 'ranking',
                            'ranking': 'material',
                            'material': 'combination'
                        }[this.currentTreeRow.type]).subscribe(res => {
                            resolve({data: res});
                        });
                    }
                });
            },
            update: (key, values) => {
                let item = this.itemSource.items().find(item => item.key == key).data;
                values.type = item.type;
                return this.productService.updateItem(key, values);
            },
            remove: (key) => {
                let item = this.itemSource.items().find(item => item.key == key).data;
                item.isActive = !item.isActive;
                return new Promise((resolve, reject) => {
                    return this.productService.setTreeAttr(item, {isActive: item.isActive});
                });
            },
            insert: (values) => {
                values.hasChildren = false;
                if (values.headId == '') {
                    values.type = 'category';
                    return this.productService.createCategory(values);
                } else {
                    let parent = this.itemSource.items().find(item => item.key == values.headId).data;
                    values.type = {'category': 'ranking', 'ranking': 'material', 'material': 'combination'}[parent.type];
                    values.parent_type = parent.type;
                    return this.productService.addChild(values);
                }
            },

        });
        this.itemSource = new DataSource({
            store: this.itemStore,
        });
    }

    cellPrepared(e) {
        if (e.data) {
            if (e.data.type == 'combination') {
                let addLink = e.cellElement.querySelector('.dx-link-add');
                if (addLink) {
                    addLink.remove();
                }
            }
        }
    }

    rowPrepared(e) {
        if (e.data) {
            if (e.data.type == 'category') {
                e.rowElement.style.backgroundColor = '#494ca2';
                e.rowElement.style.color = '#fff';
            } else if (e.data.type == 'ranking') {
                e.rowElement.style.backgroundColor = '#8186d5';
                e.rowElement.style.color = '#fff';
            } else if (e.data.type == 'material') {
                e.rowElement.style.backgroundColor = '#c6cbef';
            } else {
                e.rowElement.style.backgroundColor = '#e3e7f1';
            }
            if (e.data.customers && e.data.customers.find(x => x === this.currentRow.uid)) {
                console.log(e)
                if (this.initSelectedRows.indexOf(e.data.id) === -1)  {
                    this.initSelectedRows.push(e.data.id);
                    e.isExpanded = true;
                    e.isSelected = true;
                }
                console.log(this.initSelectedRows)
            }
        }
    }

    treeRowClicked($event: any) {
        this.currentTreeRow = $event.data;
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') == 'ar';
    }

    RowClicked($event: any) {
        this.currentRow = $event.data;
    }

    onSelectionChanged(e) { // Handler of the "selectionChanged" event
        this.currentDeselectedRowKeys = e.currentDeselectedRowKeys;
        this.selectedRowKeys = e.selectedRowKeys;
        this.selectedRowData = e.selectedRowsData;
    }

    SaveCustomerPermissions() {
        this.currentDeselectedRowKeys.forEach(DeselectedKey => {
            this.permissionService.removePermission(this.currentRow, this.itemSource.items().find(item => item.key == DeselectedKey).data);
        });
        this.selectedRowKeys.forEach(SelectedRow => {
            this.permissionService.addPermission(this.currentRow, this.selectedRowData.find(item => item.id === SelectedRow));
        });
    }

}
