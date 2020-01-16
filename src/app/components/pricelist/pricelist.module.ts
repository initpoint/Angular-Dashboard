import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PriceListService} from 'src/app/shared/services/firebase/pricelist.service';
import {PriceListRoutingModule} from './pricelist-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PriceListComponent} from './pricelist.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {DxButtonModule ,DxTemplateModule, DxDataGridModule,DxNumberBoxModule} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
    declarations: [PriceListComponent],

    imports: [
        DxDataGridModule,
        DxButtonModule,
        DxTemplateModule,
        DxNumberBoxModule,
        CommonModule,
        PriceListRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        TranslateModule,
        ToastrModule.forRoot(),

    ],

    providers: [PriceListService]
})
export class PriceListModule {
}
