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
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './products.service';
import { ToastrService } from 'ngx-toastr';
var products = JSON.parse(localStorage.getItem("cartItem")) || [];
var WishListService = /** @class */ (function () {
    function WishListService(route, productService, toastrService) {
        this.route = route;
        this.productService = productService;
        this.toastrService = toastrService;
        this.wishItems = new BehaviorSubject([]);
        this.itemsInCart = [];
        this.wishItems.subscribe(function (products) { return products = products; });
        this.itemList = [];
    }
    WishListService.prototype.getAll = function () {
        var itemsList = new Observable(function (observer) {
            observer.next(products);
            observer.complete();
        });
        return itemsList;
    };
    WishListService.prototype.addToWishList = function (product, quantity) {
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
    WishListService.prototype.calculateStockCounts = function (product, quantity) {
        var qty = product.quantity + quantity;
        var stock = product.product.stock;
        if (stock < qty) {
            this.toastrService.error('You can not add more items than available. In stock ' + stock + ' items.');
            return false;
        }
        return true;
    };
    WishListService.prototype.removeWishItem = function (item) {
        if (item === undefined)
            return false;
        var index = products.indexOf(item);
        products.splice(index, 1);
        localStorage.setItem('cartItem', JSON.stringify(products));
    };
    WishListService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ActivatedRoute, ProductsService, ToastrService])
    ], WishListService);
    return WishListService;
}());
export { WishListService };
//# sourceMappingURL=wish-list.service.js.map