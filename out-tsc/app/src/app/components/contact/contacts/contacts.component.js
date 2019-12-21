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
import { ContactService } from '../../../shared/services/firebase/contact.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(contactService, router, toastr) {
        this.contactService = contactService;
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
    ContactsComponent.prototype.showDelete = function () {
        this.toastr.error('User Deleted !');
    };
    ContactsComponent.prototype.onUserChangeStart = function (changeContext) {
        this.logText += "onUserChangeStart(" + this.getChangeContextString(changeContext) + ")\n";
    };
    ContactsComponent.prototype.onUserChange = function (changeContext) {
        this.logText += "onUserChange(" + this.getChangeContextString(changeContext) + ")\n";
    };
    ContactsComponent.prototype.onUserChangeEnd = function (changeContext) {
        this.logText += "onUserChangeEnd(" + this.getChangeContextString(changeContext) + ")\n";
    };
    ContactsComponent.prototype.getChangeContextString = function (changeContext) {
        this.min = changeContext.value;
        this.age = changeContext.value;
        this.rangeChange(this.age);
    };
    ContactsComponent.prototype.searchByName = function () {
        var _this = this;
        var value = this.searchValue.toLowerCase();
        this.contactService.searchUsers(value)
            .subscribe(function (result) {
            _this.name_filtered_items = result;
            _this.items = _this.combineLists(result, _this.age_filtered_items);
        });
    };
    ContactsComponent.prototype.rangeChange = function (event) {
        var _this = this;
        this.contactService.searchUsersByAge(event)
            .subscribe(function (result) {
            _this.age_filtered_items = result;
            _this.items = _this.combineLists(result, _this.name_filtered_items);
        });
    };
    ContactsComponent.prototype.combineLists = function (a, b) {
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
    ContactsComponent.prototype.delete = function (contactId) {
        var _this = this;
        this.contactService.deleteUser(contactId)
            .then(function (res) {
            _this.router.navigate(['/contact/contacts']);
            _this.showDelete();
        }, function (err) {
        });
    };
    ContactsComponent.prototype.getData = function () {
        var _this = this;
        this.contactService.getUsers()
            .subscribe(function (result) {
            _this.items = result;
            _this.age_filtered_items = result;
            _this.name_filtered_items = result;
        });
    };
    ContactsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ContactsComponent = __decorate([
        Component({
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.scss']
        }),
        __metadata("design:paramtypes", [ContactService, Router, ToastrService])
    ], ContactsComponent);
    return ContactsComponent;
}());
export { ContactsComponent };
//# sourceMappingURL=contacts.component.js.map