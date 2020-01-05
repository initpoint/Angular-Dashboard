import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionComponent } from './permissions.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'show',
        component: PermissionComponent,
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
export class PermissionsRoutingModule { }
