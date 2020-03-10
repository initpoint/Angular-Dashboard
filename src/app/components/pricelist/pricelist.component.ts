import {Component, OnInit, ViewChild} from '@angular/core';
import {PriceListService} from 'src/app/shared/services/firebase/pricelist.service';
import {LogsService} from 'src/app/shared/services/firebase/logs.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import {NgForm} from '@angular/forms';
import {ItemsService} from '../../shared/services/firebase/items.service';
import {ImportService} from '../../shared/services/firebase/import.service';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-PriceList',
    templateUrl: './pricelist.component.html',
    styleUrls: ['./pricelist.component.scss'],
})
export class PriceListComponent implements OnInit {
    @ViewChild('form', {static: false}) form: NgForm;
    popupVisible = false;
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

    constructor(
        private priceListService: PriceListService,
        public itemsService: ItemsService,
        private logs: LogsService,
        public importService: ImportService,
    ) {
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
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        this.popupVisible = true;
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            let data = XLSX.utils.sheet_to_json(ws, {header: 'A'});
            this.dataFromFile = data.slice(1);
            this.columnToShow = [];
            this.columnObjects = [];
            let i = 0;
            Object.values(data[0]).forEach(column => {
                this.columnObjects.push({text: column, valueField: Object.keys(data[0])[i]});
                i++;
            });
            this.importService.priceListData.forEach(column => {
                let field = this.columnObjects.find(row => row.text === column.text);
                if (field) {
                    this.columnToShow.push({
                        text: column.text,
                        isFound: true,
                        value: field.text,
                        valueField: field.valueField,
                        field: column.field
                    });
                } else {
                    this.columnToShow.push({
                        text: column.text,
                        isFound: false,
                        value: field.text,
                        valueField: field.valueField,
                        field: column.field
                    });
                }
            });
            this.rowCounter = data.length - 1;
        };
        reader.readAsBinaryString(target.files[0]);
    }

    saveData() {
        let documents = {
            pricelistCode: '',
            pricelistName: '',
        };
        this.dataFromFile.forEach(item => {
            Object.keys(item).forEach(key => {
                if (this.columnToShow.find(column => column.valueField == key)) {
                    // replace old keys (A,B,C,....) with the fields names
                    item[this.columnToShow.find(column => column.valueField == key).field] = item[key];
                }
                // Delete old keys
                delete item[key];
            });
            item['prices'] = {};
            item.prices[item.pricelistCode] = item.price;
            documents.pricelistCode = item.pricelistCode;
            documents.pricelistName = item.pricelistName;
            if (item.code != '' && item.code != undefined) {
                this.itemsService.getItem(item.code).subscribe(doc => {
                    if (doc.exists) {
                        this.itemsService.updateItem(doc.data().code, {prices: item.prices}).then(res => {
                            const logData = 'Updated item [' + doc.data().code + '] data [prices] to [' + item.prices + ']';
                            this.logs.createLog(logData);
                        });
                    }
                });
            }
        });
        this.itemsService.db.collection('pricelist').doc(documents.pricelistCode).set({
            name: documents.pricelistName,
            code: documents.pricelistCode
        }, {merge: true}).then(res => {
            const logData = 'Created new pricelist [' + documents.pricelistName + ']';
            this.logs.createLog(logData);
        });

    }


    rowFound(row, value) {
        (<any>this).defaultSetCellValue(row, value);

    }

    btnClicked() {
        this.popupVisible = true;
    }

    downloadTemplate(data) {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet([data.map(item => item.text)], {skipHeader: true});
        XLSX.utils.book_append_sheet(wb, ws, 'priceList');
        XLSX.writeFile(wb, 'priceListTemplate.xlsx');
    }

    cancelData() {
        this.columnToShow = [];
        this.columnObjects = [];
        this.rowCounter = 0;
        this.popupVisible = false;
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
}
