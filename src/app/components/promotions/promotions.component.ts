import {Component, OnInit, ViewChild} from '@angular/core';
import {PromotionsService} from 'src/app/shared/services/firebase/promotions.service';
import CustomStore from 'devextreme/data/custom_store';
import {NgForm} from '@angular/forms';
import {ItemsService} from '../../shared/services/firebase/items.service';
import {ImportService} from '../../shared/services/firebase/import.service';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-promotions',
    templateUrl: './promotions.component.html',
    styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {
    @ViewChild('form', {static: false}) form: NgForm;
    popupVisible = false;
    value: any[] = [];
    lang;
    currentRow;
    promotionsSource: CustomStore;

    columnObjects: any[] = [];
    columnToShow: any[] = [];
    rowCounter: number = 0;
    dataFromFile: any[] = [];

    constructor(
        private promotionsService: PromotionsService,
        public itemsService: ItemsService,
        public importService: ImportService,
    ) {
        this.promotionsSource = new CustomStore({
            key: 'id',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    this.promotionsService.getPromotions().subscribe(res => {
                        resolve({data: res});
                    });
                });
            },
            update: (key, values) => {
                return this.promotionsService.updatePromotion(key, values);
            },
            remove: (key) => {
                return this.promotionsService.updatePromotion(key, {isActive: false});
            },
            insert: (values) => {
                return this.promotionsService.createPromotion(values);
            },

        });
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') == 'ar';
    }

    onFocusedRowChanged($event: any) {
        this.currentRow = $event.row.data;
    }

    importPromotion(evt: any) {
        this.popupVisible = true;
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        // this.show = true;
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
            this.dataFromFile = data.slice(2);
            this.columnToShow = [];
            this.columnObjects = [];

            let i = 0;
            Object.values(data[0]).forEach(column => {
                let key = Object.keys(data[0])[i];
                if (column != '') {
                    this.columnObjects.push({
                        columnName: column + ' (' + key + ')',
                        value: column,
                        valueField: key,
                    });
                }
                i++;
            });
            i = 0;
            Object.values(data[1]).forEach(column => {
                let key2 = Object.keys(data[1])[i];
                if (column != '') {
                    this.columnObjects.push({
                        columnName: column + ' (' + key2 + ')',
                        value: column,
                        valueField: key2,
                    });
                }
                i++;
            });
            this.importService.promotionStructure.forEach(column => {
                let field = this.columnObjects.find(row => row.value === column.text);

                if (field) {
                    this.columnToShow.push({
                        text: column.text,
                        columnName: column.text + ' (' + field.valueField + ')',
                        isFound: true,
                        value: field.value,
                        valueField: column.defaultValueField || field.valueField,
                        field: column.field
                    });
                } else {
                    this.columnToShow.push({
                        text: column.text,
                        isFound: false,
                        value: null,
                        valueField: null,
                        field: column.field
                    });
                }

            });
            this.rowCounter = data.length - 2;
        };
        reader.readAsBinaryString(target.files[0]);
    }

    saveData() {
        const formatedData = [];
        this.dataFromFile.forEach(item => {
            Object.keys(item).forEach(key => {
                const oldColumn = this.columnToShow.find(column => column.valueField == key);
                if (oldColumn) {
                    // replace old keys (A,B,C,....) with the fields names
                    item[oldColumn.field] = item[key];
                }
                // Delete old key
                delete item[key];
            });
            formatedData.push(item)
        });
        // console.log(formatedData)
        this.importService.importPromotions(formatedData);
        this.cancelData()

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
        XLSX.utils.book_append_sheet(wb, ws, 'promotion');
        XLSX.writeFile(wb, 'PromotionTemplate.xlsx');
    }

    cancelData() {
        this.columnToShow = [];
        this.columnObjects = [];
        this.rowCounter = 0;
        this.popupVisible = false;
    }


}
