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
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var ALERTS = [{
        type: 'success',
        message: 'This is an success alert',
    },
    {
        type: 'info',
        message: 'This is an info alert',
    },
    {
        type: 'warning',
        message: 'This is a warning alert',
    },
    {
        type: 'danger',
        message: 'This is a danger alert',
    },
    {
        type: 'primary',
        message: 'This is a primary alert',
    },
    {
        type: 'secondary',
        message: 'This is a secondary alert',
    },
    {
        type: 'light',
        message: 'This is a light alert',
    },
    {
        type: 'dark',
        message: 'This is a dark alert',
    }
];
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this._success = new Subject();
        this.staticAlertClosed = false;
        this.reset();
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.pipe(debounceTime(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    AlertComponent.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    AlertComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AlertComponent.prototype.reset = function () {
        this.alerts = Array.from(ALERTS);
    };
    AlertComponent = __decorate([
        Component({
            selector: 'app-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map