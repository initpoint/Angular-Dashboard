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
import { UserService } from '../../../shared/services/firebase/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.searchValue = "";
        this.logText = '';
        this.value = 10;
        this.highValue = 50;
        this.options = {
            floor: 0,
            ceil: 100,
        };
    }
    UsersComponent.prototype.showDelete = function () {
        this.toastr.error('User Deleted !');
    };
    UsersComponent.prototype.searchByName = function () {
        var _this = this;
        var value = this.searchValue.toLowerCase();
        this.userService.searchUsers(value)
            .subscribe(function (result) {
            _this.name_filtered_items = result;
            _this.items = _this.combineLists(result, _this.age_filtered_items);
        });
    };
    UsersComponent.prototype.combineLists = function (a, b) {
        var result = [];
        a.filter(function (x) {
            return b.filter(function (x2) {
                if (x2.payload.doc.id == x.payload.doc.id) {
                    result.push(x2);
                }
            });
        });
        return result;
    };
    UsersComponent.prototype.delete = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .then(function (res) {
            _this.router.navigate(['/user/users']);
            _this.showDelete();
        }, function (err) {
        });
    };
    UsersComponent.prototype.getData = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (result) {
            _this.items = result;
            _this.name_filtered_items = result;
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    UsersComponent = __decorate([
        Component({
            selector: 'app-contacts',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.scss']
        }),
        __metadata("design:paramtypes", [UserService, Router, ToastrService])
    ], UsersComponent);
    return UsersComponent;
}());
export { UsersComponent };
//# sourceMappingURL=users.component.js.map