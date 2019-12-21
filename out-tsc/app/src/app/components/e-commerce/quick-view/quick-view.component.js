var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbRatingConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../../../shared/services/e-commerce/products.service';
import { CartService } from '../../../shared/services/e-commerce/cart.service';
var QuickViewComponent = /** @class */ (function () {
    function QuickViewComponent(router, route, config, productService, cartService, ngb) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.ngb = ngb;
        this.cartItems = of([]);
        this.selectCartItems = [];
        this.counter = 1;
        this.product = {};
        this.detailCnt = [];
        this.slidesPerPage = 4;
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                _this.ngb.dismissAll();
            }
        });
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.productService.getProduct(id).subscribe(function (product) {
                _this.product = product;
            });
        });
    }
    QuickViewComponent.prototype.increment = function () {
        this.counter += 1;
    };
    QuickViewComponent.prototype.decrement = function () {
        if (this.counter > 1) {
            this.counter -= 1;
        }
    };
    QuickViewComponent.prototype.addToCart = function (product, quantity) {
        if (quantity == 0)
            return false;
        this.cartService.addToCart(product, parseInt(quantity));
    };
    QuickViewComponent.prototype.buyNow = function (product, quantity) {
        if (quantity > 0)
            this.cartService.addToCart(product, parseInt(quantity));
        this.router.navigate(['/ecommerce/check-out']);
    };
    QuickViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartItems = this.cartService.getAll();
        this.cartItems.subscribe(function (selectCartItems) { return _this.selectCartItems = selectCartItems; });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], QuickViewComponent.prototype, "productDetail", void 0);
    QuickViewComponent = __decorate([
        Component({
            selector: 'app-quick-view',
            templateUrl: './quick-view.component.html',
            styleUrls: ['./quick-view.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, NgbRatingConfig, ProductsService, CartService, NgbModal])
    ], QuickViewComponent);
    return QuickViewComponent;
}());
export { QuickViewComponent };
//# sourceMappingURL=quick-view.component.js.map