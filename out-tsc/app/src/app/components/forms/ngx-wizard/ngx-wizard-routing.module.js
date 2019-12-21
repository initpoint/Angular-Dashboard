var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EmailComponent } from './email/email.component';
import { BirthDateComponent } from './birth-date/birth-date.component';
import { NgxWizardComponent } from './ngx-wizard.component';
var routes = [
    { path: 'registration', component: RegistrationComponent },
    { path: 'email', component: EmailComponent },
    { path: 'birth-date', component: BirthDateComponent },
    { path: 'form-wizard', redirectTo: '/form-wizard', component: NgxWizardComponent },
    { path: '**', component: NgxWizardComponent }
];
var NgxWizardRoutingModule = /** @class */ (function () {
    function NgxWizardRoutingModule() {
    }
    NgxWizardRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], NgxWizardRoutingModule);
    return NgxWizardRoutingModule;
}());
export { NgxWizardRoutingModule };
//# sourceMappingURL=ngx-wizard-routing.module.js.map