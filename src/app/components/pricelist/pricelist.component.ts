import {Component, OnInit, ViewChild} from '@angular/core';
import {PriceListService} from 'src/app/shared/services/firebase/pricelist.service';
import {LogsService} from 'src/app/shared/services/firebase/logs.service';
import CustomStore from 'devextreme/data/custom_store';
import {NgForm} from '@angular/forms';
import {ItemsService} from '../../shared/services/firebase/items.service';
import {ImportService} from '../../shared/services/firebase/import.service';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-PriceList',
    templateUrl: './pricelist.component.html',
    styleUrls: ['./pricelist.component.scss'],
})
export class PriceListComponent implements OnInit {
    @ViewChild('form', {static: false}) form: NgForm;
    updatePopupVisible = false;
    lang;
    currentRow;
    priceListSource: CustomStore;
    priceListItemsSource: CustomStore;
    allItemsSource: CustomStore;
    showCurrentPrices = true;
    doneSaving = false;

    constructor(private priceListService: PriceListService, public itemsService: ItemsService,
                private logs: LogsService, public importService: ImportService, public toasterService: ToastrService,
                public translateService: TranslateService) {
        this.priceListSource = new CustomStore({
            key: 'id',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    this.priceListService.getPriceLists().subscribe(res => {
                        resolve({data: res});
                    });
                });
            },
            update: (key, values) => {
                const logData = 'Updated pricelist [' + key + '] data [' + Object.keys(values) + '] to [' + Object.values(values) + ']';
                this.logs.createLog(logData);
                return this.priceListService.updatePriceList(key, values);
            },
            remove: (key) => {
                const logData = 'Updated pricelist [' + this.currentRow.name + '] [isActive] to [false]';
                this.logs.createLog(logData);
                return this.priceListService.updatePriceList(key, {isActive: false});
            },
            insert: (values) => {
                const logData = 'Created new pricelist [' + values.name + ']';
                this.logs.createLog(logData);
                return this.priceListService.createPriceList(values);
            },

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
        this.lang = localStorage.getItem('lang') == 'ar';
    }

    onFocusedRowChanged($event: any) {
        this.currentRow = $event.row.data;
        this.itemsService.lastItemInPriceList = null;
        this.priceListItemsSource = new CustomStore({
            key: 'code',
            totalCount: () => new Promise(resolve => {
                resolve(this.currentRow.count);
            }),
            load: (opts) => {
                return new Promise((resolve) => {
                    this.itemsService.getItemsWithPriceForPagination(this.currentRow.id).subscribe(items => {
                        resolve(items);
                    });
                });
            },
            remove: (itemKey) => {
                const newItem = {prices: {}};
                newItem.prices[this.currentRow.id] = null;
                return this.itemsService.updateItem(itemKey, newItem).then(() => {
                    this.currentRow.count -= 1;
                    this.priceListService.updatePriceList(this.currentRow.id, this.currentRow);

                });
            }
        });
    }

    saveImportedData(dataFromFile, columnToShow) {
        this.doneSaving = false;
        let itemsNotAvaialbeCount = 0;
        const pricelistDoc = {code: null, name: null, count: 0};
        this.itemsService.getMetaItems().subscribe(res => {
            const itemsMeta = res.data() || {};
            if (!itemsMeta.itemsCodes) {
                itemsMeta.itemsCodes = [];
            }

            Promise.all(dataFromFile.map(item => {
                Object.keys(item).forEach(oldKey => {
                    const newColumn = columnToShow.find(column => column.valueField === oldKey);
                    if (newColumn) {
                        item[newColumn.field] = item[oldKey];// replace old keys (A,B,C,....) with the fields names
                    }
                    delete item[oldKey];
                });
                pricelistDoc.code = item.pricelistCode || pricelistDoc.code;
                pricelistDoc.name = item.pricelistName || pricelistDoc.name;
                if (item.code != '' && item.code != undefined && itemsMeta.itemsCodes.includes(item.code)) {
                    item['prices'] = {};
                    item.prices[item.pricelistCode] = item.price;
                    pricelistDoc.count += 1;
                    return this.itemsService.updateItem(item.code, {prices: item.prices}).then(res => {
                        this.itemsService.uploadProgress += 1 / dataFromFile.length * 100;
                        this.logs.createLog(`Updated item [${item.code}] data [prices] to [${item.prices}]`);
                    });
                } else {
                    itemsNotAvaialbeCount += 1;
                }
            })).then(() => {
                this.itemsService.db.doc(`pricelist/${pricelistDoc.code}`).set(pricelistDoc, {merge: true})
                    .then(res => this.logs.createLog(`Created new pricelist [${pricelistDoc.name}]`));
                this.toasterService.success(`Pricelist Added. ${pricelistDoc.count} Items Updated`);
                if (itemsNotAvaialbeCount > 0) {
                    this.toasterService.warning(`${itemsNotAvaialbeCount} Items Not Available`);
                }
                this.doneSaving = true;
            });
        });
    }

    setPrice(newPrice, item) {
        item['prices'][this.currentRow.id] = newPrice;
        this.itemsService.updateItem(item.code, item);
        this.logs.createLog(`Updated pricelist:${this.currentRow.name} item:${item.code} to price:${newPrice}`);
    }

    addItemToList(data: any) {
        data['prices'] = {};
        data['prices'][this.currentRow.id] = 0;
        this.currentRow.count += 1;
        this.itemsService.updateItem(data.code, data);
        this.priceListService.updatePriceList(this.currentRow.id, this.currentRow);
        const logData = 'Added item [' + data.code + '] to pricelist [' + this.currentRow.name + ']';
        this.logs.createLog(logData);
    }
}
