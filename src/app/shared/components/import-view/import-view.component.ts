import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as XLSX from 'xlsx';
import {ImportService} from '../../services/firebase/import.service';
import {ItemsService} from '../../services/firebase/items.service';
import {LogsService} from '../../services/firebase/logs.service';

@Component({
    selector: 'app-import-view',
    templateUrl: './import-view.component.html',
    styleUrls: ['./import-view.component.scss']
})
export class ImportViewComponent implements OnInit {
    @Input() btnText;
    @Input() structure;
    @Input() templateFileName;
    @Input() templateSheetName;

    @Input()
    set doneSaving(state: boolean) {
        if (state) {
            this.closePopupAndClearData();
        }
    }

    @Output() onSaving = new EventEmitter();

    lang;
    popupVisible: boolean;
    fileColumns: any[] = [];
    columnToShow: any[] = [];
    dataFromFile: any[] = [];
    rowCounter = 0;
    showLoader = false;

    constructor(public importService: ImportService, public itemsService: ItemsService) {
    }

    import(evt: any) {
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
            this.fileColumns = Object.entries(data[0]).map(([key, value]) => ({
                columnName: value + ' (' + key + ')',
                value: value,
                valueField: key,
            }));
            this.columnToShow = this.structure.map(column => {
                const field = this.fileColumns.find(row => row.value === column.text);
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

    ngOnInit() {
    }

    downloadTemplate(data) {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet([data.map(item => item.text)], {skipHeader: true});
        XLSX.utils.book_append_sheet(wb, ws, this.templateSheetName);
        XLSX.writeFile(wb, this.templateFileName);
    }

    closePopupAndClearData() {
        this.columnToShow = [];
        this.fileColumns = [];
        this.dataFromFile = [];
        this.rowCounter = 0;
        this.popupVisible = false;
        this.itemsService.uploadProgress = 0;
        this.showLoader = false;

    }

    rowFound(row, value) {
        (<any>this).defaultSetCellValue(row, value);
    }
}
