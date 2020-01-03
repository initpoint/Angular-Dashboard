import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {NewProductComponent} from './new-product/new-product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsService} from '../../shared/services/firebase/products.service';
import {ProductsComponent} from './products/products.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {EditProductResolver} from '../../shared/services/firebase/edit-product.resolver';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Ng5SliderModule} from 'ng5-slider';
import {ToastrModule} from 'ngx-toastr';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { DxTreeListModule, DxFileUploaderModule,DxPopupModule ,DxTemplateModule} from 'devextreme-angular';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    declarations: [NewProductComponent, ProductsComponent, EditProductComponent],

    imports: [
        DxPopupModule,
        DxTemplateModule,
        DxFileUploaderModule,
        CommonModule,
        DxTreeListModule,
        ProductsRoutingModule,
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

    providers: [ProductsService, EditProductResolver]
})
export class ProductsModule {
}
