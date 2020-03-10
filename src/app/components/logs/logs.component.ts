import {Component, OnInit, Output} from '@angular/core';
import {LogsService} from '../../shared/services/firebase/logs.service';
import CustomeStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-logs',
    templateUrl: './logs.component.html',
    styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
    logSource: DataSource;
    logData: CustomeStore;
    lang = localStorage.getItem('lang') == 'ar';
    fieldView: boolean = true;

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


    ngOnInit() {
    }
}
