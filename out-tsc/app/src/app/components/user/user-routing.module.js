var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from '../../shared/services/firebase/edit-user.resolver';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'new-user',
                component: NewUserComponent,
                data: {
                    title: "New User",
                    breadcrumb: "New User"
                }
            },
            {
                path: 'user/users',
                component: UsersComponent,
                data: {
                    title: "Users",
                    breadcrumb: "Users"
                }
            },
            {
                path: 'edit-user/:id',
                component: EditUserComponent,
                resolve: {
                    data: EditUserResolver
                },
                data: {
                    title: "Edit User",
                    breadcrumb: "Edit User"
                }
            },
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());
export { UserRoutingModule };
//# sourceMappingURL=user-routing.module.js.map