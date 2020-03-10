import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceListComponent } from './pricelist.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PriceListComponent,
        data: {
          title: "PriceList",
          breadcrumb: "PriceList"
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceListRoutingModule { }
