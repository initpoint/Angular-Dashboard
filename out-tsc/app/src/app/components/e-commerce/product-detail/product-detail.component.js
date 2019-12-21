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
import { ActivatedRoute, Router } from "@angular/router";
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from "../../../shared/services/e-commerce/products.service";
import { CartService } from '../../../shared/services/e-commerce/cart.service';
import { ContentDetail } from '../../../shared/model/e-commerce/content';
import { Image } from '@ks89/angular-modal-gallery';
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(router, route, config, productService, cartService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.product = {};
        this.products = [];
        this.detailCnt = [];
        this.slidesPerPage = 4;
        this.syncedSecondary = true;
        this.allContent = [];
        this.contents = [];
        this.active = false;
        this.type = "Febric";
        this.imagesRect = [
            new Image(0, { img: 'assets/images/ecommerce/01.jpg' }, { img: 'assets/images/ecommerce/01.jpg' }),
            new Image(1, { img: 'assets/images/ecommerce/04.jpg' }, { img: 'assets/images/ecommerce/04.jpg' }),
            new Image(2, { img: 'assets/images/ecommerce/03.jpg' }, { img: 'assets/images/ecommerce/03.jpg' }),
            new Image(3, { img: 'assets/images/ecommerce/02.jpg' }, { img: 'assets/images/ecommerce/02.jpg' })
        ];
        this.allContent = ContentDetail.ContentDetails;
        //for rating 
        this.allContent.filter(function (opt) {
            if (_this.type == opt.type) {
                _this.contents.push(opt);
            }
        });
        config.max = 5;
        config.readonly = false;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.productService.getProduct(id).subscribe(function (product) {
                _this.product = product;
            });
        });
    }
    ProductDetailComponent.prototype.getOption = function (type) {
        var _this = this;
        this.contents = [];
        return this.allContent.filter(function (data) {
            if (type == data.type) {
                _this.active = true;
                return _this.contents.push(data);
            }
            else {
                return false;
            }
        });
    };
    ProductDetailComponent.prototype.buyNow = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        if (quantity > 0)
            this.cartService.addToCart(product, quantity);
        this.router.navigate(['/ecommerce/check-out']);
    };
    ProductDetailComponent.prototype.addToCart = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        if (quantity == 0)
            return false;
        this.cartService.addToCart(product, quantity);
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (product) {
            _this.products = product;
            product.filter(function (ele) {
                _this.nav = ele.img;
            });
        });
    };
    ProductDetailComponent = __decorate([
        Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.scss'],
            providers: [NgbRatingConfig]
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, NgbRatingConfig, ProductsService, CartService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
export { ProductDetailComponent };
//# sourceMappingURL=product-detail.component.js.map