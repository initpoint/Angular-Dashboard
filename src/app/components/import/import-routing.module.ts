import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportComponent } from './import.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ImportComponent,
        data: {
          title: "Import",
          breadcrumb: "Import"
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
