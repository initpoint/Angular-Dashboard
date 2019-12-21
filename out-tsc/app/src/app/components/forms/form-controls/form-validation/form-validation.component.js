var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var FormValidationComponent = /** @class */ (function () {
    function FormValidationComponent(fb) {
        this.fb = fb;
    }
    FormValidationComponent.prototype.ngOnInit = function () {
        this.validationForm = this.fb.group({
            firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            username: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required]
        });
    };
    FormValidationComponent = __decorate([
        Component({
            selector: 'app-form-validation',
            templateUrl: './form-validation.component.html',
            styleUrls: ['./form-validation.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], FormValidationComponent);
    return FormValidationComponent;
}());
export { FormValidationComponent };
//# sourceMappingURL=form-validation.component.js.map