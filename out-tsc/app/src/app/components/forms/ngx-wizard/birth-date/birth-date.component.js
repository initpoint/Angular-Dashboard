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
var Swal = require('sweetalert2');
var BirthDateComponent = /** @class */ (function () {
    function BirthDateComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this.submitted = false;
        this.allData = FormData;
        this.createForm();
    }
    BirthDateComponent.prototype.createForm = function () {
        this.birthdateForm = this.fb.group({
            dd: [null, Validators.required],
            mm: [null, Validators.required],
            yyyy: [null, Validators.required],
        });
    };
    BirthDateComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.birthdateForm.valid) {
            return false;
        }
        return true;
    };
    BirthDateComponent.prototype.success = function () {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Your all steps done!',
            showConfirmButton: false,
            timer: 1500
        });
    };
    BirthDateComponent.prototype.ngOnInit = function () { };
    BirthDateComponent = __decorate([
        Component({
            selector: 'app-birth-date',
            templateUrl: './birth-date.component.html',
            styleUrls: ['./birth-date.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Router, FormBuilder])
    ], BirthDateComponent);
    return BirthDateComponent;
}());
export { BirthDateComponent };
//# sourceMappingURL=birth-date.component.js.map