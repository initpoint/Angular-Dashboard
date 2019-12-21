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
var ScrollableComponent = /** @class */ (function () {
    function ScrollableComponent() {
        this.disabled = false;
        this.config = {
            suppressScrollX: false,
            wheelPropagation: false,
            useBothWheelAxes: true
        };
        this.configBothSideScroll = {
            suppressScrollX: false,
            wheelPropagation: false,
        };
        this.configX = {
            suppressScrollX: false,
            suppressScrollY: true,
        };
        this.configY = {
            suppressScrollX: true,
            suppressScrollY: false,
        };
    }
    ScrollableComponent.prototype.ngOnInit = function () { };
    ScrollableComponent = __decorate([
        Component({
            selector: 'app-scrollable',
            templateUrl: './scrollable.component.html',
            styleUrls: ['./scrollable.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ScrollableComponent);
    return ScrollableComponent;
}());
export { ScrollableComponent };
//# sourceMappingURL=scrollable.component.js.map