import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomersRoutingModule} from './customers-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CustomerService} from '../../shared/services/firebase/customer.service';
import {CustomersComponent} from './customers/customers.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Ng5SliderModule} from 'ng5-slider';
import {ToastrModule} from 'ngx-toastr';
import {DxDataGridModule} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
    declarations: [CustomersComponent],

    imports: [
        DxDataGridModule,
        CommonModule,
        CustomersRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        Ng5SliderModule,
        ToastrModule.forRoot(),
        TranslateModule,
    ],
    providers: [CustomerService]
})
export class CustomersModule {
}
