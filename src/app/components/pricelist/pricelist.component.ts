import {Component, OnInit, ViewChild} from '@angular/core';
import {PriceListService} from 'src/app/shared/services/firebase/pricelist.service';
import {Category} from 'src/app/shared/model/category.model';
import DataSource from 'devextreme/data/data_source';
import CustomeStore from 'devextreme/data/custom_store';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-PriceList',
    templateUrl: './pricelist.component.html',
    styleUrls: ['./pricelist.component.scss'],
})
export class PriceListComponent implements OnInit {
    @ViewChild('form', {static: false}) form: NgForm;
    popupVisible = false;
    value: any[] = [];
    categories: Category[];
    pricelistStore: CustomeStore;
    ExpandedRow;
    lang;
    currentRow;
    itemStore: CustomeStore;
    itemSource: DataSource;
    pricelistSource: DataSource;

    constructor(
        private PriceListservice: PriceListService) {
        this.pricelistStore = new CustomeStore({
            key: 'id',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    this.PriceListservice.getPriceLists().subscribe(res => {
                        resolve({data: res});
                    });
                });
            },
            update: (key, values) => {
                return this.PriceListservice.updatePriceList(key, values);
            },
            remove: (key) => {
                let item = this.pricelistSource.items().find(item => item.id == key);
                item.isActive = !item.isActive;
                return this.PriceListservice.updatePriceList(key, item);
            },
            insert: (values) => {
                return this.PriceListservice.createPriceList(values);
            },

        });
        this.pricelistSource = new DataSource({
            store: this.pricelistStore,
        });
        this.itemStore = new CustomeStore({
            key: 'id',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    this.PriceListservice.getCombinations().subscribe(res => {
                        resolve({data: res});
                    });
                });
            },
            update: (key, values) => {
                let newItem = {
                    prices: {}
                };
                newItem.prices[this.currentRow.id] = values.prices
                console.log(newItem)
                return this.PriceListservice.updateItem(key, newItem).then(ass => {
                    console.log(ass);
                });
            },
            remove: (itemKey) => {
                let priceListKey = this.currentRow.id;
                return this.PriceListservice.removeItem(itemKey,priceListKey);
            }

        });
        this.itemSource = new DataSource({
            store: this.itemStore,
        });
    }


    ngOnInit() {
        this.lang = localStorage.getItem('lang') == 'ar';
    }

    RowClicked($event: any) {
        this.currentRow = $event.data;
    }


}
