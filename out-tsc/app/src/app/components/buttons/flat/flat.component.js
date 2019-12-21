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
var FlatComponent = /** @class */ (function () {
    function FlatComponent() {
    }
    FlatComponent.prototype.ngOnInit = function () { };
    FlatComponent = __decorate([
        Component({
            selector: 'app-flat',
            templateUrl: './flat.component.html',
            styleUrls: ['./flat.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FlatComponent);
    return FlatComponent;
}());
export { FlatComponent };
//# sourceMappingURL=flat.component.js.map