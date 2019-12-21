var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWizardRoutingModule } from './ngx-wizard-routing.module';
import { BirthDateComponent } from './birth-date/birth-date.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { RouterModule } from '@angular/router';
import { NgxWizardComponent } from './ngx-wizard.component';
import { EmailComponent } from './email/email.component';
var routes = [];
var NgxWizardModule = /** @class */ (function () {
    function NgxWizardModule() {
    }
    NgxWizardModule = __decorate([
        NgModule({
            declarations: [
                BirthDateComponent,
                NavBarComponent,
                RegistrationComponent,
                NgxWizardComponent,
                EmailComponent
            ],
            imports: [
                CommonModule,
                NgxWizardRoutingModule,
                ReactiveFormsModule,
                ArchwizardModule
            ],
            exports: [RouterModule]
        })
    ], NgxWizardModule);
    return NgxWizardModule;
}());
export { NgxWizardModule };
//# sourceMappingURL=ngx-wizard.module.js.map