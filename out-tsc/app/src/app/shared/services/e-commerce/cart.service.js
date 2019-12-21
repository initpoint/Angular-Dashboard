var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
var products = JSON.parse(localStorage.getItem("cartItem")) || [];
var CartService = /** @class */ (function () {
    function CartService(route, productService, toastrService) {
        this.route = route;
        this.productService = productService;
        this.toastrService = toastrService;
        this.cartItems = new BehaviorSubject([]);
        this.itemsInCart = [];
        this.cartItems.subscribe(function (products) { return products = products; });
        this.itemList = [];
    }
    CartService.prototype.getAll = function () {
        var itemsList = new Observable(function (observer) {
            observer.next(products);
            observer.complete();
        });
        return itemsList;
    };
    CartService.prototype.addToCart = function (product, quantity) {
        var _this = this;
        var item = false;
        var hashItem = products.find(function (items, index) {
            if (items.product.id == product.id) {
                var qty = products[index].quantity + quantity;
                var stock = _this.calculateStockCounts(products[index], quantity);
                if (qty != 0 && stock) {
                    products[index]['quantity'] = qty;
                    _this.toastrService.success('This product has been already added to cart.');
                    localStorage.setItem('cartItem', JSON.stringify(products));
                }
                return true;
            }
        });
        if (!hashItem) {
            item = { product: product, quantity: quantity };
            products.push(item);
            this.toastrService.success('This product has been added to cart.');
        }
        localStorage.setItem('cartItem', JSON.stringify(products));
        return item;
    };
    CartService.prototype.calculateStockCounts = function (product, quantity) {
        var qty = product.quantity + quantity;
        var stock = product.product.stock;
        if (stock < qty) {
            this.toastrService.error('You can not add more items than available. In stock ' + stock + ' items.');
            return false;
        }
        return true;
    };
    CartService.prototype.removeCartItem = function (item) {
        if (item === undefined)
            return false;
        var index = products.indexOf(item);
        products.splice(index, 1);
        localStorage.setItem('cartItem', JSON.stringify(products));
    };
    CartService.prototype.updateCartQuantity = function (product, quantity) {
        var _this = this;
        return products.find(function (items, index) {
            if (items.product.id == product.id) {
                var qty = products[index].quantity + quantity;
                var stock = _this.calculateStockCounts(products[index], quantity);
                if (qty != 0 && stock)
                    products[index]['quantity'] = qty;
                localStorage.setItem("cartItem", JSON.stringify(products));
                return true;
            }
        });
    };
    CartService.prototype.getTotalAmount = function () {
        return this.cartItems.map(function (product) {
            return products.reduce(function (prev, curr) {
                return prev + curr.product.price * curr.quantity;
            }, 0);
        });
    };
    CartService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ActivatedRoute, ProductsService, ToastrService])
    ], CartService);
    return CartService;
}());
export { CartService };
//# sourceMappingURL=cart.service.js.map