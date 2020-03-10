import {Component, OnInit, ViewChild} from '@angular/core';
import {PriceListService} from 'src/app/shared/services/firebase/pricelist.service';
import {LogsService} from 'src/app/shared/services/firebase/logs.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import {NgForm} from '@angular/forms';
import {ItemsService} from '../../shared/services/firebase/items.service';
import {ImportService} from '../../shared/services/firebase/import.service';
import * as XLSX from 'xlsx';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-PriceList',
    templateUrl: './pricelist.component.html',
    styleUrls: ['./pricelist.component.scss'],
})
export class PriceListComponent implements OnInit {
    @ViewChild('form', {static: false}) form: NgForm;
    newPopupVisible = false;
    updatePopupVisible = false;
    value: any[] = [];
    lang;
    currentRow;
    priceListSource: CustomStore;
    priceListItemsSource: CustomStore;
    allItemsSource: CustomStore;

    columnObjects: any[] = [];
    columnToShow: any[] = [];
    rowCounter: number = 0;
    dataFromFile: any[] = [];
    showCurrentPrices = true;
    showLoader = false;

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

    importPriceList(evt: any) {
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            return;
        }
        this.showLoader = true;
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const data = XLSX.utils.sheet_to_json(ws, {header: 'A', defval: ''});
            this.rowCounter = data.length - 1;
            this.dataFromFile = data.slice(1);
            this.columnObjects = Object.entries(data[0]).map(([key, value]) => ({
                columnName: value + ' (' + key + ')',
                value: value,
                valueField: key,
            }));
            this.columnToShow = this.importService.priceListData.map(column => {
                const field = this.columnObjects.find(row => row.value === column.text);
                return {
                    text: column.text,
                    columnName: field ? field.columnName : null,
                    isFound: !!field,
                    value: field ? field.value : null,
                    valueField: field ? field.valueField : null,
                    field: column.field
                };
            });
            this.showLoader = false;
        };
        reader.readAsBinaryString(target.files[0]);
    }

    saveData() {
        this.itemsService.uploadProgress = 0;
        let itemsNotAvaialbeCount = 0;
        const pricelistDoc = {code: null, name: null, count: 0};
        this.itemsService.getMetaItems().subscribe(res => {
            const itemsMeta = res.data() || {};
            if (!itemsMeta.itemsCodes) {
                itemsMeta.itemsCodes = [];
            }

            Promise.all(this.dataFromFile.map(item => {
                Object.keys(item).forEach(oldKey => {
                    const newColumn = this.columnToShow.find(column => column.valueField === oldKey);
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
                        this.itemsService.uploadProgress += 1 / this.dataFromFile.length * 100;
                        this.logs.createLog(`Updated item [${item.code}] data [prices] to [${item.prices}]`);
                    });
                } else {
                    itemsNotAvaialbeCount += 1;
                }
            })).then(() => {
                this.itemsService.db.doc(`pricelist/${pricelistDoc.code}`).set(pricelistDoc, {merge: true})
                    .then(res => this.logs.createLog(`Created new pricelist [${pricelistDoc.name}]`));
                this.closePopupAndClearData();
                this.toasterService.success(`Pricelist Added. ${pricelistDoc.count} Items Updated`);
                if (itemsNotAvaialbeCount > 0) {
                    this.toasterService.warning(`${itemsNotAvaialbeCount} Items Not Available`);
                }
            });
        });

    }

// ToDo COMPLETE THIS
    setPrice(value: any, cellInfo: any) {
        console.log(value, cellInfo);
        // this.itemService.itemArray.find(x => x.code === cellInfo.data.code).prices[this.currentRow.id] = value;
        // this.itemService.getItem(cellInfo.data.code).subscribe(item => {
        //     item.data().prices[this.currentRow.id] = value;
        // });
        // const logData = 'Updated item price [value] to pricelist [' + this.currentRow.name + ']';
        // this.logs.createLog(logData);
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

    downloadTemplate(data) {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet([data.map(item => item.text)], {skipHeader: true});
        XLSX.utils.book_append_sheet(wb, ws, 'priceList');
        XLSX.writeFile(wb, 'PriceList Template.xlsx');
    }

    closePopupAndClearData() {
        this.columnToShow = [];
        this.columnObjects = [];
        this.rowCounter = 0;
        this.newPopupVisible = false;
        this.itemsService.uploadProgress = 0;
    }

    rowFound(row, value) {
        (<any>this).defaultSetCellValue(row, value);

    }
}
