var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error400Component } from './error400/error400.component';
import { Error401Component } from './error401/error401.component';
import { Error403Component } from './error403/error403.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { Error503Component } from './error503/error503.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '400',
                component: Error400Component,
            },
            {
                path: '401',
                component: Error401Component
            },
            {
                path: '403',
                component: Error403Component
            },
            {
                path: '404',
                component: Error404Component
            },
            {
                path: '500',
                component: Error500Component
            },
            {
                path: '503',
                component: Error503Component
            }
        ]
    }
];
var ErrorPagesRoutingModule = /** @class */ (function () {
    function ErrorPagesRoutingModule() {
    }
    ErrorPagesRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ErrorPagesRoutingModule);
    return ErrorPagesRoutingModule;
}());
export { ErrorPagesRoutingModule };
//# sourceMappingURL=error-pages-routing.module.js.map