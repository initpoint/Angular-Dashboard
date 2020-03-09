import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersPermissionsComponent } from './users-permissions.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UsersPermissionsComponent,
        data: {
          title: "Permissions",
          breadcrumb: "Permissions"
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersPermissionsRoutingModule { }
