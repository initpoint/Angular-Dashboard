import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'show',
        component: ProductlistComponent,
        data: {
          title: "Productlist",
          breadcrumb: "Productlist"
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductlistRoutingModule { }
