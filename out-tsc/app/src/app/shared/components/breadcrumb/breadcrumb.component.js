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
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators';
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(activatedRoute, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationEnd; }))
            .pipe(map(function () { return _this.activatedRoute; }))
            .pipe(map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(filter(function (route) { return route.outlet === PRIMARY_OUTLET; }))
            .subscribe(function (route) {
            var snapshot = _this.router.routerState.snapshot;
            var title = route.snapshot.data['title'];
            var parent = route.parent.snapshot.data['breadcrumb'];
            var child = route.snapshot.data['breadcrumb'];
            _this.breadcrumbs = {};
            _this.title = title;
            _this.breadcrumbs = {
                "parentBreadcrumb": parent,
                "childBreadcrumb": child
            };
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.prototype.ngOnDestroy = function () { };
    BreadcrumbComponent = __decorate([
        Component({
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html',
            styleUrls: ['./breadcrumb.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
//# sourceMappingURL=breadcrumb.component.js.map