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
import { productDB } from '../../../shared/data/tables/product-list';
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.products = [];
        this.settings = {
            columns: {
                img: {
                    title: 'Image',
                    type: 'html',
                },
                product_name: {
                    title: 'Product_name'
                },
                product_desc: {
                    title: 'Product_desc'
                },
                amount: {
                    title: 'Amount'
                },
                stock: {
                    title: 'Stock',
                    type: 'html',
                },
                start_date: {
                    title: 'Start_date'
                }
            },
        };
        this.products = productDB.product;
    }
    ProductListComponent.prototype.ngOnInit = function () { };
    ProductListComponent = __decorate([
        Component({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map