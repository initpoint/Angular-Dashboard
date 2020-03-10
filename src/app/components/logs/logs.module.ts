import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LogsRoutingModule} from './logs-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LogsService} from '../../shared/services/firebase/logs.service';
import {LogsComponent} from './logs.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {DxDataGridModule} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
    declarations: [LogsComponent],

    imports: [
        DxDataGridModule,
        CommonModule,
        LogsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        ToastrModule.forRoot(),
        TranslateModule,
    ],
    providers: [LogsService]
})
export class LogsModule {
}
