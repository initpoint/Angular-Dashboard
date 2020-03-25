import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {LogsService} from '../../shared/services/firebase/logs.service';
import CustomeStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import {DxDataGridComponent} from 'devextreme-angular';

@Component({
    selector: 'app-logs',
    templateUrl: './logs.component.html',
    styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
    @ViewChild('logsGrid', {static: false}) grid: DxDataGridComponent;
    logSource: DataSource;
    logData: CustomeStore;
    lang = localStorage.getItem('lang') == 'ar';
    fieldView: boolean = true;
    selectedRows: number[];

    constructor(private logsService: LogsService) {
        this.logData = new CustomeStore({
            key: 'id',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    this.logsService.getLogs().subscribe(res => {
                        resolve({data: res});
                    });
                });
            },
            remove: (key) => {
                return this.logsService.deleteLog(key);
            },
        });
        this.logSource = new DataSource({
            store: this.logData,
        });
    }

    removeAllSelection() {
        if (confirm('Are you sure about this?\n This will delete all the data you have\n This cannot be undone ' +
            '\nهل تريد مسح كل البيانات؟ \n لا يمكن التراجع عن ذلك')) {
            this.selectedRows.forEach(key => {
                this.logsService.deleteLog(key).then(res=> {
                    this.logData.remove(key);
                });
            });
            this.grid.instance.refresh();
        }
    }

    ngOnInit() {
    }
}
