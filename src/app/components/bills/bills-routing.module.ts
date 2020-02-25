import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillsComponent } from './bills.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BillsComponent,
        data: {
          title: "Bills",
          breadcrumb: "Bills"
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule { }
