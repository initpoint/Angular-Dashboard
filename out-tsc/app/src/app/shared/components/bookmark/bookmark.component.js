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
import { NavService } from '../../services/nav.service';
var BookmarkComponent = /** @class */ (function () {
    function BookmarkComponent(navServices) {
        this.navServices = navServices;
        this.open = false;
        this.searchResult = false;
        this.searchResultEmpty = false;
        this.bookmarkItems = [];
    }
    BookmarkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navServices.items.subscribe(function (menuItems) {
            _this.items = menuItems;
            _this.items.filter(function (items) {
                if (items.bookmark) {
                    _this.bookmarkItems.push(items);
                }
            });
        });
    };
    BookmarkComponent.prototype.openBookmarkSearch = function () {
        this.open = !this.open;
        this.removeFix();
    };
    BookmarkComponent.prototype.searchTerm = function (term) {
        var _this = this;
        term ? this.addFix() : this.removeFix();
        if (!term) {
            this.open = false;
            return this.menuItems = [];
        }
        var items = [];
        term = term.toLowerCase();
        this.items.filter(function (menuItems) {
            if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
            }
            if (!menuItems.children)
                return false;
            menuItems.children.filter(function (subItems) {
                if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
                    subItems.icon = menuItems.icon;
                    items.push(subItems);
                }
                if (!subItems.children)
                    return false;
                subItems.children.filter(function (suSubItems) {
                    if (suSubItems.title.toLowerCase().includes(term)) {
                        suSubItems.icon = menuItems.icon;
                        items.push(suSubItems);
                    }
                });
            });
            _this.checkSearchResultEmpty(items);
            _this.menuItems = items;
        });
    };
    BookmarkComponent.prototype.checkSearchResultEmpty = function (items) {
        if (!items.length)
            this.searchResultEmpty = true;
        else
            this.searchResultEmpty = false;
    };
    BookmarkComponent.prototype.addFix = function () {
        this.searchResult = true;
        document.getElementById("canvas-bookmark").classList.add("offcanvas-bookmark");
    };
    BookmarkComponent.prototype.removeFix = function () {
        this.searchResult = false;
        this.text = "";
        document.getElementById("canvas-bookmark").classList.remove("offcanvas-bookmark");
    };
    BookmarkComponent.prototype.addToBookmark = function (items) {
        var index = this.bookmarkItems.indexOf(items);
        if (index === -1 && !items.bookmark) {
            items.bookmark = true;
            this.bookmarkItems.push(items);
            this.text = "";
        }
        else {
            this.bookmarkItems.splice(index, 1);
            items.bookmark = false;
        }
    };
    BookmarkComponent = __decorate([
        Component({
            selector: 'app-bookmark',
            templateUrl: './bookmark.component.html',
            styleUrls: ['./bookmark.component.scss']
        }),
        __metadata("design:paramtypes", [NavService])
    ], BookmarkComponent);
    return BookmarkComponent;
}());
export { BookmarkComponent };
//# sourceMappingURL=bookmark.component.js.map