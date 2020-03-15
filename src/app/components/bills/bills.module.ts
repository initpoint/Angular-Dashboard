import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BillsRoutingModule} from './bills-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BillsService} from '../../shared/services/firebase/bills.service';
import {BillsComponent} from './bills.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {DxDataGridModule, DxFileUploaderModule, DxPopupModule} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [BillsComponent],

    imports: [
        DxPopupModule,
        DxDataGridModule,
        DxFileUploaderModule,
        CommonModule,
        BillsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        ToastrModule.forRoot(),
        TranslateModule,
        SharedModule,
    ],
    providers: [BillsService]
})
export class BillsModule {
}
