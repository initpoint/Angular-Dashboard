import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemsService} from 'src/app/shared/services/firebase/items.service';
import CustomeStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import {DxDataGridComponent} from 'devextreme-angular';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
    source: any;
    lang;
    selectedRows: any[] = [];
    @ViewChild(DxDataGridComponent, {static: false}) dataGrid: DxDataGridComponent;

    constructor(private itemsService: ItemsService) {
        this.source = new DataSource(new CustomeStore({
            key: 'code',
            load: (opts) => this.itemsService.getItems(opts),
            update: (key, newValues) => this.itemsService.updateItem(key, newValues),
            remove: (key) => this.itemsService.updateItem(key, {isActive: false})
        }));
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') === 'ar';
    }

    rowExpanding(e) {
        e.component.collapseAll(e.key.length - 1);
    }

    selectRow(event) {
        if (event.currentSelectedRowKeys && this.selectedRows.includes(event.currentSelectedRowKeys) === false) {
            this.selectedRows.push(event.currentSelectedRowKeys);
        }
    }

    rowClick(event) {
        if (event.event && event.event.target.className == 'dx-checkbox-icon') {
            console.log(event.data);
            if (event.data.key) {
                if (this.selectedRows.includes(event.data.key) === false) {
                    this.selectedRows.push(event.data.key);
                    if (event.data.items) {
                        event.data.items.forEach(item => {
                            if (this.selectedRows.includes(item.key) === false) {
                                this.selectedRows.push(item.key);
                                console.log('Material : ' + item.key + ' is selected');
                                if (item.collapsedItems) {
                                    item.collapsedItems.forEach(Child => {
                                        if (this.selectedRows.includes(Child.code) === false) {
                                            this.selectedRows.push(Child.code);
                                            console.log('Combination : ' + Child.code + ' is selected');
                                        }
                                    });
                                }
                            }
                        });
                    }
                    console.log('Row : ' + event.data.key + ' is selected');
                } else {
                    if (event.data.items) {
                        event.data.items.forEach(item => {
                                if (this.selectedRows.includes(item.key) === true) {
                                    if (item.collapsedItems) {
                                        item.collapsedItems.forEach(Child => {
                                            if (this.selectedRows.includes(Child.code) === true) {
                                                this.selectedRows.splice(this.selectedRows.indexOf(Child.code), 1);
                                                event.component.deselectRows(Child.code).then(() => {
                                                    console.log('Combination : ' + Child.code + ' is deselected');
                                                    this.selectedRows.splice(this.selectedRows.indexOf(item.key), 1);
                                                    console.log('Material : ' + item.key + ' is deselected');
                                                });
                                            }
                                        });
                                    }
                                }
                            }
                        );
                    }
                    this.selectedRows.splice(this.selectedRows.indexOf(event.data.key), 1);
                    console.log('Row : ' + event.data.key + ' is deselected');
                }

            }
            console.log(this.selectedRows);

        }
    }

    getSelectValue(value) {
        return this.selectedRows.find(x => x == value);
    }
}
