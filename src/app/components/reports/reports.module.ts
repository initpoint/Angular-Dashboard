import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportsRoutingModule} from './reports-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ReportsService} from '../../shared/services/firebase/reports.service';
import {ReportsComponent} from './reports.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {DxDataGridModule} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
    declarations: [ReportsComponent],

    imports: [
        DxDataGridModule,
        CommonModule,
        ReportsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        ToastrModule.forRoot(),
        TranslateModule,
    ],
    providers: [ReportsService]
})
export class ReportsModule {
}
