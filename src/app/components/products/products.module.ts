import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {NewProductComponent} from './new-product/new-product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsService} from '../../shared/services/firebase/products.service';
import {ProductsComponent} from './products/products.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {EditProductResolver} from '../../shared/services/firebase/edit-product.resolver';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Ng5SliderModule} from 'ng5-slider';
import {ToastrModule} from 'ngx-toastr';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { DxTreeListModule, DxDataGridModule } from 'devextreme-angular';
@NgModule({
    declarations: [NewProductComponent, ProductsComponent, EditProductComponent],

    imports: [
        DxDataGridModule,
        CommonModule,
        DxTreeListModule,
        ProductsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        Ng5SliderModule,
        Ng2SearchPipeModule,
        NgxDatatableModule,
        ToastrModule.forRoot(),

    ],

    providers: [ProductsService, EditProductResolver]
})
export class ProductsModule {
}
