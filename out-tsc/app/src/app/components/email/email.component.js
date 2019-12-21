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
import { Mail } from '../../shared/data/email/email';
var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
        this.compose = true;
        this.allEmails = Mail.Emails;
        this.selectedEmails = [];
    }
    EmailComponent.prototype.getUserEmail = function (type) {
        var emails = [];
        return this.allEmails.filter(function (email) {
            if (type == 'allmail') {
                return emails.push(email);
            }
            else if (type == 'favourite') {
                if (email.favourite) {
                    return emails.push(email);
                }
            }
            else if (email.type === type) {
                return emails.push(email);
            }
        });
    };
    EmailComponent.prototype.selectedUserEmail = function (email) {
        this.selectEmail = email;
        this.compose = false;
    };
    EmailComponent.prototype.selectedmail = function ($event, email) {
        var index = this.selectedEmails.indexOf(email);
        if ($event.target.checked === true && index === -1) {
            // val not found, pushing onto array
            this.selectedEmails.push(email);
        }
        else {
            // val is found, removing from array
            this.selectedEmails.splice(index, 1);
        }
    };
    EmailComponent.prototype.moveEmails = function (val) {
        if (!val)
            return;
        this.selectedEmails.filter(function (email) {
            return email.type = val;
        });
    };
    EmailComponent.prototype.addFavourite = function (email) {
        email.favourite = !email.favourite;
    };
    EmailComponent.prototype.ngOnInit = function () { };
    EmailComponent = __decorate([
        Component({
            selector: 'app-email',
            templateUrl: './email.component.html',
            styleUrls: ['./email.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], EmailComponent);
    return EmailComponent;
}());
export { EmailComponent };
//# sourceMappingURL=email.component.js.map