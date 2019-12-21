var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/firebase/auth.service';
var body = document.getElementsByTagName("body")[0];
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navServices, translate, authService) {
        this.navServices = navServices;
        this.translate = translate;
        this.authService = authService;
        this.searchResult = false;
        this.searchResultEmpty = false;
        this.openNav = false;
        this.right_sidebar = false;
        this.isOpenMobile = false;
        this.rightSidebarEvent = new EventEmitter();
        translate.setDefaultLang('en');
    }
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.removeFix();
    };
    HeaderComponent.prototype.right_side_bar = function () {
        this.right_sidebar = !this.right_sidebar;
        this.rightSidebarEvent.emit(this.right_sidebar);
    };
    HeaderComponent.prototype.collapseSidebar = function () {
        this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
    };
    HeaderComponent.prototype.openMobileNav = function () {
        this.openNav = !this.openNav;
    };
    HeaderComponent.prototype.changeLanguage = function (lang) {
        this.translate.use(lang);
    };
    HeaderComponent.prototype.searchTerm = function (term) {
        var _this = this;
        term ? this.addFix() : this.removeFix();
        if (!term)
            return this.menuItems = [];
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
    HeaderComponent.prototype.checkSearchResultEmpty = function (items) {
        if (!items.length)
            this.searchResultEmpty = true;
        else
            this.searchResultEmpty = false;
    };
    HeaderComponent.prototype.addFix = function () {
        this.searchResult = true;
        body.classList.add("offcanvas");
    };
    HeaderComponent.prototype.removeFix = function () {
        this.searchResult = false;
        body.classList.remove("offcanvas");
        this.text = "";
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navServices.items.subscribe(function (menuItems) {
            _this.items = menuItems;
        });
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "rightSidebarEvent", void 0);
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        }),
        __metadata("design:paramtypes", [NavService,
            TranslateService,
            AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map