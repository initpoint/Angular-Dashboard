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
import { JobDB } from '../../../shared/data/job-search/job-search';
var JobDescComponent = /** @class */ (function () {
    function JobDescComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.jobs = JobDB.Job_Category;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.jobs.filter(function (items) {
                if (items.Id === id) {
                    _this.arr = items;
                }
            });
        });
    }
    JobDescComponent.prototype.applyClick = function (arr) {
        this.router.navigate(['/job-search/job-apply', arr.Id]);
    };
    JobDescComponent.prototype.ngOnInit = function () { };
    JobDescComponent = __decorate([
        Component({
            selector: 'app-job-desc',
            templateUrl: './job-desc.component.html',
            styleUrls: ['./job-desc.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, Router])
    ], JobDescComponent);
    return JobDescComponent;
}());
export { JobDescComponent };
//# sourceMappingURL=job-desc.component.js.map