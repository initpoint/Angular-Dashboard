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
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.currency = 'USD';
        this._http = null;
        this._http = http;
    }
    ProductsService.prototype.products = function () {
        return this.http.get('assets/data/ecommerce/products.json').map(function (res) {
            return res;
        });
    };
    ProductsService.prototype.getProducts = function () {
        return this.products();
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.products().pipe(map(function (items) {
            return items.find(function (item) {
                return item.id === id;
            });
        }));
    };
    ProductsService.prototype.getProductByColor = function (color) {
        return this.products().pipe(map(function (items) {
            return items.filter(function (item) {
                if (color == item.colors) {
                    return item.colors;
                }
                else {
                    return item;
                }
            });
        }));
    };
    ProductsService.prototype.checkDuplicateInObject = function (tag, Products) {
        var seenDuplicate = false, testObject = {};
        Products.map(function (item) {
            var itemPropertyName = item[tag];
            if (itemPropertyName in testObject) {
                testObject[itemPropertyName].duplicate = true;
                item.duplicate = true;
                seenDuplicate = true;
            }
            else {
                testObject[itemPropertyName] = item;
                delete item.duplicate;
            }
        });
        return seenDuplicate;
    };
    ProductsService.prototype.getProductByCategory = function (category) {
        return this.products().pipe(map(function (items) {
            return items.filter(function (item) {
                if (category == 'all') {
                    return item;
                }
                else {
                    return item.category === category;
                }
            });
        }));
    };
    ProductsService.prototype.tag = function () {
        return this.http.get('assets/data/products.json').map(function (res) {
            return res;
        });
    };
    ProductsService.prototype.getTags = function () {
        return this.products();
    };
    ProductsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductsService);
    return ProductsService;
}());
export { ProductsService };
//# sourceMappingURL=products.service.js.map