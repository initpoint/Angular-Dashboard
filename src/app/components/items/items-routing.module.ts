import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ItemsComponent,
        data: {
          title: "Items",
          breadcrumb: "Items"
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
