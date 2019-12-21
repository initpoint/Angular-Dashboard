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
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/firebase/user.service';
import { ToastrService } from 'ngx-toastr';
var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(fb, route, router, userService, toastr) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
    }
    EditUserComponent.prototype.createForm = function () {
        this.editUserForm = this.fb.group({
            name: [this.item.name, Validators.required],
            email: [this.item.email, [Validators.required, Validators.email]],
            mobile: [this.item.mobile, Validators.required],
            password: [this.item.password, Validators.required]
        });
    };
    EditUserComponent.prototype.save = function (value) {
        var _this = this;
        value.avatar = this.avatar;
        this.userService.updateUser(this.item.id, value)
            .then(function (res) {
            _this.router.navigate(['/contact/contacts']);
            _this.showEdit();
        });
    };
    EditUserComponent.prototype.showEdit = function () {
        this.toastr.success('User Updated!');
    };
    //FileUpload
    EditUserComponent.prototype.readUrl = function (event) {
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
            _this.avatar = reader.result;
        };
    };
    EditUserComponent.prototype.cancel = function () {
        this.router.navigate(['/contact/contacts']);
    };
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.avatar = data.payload.data().avatar;
                _this.item = data.payload.data();
                _this.item.id = data.payload.id;
                _this.createForm();
            }
        });
    };
    EditUserComponent = __decorate([
        Component({
            selector: 'app-edit-user',
            templateUrl: './edit-user.component.html',
            styleUrls: ['./edit-user.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder, ActivatedRoute, Router, UserService, ToastrService])
    ], EditUserComponent);
    return EditUserComponent;
}());
export { EditUserComponent };
//# sourceMappingURL=edit-user.component.js.map