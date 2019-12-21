import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCustomerComponent } from './new-customers/new-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { EditCustomerComponent } from './edit-customers/edit-customer.component';
import { EditCustomerResolver } from '../../shared/services/firebase/edit-customer.resolver';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'new-customer',
        component: NewCustomerComponent,
        data: {
          title: "New Customer",
          breadcrumb: "New Customer"
        }
      },
      {
        path: 'show',
        component: CustomersComponent,
        data: {
          title: "Customers",
          breadcrumb: "Customers"
        }
      },
      {
        path: 'edit-customer/:id',
        component: EditCustomerComponent,
        resolve: {
          data: EditCustomerResolver
        },
        data: {
          title: "Edit Customer",
          breadcrumb: "Edit Customer"
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
