var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { PointerType, LabelType } from 'ng5-slider';
var PriceComponent = /** @class */ (function () {
    function PriceComponent() {
        this.priceFilters = new EventEmitter();
        this.minValue = 100;
        this.maxValue = 1000;
        this.options = {
            floor: 100,
            ceil: 1000,
            translate: function (value, label) {
                switch (label) {
                    case LabelType.Low:
                        return '$' + value;
                    case LabelType.High:
                        return '$' + value;
                    default:
                        return '$' + value;
                }
            }
        };
        this.logText = '';
    }
    PriceComponent.prototype.onUserChangeStart = function (changeContext) {
        this.logText += "onUserChangeStart(" + this.getChangeContextString(changeContext) + ")\n";
    };
    PriceComponent.prototype.onUserChange = function (changeContext) {
        this.logText += "onUserChange(" + this.getChangeContextString(changeContext) + ")\n";
    };
    PriceComponent.prototype.onUserChangeEnd = function (changeContext) {
        this.logText += "onUserChangeEnd(" + this.getChangeContextString(changeContext) + ")\n";
    };
    PriceComponent.prototype.getChangeContextString = function (changeContext) {
        this.min = changeContext.value;
        this.max = changeContext.highValue;
        this.priceFilters.emit(changeContext);
        return "{pointerType: " + (changeContext.pointerType === PointerType.Min ? 'Min' : 'Max') + ", " +
            ("value: " + changeContext.value + ", ") +
            ("highValue: " + changeContext.highValue + "}");
    };
    PriceComponent.prototype.ngOnInit = function () { };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PriceComponent.prototype, "priceFilters", void 0);
    PriceComponent = __decorate([
        Component({
            selector: 'app-price',
            templateUrl: './price.component.html',
            styleUrls: ['./price.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PriceComponent);
    return PriceComponent;
}());
export { PriceComponent };
//# sourceMappingURL=price.component.js.map