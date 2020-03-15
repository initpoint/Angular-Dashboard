import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PriceListService} from 'src/app/shared/services/firebase/pricelist.service';
import {PriceListRoutingModule} from './pricelist-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PriceListComponent} from './pricelist.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {
    DxButtonModule,
    DxSwitchModule,
    DxFileUploaderModule,
    DxPopupModule,
    DxTemplateModule,
    DxDataGridModule,
    DxNumberBoxModule
} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [PriceListComponent],

    imports: [
        DxSwitchModule,
        DxPopupModule,
        DxFileUploaderModule,
        DxDataGridModule,
        DxButtonModule,
        DxTemplateModule,
        DxNumberBoxModule,
        CommonModule,
        PriceListRoutingModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        TranslateModule,
        ToastrModule.forRoot(),
        SharedModule,

    ],

    providers: [PriceListService]
})
export class PriceListModule {
}
