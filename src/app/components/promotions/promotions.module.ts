import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromotionsService} from 'src/app/shared/services/firebase/promotions.service';
import {PromotionsRoutingModule} from './promotions-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PromotionsComponent} from './promotions.component';
import {CreatePromotionsComponent} from './create/create-promotions.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {DxButtonModule,DxTagBoxModule,DxLookupModule,DxFileUploaderModule,DxPopupModule ,DxTemplateModule, DxDataGridModule,DxSelectBoxModule} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [PromotionsComponent,CreatePromotionsComponent],

    imports: [
        DxTagBoxModule,
        DxLookupModule,
        DxPopupModule,
        DxFileUploaderModule,
        DxDataGridModule,
        DxButtonModule,
        DxTemplateModule,
        DxSelectBoxModule,
        CommonModule,
        PromotionsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        TranslateModule,
        ToastrModule.forRoot(),

    ],

    providers: [PromotionsService]
})
export class PromotionsModule {
}
