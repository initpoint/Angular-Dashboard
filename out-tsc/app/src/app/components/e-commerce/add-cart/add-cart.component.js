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
import { ActivatedRoute } from '@angular/router';
import { CartService } from "../../../shared/services/e-commerce/cart.service";
import { of } from 'rxjs';
var AddCartComponent = /** @class */ (function () {
    function AddCartComponent(route, cartService) {
        this.route = route;
        this.cartService = cartService;
        this.cartItems = of([]);
        this.selectCartItems = [];
    }
    //remove cart
    AddCartComponent.prototype.remove = function (item) {
        this.cartService.removeCartItem(item);
    };
    //get total amount
    AddCartComponent.prototype.getTotal = function () {
        return this.cartService.getTotalAmount();
    };
    //product quentity decrement
    AddCartComponent.prototype.decrement = function (product, quantity) {
        if (quantity === void 0) { quantity = -1; }
        this.cartService.updateCartQuantity(product, quantity);
    };
    //product quentity increment
    AddCartComponent.prototype.increment = function (product, quantity) {
        if (quantity === void 0) { quantity = +1; }
        this.cartService.updateCartQuantity(product, quantity);
    };
    AddCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartItems = this.cartService.getAll();
        this.cartItems.subscribe(function (selectCartItems) { return _this.selectCartItems = selectCartItems; });
    };
    AddCartComponent = __decorate([
        Component({
            selector: 'app-add-cart',
            templateUrl: './add-cart.component.html',
            styleUrls: ['./add-cart.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, CartService])
    ], AddCartComponent);
    return AddCartComponent;
}());
export { AddCartComponent };
//# sourceMappingURL=add-cart.component.js.map