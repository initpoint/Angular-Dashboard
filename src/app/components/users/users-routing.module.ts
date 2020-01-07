import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'show',
        component: UsersComponent,
        data: {
          title: "Users",
          breadcrumb: "Users"
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
