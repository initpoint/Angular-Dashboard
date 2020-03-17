import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionsComponent } from './promotions.component';
import { CreatePromotionsComponent } from './create/create-promotions.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PromotionsComponent,
        data: {
          title: "Promotions",
          breadcrumb: "Promotions"
        }
      },
      {
        path: 'create',
        component: CreatePromotionsComponent,
        data: {
          title: "Create Promotions",
          breadcrumb: "Create Promotions"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionsRoutingModule { }
