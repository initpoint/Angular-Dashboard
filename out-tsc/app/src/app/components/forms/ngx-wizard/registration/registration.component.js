var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(route, fb) {
        this.route = route;
        this.fb = fb;
        this.border_validation = false;
        this.title = "registration page";
        this.createForm();
    }
    //create form
    RegistrationComponent.prototype.createForm = function () {
        this.regForm = this.fb.group({
            firstName: [null, [Validators.required, Validators.pattern(/^[A-z]*$/),]],
            lastName: [null, [Validators.required, Validators.pattern(/^[A-z]*$/),]]
        });
    };
    RegistrationComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        return true;
    };
    RegistrationComponent.prototype.ngOnInit = function () { };
    RegistrationComponent = __decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Router, FormBuilder])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map