var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../../../../../shared/services/e-commerce/products.service';
var ColorComponent = /** @class */ (function () {
    function ColorComponent(productService) {
        this.productService = productService;
        this.activeItem = '';
        this.colorsFilters = [];
        this.colorFilters = new EventEmitter();
    }
    // Click to call function 
    ColorComponent.prototype.changeColor = function (colors) {
        this.activeItem = colors.color;
        if (colors.color) {
            this.colorFilters.emit([colors]);
        }
        else {
            this.colorFilters.emit([]);
        }
    };
    ColorComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ColorComponent.prototype, "colorsFilters", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ColorComponent.prototype, "colorFilters", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ColorComponent.prototype, "uniqueProductColor", void 0);
    ColorComponent = __decorate([
        Component({
            selector: 'app-color',
            templateUrl: './color.component.html',
            styleUrls: ['./color.component.scss']
        }),
        __metadata("design:paramtypes", [ProductsService])
    ], ColorComponent);
    return ColorComponent;
}());
export { ColorComponent };
//# sourceMappingURL=color.component.js.map