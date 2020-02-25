import {Component, OnInit, ViewChild} from '@angular/core';
import {PriceListService} from 'src/app/shared/services/firebase/pricelist.service';
import DataSource from 'devextreme/data/data_source';
import CustomeStore from 'devextreme/data/custom_store';
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
    pricelistStore: CustomeStore;
    showSaveButton: boolean = false;
    lang;
    currentRow;
    itemStore: CustomeStore;
    itemSource: DataSource;
    pricelistSource: DataSource;
    itemsToShow: any[] = [];
    columnObjects: any[] = [];
    columnToShow: any[] = [];
    rowCounter: number = 0;
    dataFromFile: any[] = [];
    showCurrentPrices = true;
    filterValue = [];

    constructor(
        private PriceListservice: PriceListService,
        private itemService: ItemsService,
        public importService: ImportService,
    ) {
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
            remove: (itemKey) => {
                let priceListKey = this.currentRow.id;
                return this.PriceListservice.removeItem(itemKey, priceListKey);
            }

        });
        this.itemSource = new DataSource({
            store: this.itemStore,
        });
    }


    ngOnInit() {
        this.lang = localStorage.getItem('lang') == 'ar';
    }

    filterItems(e: any) {
        if (e.value == false) {
            this.itemService.getItems().subscribe(items => {
                this.itemsToShow = items;
            });
        } else {
            this.itemService.getItemsWithPrices(this.currentRow.id).subscribe(items => {
                this.itemsToShow = items.docs.map(item => item.data());
            });
        }
    }

    onFocusedRowChanged($event: any) {
        this.itemsToShow = [];
        this.currentRow = $event.row.data;
        this.itemService.getItemsWithPrices(this.currentRow.id).subscribe(items => {
            this.itemsToShow = items.docs.map(item => item.data());

        });
    }

    savePrices() {
        //this.itemService.updateItems();
        this.showSaveButton = false;
    }

    setPrice(value: any, cellInfo: any) {
        this.showSaveButton = true;
        // this.itemService.itemArray.find(x => x.code === cellInfo.data.code).prices[this.currentRow.id] = value;
        this.itemService.getItem(cellInfo.data.code).subscribe(item => {
            item.data().prices[this.currentRow.id] = value;
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
                this.itemService.getItem(item.code).subscribe(doc => {
                    if (doc.exists) {
                        this.itemService.updateItem(doc.data().code, {prices: item.prices}).then();
                    }
                });
            }
        });
        this.itemService.db.collection('pricelist').doc(documents.pricelistCode).set({
            name: documents.pricelistName,
            code: documents.pricelistCode
        }, {merge: true});

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
}
