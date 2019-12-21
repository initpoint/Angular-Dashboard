import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { NewCustomerComponent } from './new-customers/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {CustomerService} from '../../shared/services/firebase/customer.service';
import { CustomersComponent } from './customers/customers.component';
import { EditCustomerComponent } from './edit-customers/edit-customer.component';
import {EditCustomerResolver} from '../../shared/services/firebase/edit-customer.resolver';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Ng5SliderModule } from 'ng5-slider';
import { ToastrModule } from 'ngx-toastr';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [NewCustomerComponent, CustomersComponent, EditCustomerComponent],

  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    Ng5SliderModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot()
  ],

  providers: [CustomerService, EditCustomerResolver]
})
export class CustomersModule { }
