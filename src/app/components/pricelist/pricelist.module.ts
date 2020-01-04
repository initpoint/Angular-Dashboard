import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PriceListService} from 'src/app/shared/services/firebase/pricelist.service';
import {PriceListRoutingModule} from './pricelist-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PriceListComponent} from './pricelist.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Ng5SliderModule} from 'ng5-slider';
import {ToastrModule} from 'ngx-toastr';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {DxPopupModule ,DxTemplateModule, DxDataGridModule,DxNumberBoxModule} from 'devextreme-angular';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    declarations: [PriceListComponent],

    imports: [
        DxDataGridModule,
        DxPopupModule,
        DxTemplateModule,
        DxNumberBoxModule,
        CommonModule,
        PriceListRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        Ng5SliderModule,
        Ng2SearchPipeModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
        }),
        ToastrModule.forRoot(),

    ],

    providers: [PriceListService]
})
export class PriceListModule {
}
