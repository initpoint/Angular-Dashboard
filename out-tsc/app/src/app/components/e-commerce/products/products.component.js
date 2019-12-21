var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output } from '@angular/core';
import { ProductsService } from '../../../shared/services/e-commerce/products.service';
import { CartService } from '../../../shared/services/e-commerce/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WishListService } from '../../../shared/services/e-commerce/wish-list.service';
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, cartService, modalService, wishService) {
        this.productService = productService;
        this.cartService = cartService;
        this.modalService = modalService;
        this.wishService = wishService;
        this.items = [];
        this.products = [];
        this.colorsFilters = [];
        this.allItems = [];
        this.tags = [];
        this.tagsFilters = [];
        this.sortByOrder = '';
        this.check = false;
        //image set
        this.detailCnt = [];
        this.slidesPerPage = 1;
        this.customOptions = {
            slider: 1,
            items: 1,
            margin: 30,
            loop: false,
            pagination: false,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        };
        this.sidebaron = false;
        this.show = false;
        this.open = false;
        this.listView = false;
        this.col_xl_12 = false;
        this.col_xl_2 = false;
        this.col_sm_3 = false;
        this.col_xl_3 = true;
        this.xl_4 = true;
        this.col_sm_4 = false;
        this.col_xl_4 = false;
        this.col_sm_6 = true;
        this.col_xl_6 = false;
        this.gridOptions = true;
        this.active = false;
    }
    ProductsComponent.prototype.onChangeSorting = function (val) {
        this.sortByOrder = val;
    };
    ProductsComponent.prototype.filterItems = function () {
        var _this = this;
        return this.products.filter(function (item) {
            var Colors = _this.colorsFilters.reduce(function (prev, curr) {
                if (item.colors) {
                    if (item.colors.includes(curr.color)) {
                        _this.active = true;
                        _this.check = true;
                        return prev && true;
                    }
                }
            }, true);
            var Tags = _this.tagsFilters.reduce(function (prev, curr) {
                if (item.tags) {
                    if (item.tags.includes(curr)) {
                        return prev && true;
                    }
                }
            }, true);
            return Colors && Tags; // return true
        });
    };
    ProductsComponent.prototype.getColors = function (products) {
        var uniqueColors = [];
        var itemColor = Array();
        products.map(function (product, index) {
            if (product.colors) {
                product.colors.map(function (color) {
                    var index = uniqueColors.indexOf(color);
                    if (index === -1)
                        uniqueColors.push(color);
                });
            }
        });
        for (var i = 0; i < uniqueColors.length; i++) {
            itemColor.push({ color: uniqueColors[i] });
        }
        this.colors = itemColor;
    };
    ProductsComponent.prototype.updateColor = function (colors) {
        this.colorsFilters = colors;
    };
    ProductsComponent.prototype.getTags = function (products) {
        var uniqueBrands = [];
        var itemBrand = Array();
        products.map(function (product, index) {
            if (product.tags) {
                product.tags.map(function (tag) {
                    var index = uniqueBrands.indexOf(tag);
                    if (index === -1)
                        uniqueBrands.push(tag);
                });
            }
        });
        for (var i = 0; i < uniqueBrands.length; i++) {
            itemBrand.push({ brand: uniqueBrands[i] });
        }
        this.tags = itemBrand;
    };
    ProductsComponent.prototype.updateTagFilters = function (tags) {
        this.tagsFilters = tags;
    };
    ProductsComponent.prototype.updatePriceFilters = function (price) {
        var _this = this;
        var pricemin = price.value;
        var maxPrice = price.highValue;
        var items = [];
        this.productService.getProducts().subscribe(function (product) {
            product.filter(function (item) {
                if (item.price >= pricemin && item.price <= maxPrice) {
                    items.push(item); // push in array
                }
            });
            _this.products = items;
        });
    };
    ProductsComponent.prototype.openFilter = function () {
        if (this.show == true && this.sidebaron == true) {
            this.show = false;
            this.sidebaron = false;
        }
        else {
            this.show = true;
            this.sidebaron = true;
        }
    };
    ProductsComponent.prototype.openMediaFilter = function () {
        if (this.show == false && this.sidebaron == false && this.open == false) {
            this.show = true;
            this.sidebaron = true;
            this.open = true;
        }
        else {
            this.show = false;
            this.sidebaron = false;
            this.open = false;
        }
    };
    ProductsComponent.prototype.gridOpen = function () {
        this.gridOptions = true;
        this.listView = false;
        this.col_xl_3 = true;
        this.xl_4 = true;
        this.col_xl_4 = false;
        this.col_sm_4 = false;
        this.col_xl_6 = false;
        this.col_sm_6 = true;
        this.col_xl_2 = false;
        this.col_xl_12 = false;
    };
    ProductsComponent.prototype.listOpen = function () {
        this.gridOptions = false;
        this.listView = true;
        this.col_xl_3 = true;
        this.xl_4 = true;
        this.col_xl_12 = true;
        this.col_xl_2 = false;
        this.col_xl_4 = false;
        this.col_sm_4 = false;
        this.col_xl_6 = false;
        this.col_sm_6 = true;
    };
    ProductsComponent.prototype.grid2 = function () {
        this.listView = false;
        this.col_xl_3 = false;
        this.col_sm_3 = false;
        this.col_xl_2 = false;
        this.col_xl_4 = false;
        this.col_sm_4 = false;
        this.col_xl_6 = true;
        this.col_sm_6 = true;
        this.col_xl_12 = false;
    };
    ProductsComponent.prototype.grid3 = function () {
        this.listView = false;
        this.col_xl_3 = false;
        this.col_sm_3 = false;
        this.col_xl_2 = false;
        this.col_xl_4 = true;
        this.col_sm_4 = true;
        this.col_xl_6 = false;
        this.col_sm_6 = false;
        this.col_xl_12 = false;
    };
    ProductsComponent.prototype.grid6 = function () {
        this.listView = false;
        this.col_xl_3 = false;
        this.col_sm_3 = false;
        this.col_xl_2 = true;
        this.col_xl_4 = false;
        this.col_sm_4 = false;
        this.col_xl_6 = false;
        this.col_sm_6 = false;
        this.col_xl_12 = false;
    };
    // add to cart service
    ProductsComponent.prototype.addToCart = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.cartService.addToCart(product, quantity);
    };
    //add to wish list service
    ProductsComponent.prototype.addToWishlist = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.wishService.addToWishList(product, quantity);
    };
    // open single product detail
    ProductsComponent.prototype.openProductDetail = function (content, id) {
        var _this = this;
        this.modalService.open(content, { centered: true, size: 'lg' });
        this.productService.getProduct(id).subscribe(function (product) {
            _this.productDetail = product;
        });
    };
    //decrement product quentity
    ProductsComponent.prototype.decrement = function (product, quantity) {
        if (quantity === void 0) { quantity = -1; }
        this.cartService.updateCartQuantity(product, quantity);
    };
    //increment product quentity
    ProductsComponent.prototype.increment = function (product, quantity) {
        if (quantity === void 0) { quantity = +1; }
        this.cartService.updateCartQuantity(product, quantity);
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (product) {
            _this.products = product;
            _this.getColors(product);
            _this.getTags(product);
        });
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "productDetail", void 0);
    ProductsComponent = __decorate([
        Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
        }),
        __metadata("design:paramtypes", [ProductsService, CartService, NgbModal, WishListService])
    ], ProductsComponent);
    return ProductsComponent;
}());
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map