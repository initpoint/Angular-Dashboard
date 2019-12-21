var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { Error400Component } from './error400/error400.component';
import { Error401Component } from './error401/error401.component';
import { Error403Component } from './error403/error403.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { Error503Component } from './error503/error503.component';
var ErrorPagesModule = /** @class */ (function () {
    function ErrorPagesModule() {
    }
    ErrorPagesModule = __decorate([
        NgModule({
            declarations: [Error400Component, Error401Component, Error403Component, Error404Component, Error500Component, Error503Component],
            imports: [
                CommonModule,
                ErrorPagesRoutingModule
            ]
        })
    ], ErrorPagesModule);
    return ErrorPagesModule;
}());
export { ErrorPagesModule };
//# sourceMappingURL=error-pages.module.js.map