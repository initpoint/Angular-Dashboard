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
import { ActivatedRoute, Router } from '@angular/router';
import { LearningDB } from '../../../shared/data/learning/learning';
var LearningDetailComponent = /** @class */ (function () {
    function LearningDetailComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.courses = LearningDB.lang;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.courses.filter(function (items) {
                if (items.Id === id) {
                    _this.arr = items;
                }
            });
        });
    }
    LearningDetailComponent.prototype.ngOnInit = function () { };
    LearningDetailComponent = __decorate([
        Component({
            selector: 'app-learning-detail',
            templateUrl: './learning-detail.component.html',
            styleUrls: ['./learning-detail.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, Router])
    ], LearningDetailComponent);
    return LearningDetailComponent;
}());
export { LearningDetailComponent };
//# sourceMappingURL=learning-detail.component.js.map