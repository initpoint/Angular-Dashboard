import {Component, OnInit} from '@angular/core';
import {PromotionsService} from 'src/app/shared/services/firebase/promotions.service';
import CustomStore from 'devextreme/data/custom_store';
import {ItemsService} from '../../shared/services/firebase/items.service';
import {ImportService} from '../../shared/services/firebase/import.service';
import {LogsService} from '../../shared/services/firebase/logs.service';
import * as XLSX from 'xlsx';
import {ToastrService} from 'ngx-toastr';
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-promotions',
    templateUrl: './promotions.component.html',
    styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {
    popupVisible = false;
    value: any[] = [];
    lang;
    currentRow;
    promotionsSource: CustomStore;
    columnObjects: any[] = [];
    columnToShow: any[] = [];
    rowCounter: number = 0;
    dataFromFile: any[] = [];
    promotionsTypes = ['خصم عام', 'خصم المواد'];
    discountTypes = ['%', 'مبلغ'];

    constructor(
        private promotionsService: PromotionsService,
        private toastrService: ToastrService,
        public itemsService: ItemsService,
        public logsService: LogsService,
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
                const logData = 'Updated promotion [' + key + '] data [' + Object.keys(values) + '] to [' + Object.values(values) + ']';
                this.logsService.createLog(logData);
                return this.promotionsService.updatePromotion(key, values);
            },
            remove: (key) => {
                const logData = 'Updated promotion [' + this.currentRow.code + '] [isActive] to [false]';
                this.logsService.createLog(logData);
                return this.promotionsService.deletePromotion(key);
                // return this.promotionsService.updatePromotion(key, {status: 'غير فعال'});
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
            if (item.validFrom != undefined && item.validTo != undefined) {
                item.validFrom = item.validFrom.toString().split(' ')[0].split('/');
                item.validFrom = item.validFrom[2] + '-' + item.validFrom[1] + '-' + item.validFrom[0];
                item.validFrom = formatDate(new Date(item.validFrom), 'yyyy-MM-dd HH:mm:ss.SSSSSS', 'en-US');
                item.validTo = item.validTo.toString().split(' ')[0].split('/');
                item.validTo = item.validTo[2] + '-' + item.validTo[1] + '-' + item.validTo[0];
                item.validTo = formatDate(new Date(item.validTo), 'yyyy-MM-dd HH:mm:ss.SSSSSS', 'en-US');
            }
            formatedData.push(item);
        });
        this.importService.importPromotions(formatedData).then(res => {
            this.toastrService.success(`${this.dataFromFile.length} Promotions imported successfully`);
            const logData = 'Imported promotions';
            this.logsService.createLog(logData);
            this.cancelData();
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
