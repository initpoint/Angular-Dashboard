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
var FormDefaultComponent = /** @class */ (function () {
    function FormDefaultComponent() {
    }
    FormDefaultComponent.prototype.ngOnInit = function () { };
    FormDefaultComponent = __decorate([
        Component({
            selector: 'app-form-default',
            templateUrl: './form-default.component.html',
            styleUrls: ['./form-default.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FormDefaultComponent);
    return FormDefaultComponent;
}());
export { FormDefaultComponent };
//# sourceMappingURL=form-default.component.js.map