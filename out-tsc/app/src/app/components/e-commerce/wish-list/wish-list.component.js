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
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WishListService } from '../../../shared/services/e-commerce/wish-list.service';
var WishListComponent = /** @class */ (function () {
    function WishListComponent(route, wishService) {
        this.route = route;
        this.wishService = wishService;
        this.cartItems = of([]);
        this.selectCartItems = [];
    }
    WishListComponent.prototype.remove = function (item) {
        this.wishService.removeWishItem(item);
    };
    WishListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartItems = this.wishService.getAll();
        this.cartItems.subscribe(function (selectCartItems) { return _this.selectCartItems = selectCartItems; });
    };
    WishListComponent = __decorate([
        Component({
            selector: 'app-wish-list',
            templateUrl: './wish-list.component.html',
            styleUrls: ['./wish-list.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, WishListService])
    ], WishListComponent);
    return WishListComponent;
}());
export { WishListComponent };
//# sourceMappingURL=wish-list.component.js.map