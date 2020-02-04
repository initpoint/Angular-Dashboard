import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartsComponent } from './carts.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CartsComponent,
        data: {
          title: "Carts",
          breadcrumb: "Carts"
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartsRoutingModule { }
