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
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './mustMatch';
var EmailComponent = /** @class */ (function () {
    function EmailComponent(route, fb) {
        this.route = route;
        this.fb = fb;
        this.createEmailForm();
    }
    EmailComponent.prototype.createEmailForm = function () {
        this.emailForm = this.fb.group({
            emailAdd: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    };
    EmailComponent.prototype.ngOnInit = function () { };
    EmailComponent = __decorate([
        Component({
            selector: 'app-email',
            templateUrl: './email.component.html',
            styleUrls: ['./email.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Router, FormBuilder])
    ], EmailComponent);
    return EmailComponent;
}());
export { EmailComponent };
//# sourceMappingURL=email.component.js.map