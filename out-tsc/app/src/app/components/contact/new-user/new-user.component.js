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
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ContactService } from '../../../shared/services/firebase/contact.service';
import { ToastrService } from 'ngx-toastr';
var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(fb, router, contactService, toastr) {
        this.fb = fb;
        this.router = router;
        this.contactService = contactService;
        this.toastr = toastr;
        this.formErrors = {
            'name': '',
            'surname': '',
            'mobile': '',
            'profileImg': '',
            'age': ''
        };
        this.contactForm = new FormGroup({
            name: new FormControl(),
            surname: new FormControl(),
            mobile: new FormControl(),
            age: new FormControl()
        });
    }
    NewUserComponent.prototype.resetFields = function () {
        this.contactForm = this.fb.group({
            name: new FormControl('', Validators.required),
            surname: new FormControl('', Validators.required),
            mobile: new FormControl('', Validators.required),
            age: new FormControl('', Validators.required),
        });
    };
    NewUserComponent.prototype.showSuccess = function () {
        this.toastr.success('User Created!');
    };
    NewUserComponent.prototype.submit = function (value) {
        var _this = this;
        this.contactService.createUser(value, this.url)
            .then(function (res) {
            _this.resetFields();
            _this.router.navigate(['/contact/contacts']);
            _this.showSuccess();
        });
    };
    //FileUpload
    NewUserComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files.length === 0)
            return;
        //Image upload validation
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        // Image upload
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (_event) {
            _this.url = reader.result;
        };
    };
    NewUserComponent.prototype.cancel = function () {
        this.router.navigate(['/contact/contacts']);
    };
    NewUserComponent.prototype.ngOnInit = function () { };
    NewUserComponent = __decorate([
        Component({
            selector: 'app-new-user',
            templateUrl: './new-user.component.html',
            styleUrls: ['./new-user.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [FormBuilder, Router, ContactService, ToastrService])
    ], NewUserComponent);
    return NewUserComponent;
}());
export { NewUserComponent };
//# sourceMappingURL=new-user.component.js.map