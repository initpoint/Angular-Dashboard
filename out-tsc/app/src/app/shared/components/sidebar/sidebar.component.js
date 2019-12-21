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
import { Router, NavigationEnd } from '@angular/router';
import { NavService } from '../../services/nav.service';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, navServices) {
        var _this = this;
        this.router = router;
        this.navServices = navServices;
        this.navServices.items.subscribe(function (menuItems) {
            _this.menuItems = menuItems;
            _this.router.events.subscribe(function (event) {
                if (event instanceof NavigationEnd) {
                    menuItems.filter(function (items) {
                        if (items.path === event.url)
                            _this.setNavActive(items);
                        if (!items.children)
                            return false;
                        items.children.filter(function (subItems) {
                            if (subItems.path === event.url)
                                _this.setNavActive(subItems);
                            if (!subItems.children)
                                return false;
                            subItems.children.filter(function (subSubItems) {
                                if (subSubItems.path === event.url)
                                    _this.setNavActive(subSubItems);
                            });
                        });
                    });
                }
            });
        });
    }
    // Active Nave state
    SidebarComponent.prototype.setNavActive = function (item) {
        this.menuItems.filter(function (menuItem) {
            if (menuItem != item)
                menuItem.active = false;
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true;
            if (menuItem.children) {
                menuItem.children.filter(function (submenuItems) {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true;
                        submenuItems.active = true;
                    }
                });
            }
        });
    };
    // Click Toggle menu
    SidebarComponent.prototype.toggletNavActive = function (item) {
        var _this = this;
        if (!item.active) {
            this.menuItems.forEach(function (a) {
                if (_this.menuItems.includes(item))
                    a.active = false;
                if (!a.children)
                    return false;
                a.children.forEach(function (b) {
                    if (a.children.includes(item)) {
                        b.active = false;
                    }
                });
            });
        }
        item.active = !item.active;
    };
    //Fileupload
    SidebarComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files.length === 0)
            return;
        //Image upload validation
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        // Image upload
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (_event) {
            _this.url = reader.result;
        };
    };
    SidebarComponent = __decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Router, NavService])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map