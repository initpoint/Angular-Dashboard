import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductlistRoutingModule} from './productlist-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductlistService} from '../../shared/services/firebase/productlist.service';
import {ProductlistComponent} from './productlist.component';
import {EditProductResolver} from '../../shared/services/firebase/edit-product.resolver';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import { DxTreeListModule, DxFileUploaderModule,DxPopupModule ,DxTemplateModule, DxDataGridModule,DxTextBoxModule} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
    declarations: [ProductlistComponent],

    imports: [
        DxTextBoxModule,
        DxDataGridModule,
        DxPopupModule,
        DxTemplateModule,
        DxFileUploaderModule,
        CommonModule,
        DxTreeListModule,
        ProductlistRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        TranslateModule,
        ToastrModule.forRoot(),

    ],

    providers: [ProductlistService, EditProductResolver]
})
export class ProductlistModule {
}
