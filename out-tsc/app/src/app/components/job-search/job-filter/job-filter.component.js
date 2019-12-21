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
var JobFilterComponent = /** @class */ (function () {
    function JobFilterComponent() {
        this.isFilter = false;
        this.isLocation = false;
        this.isJob_Title = false;
        this.isIndustry = false;
        this.isSpecific_skills = false;
    }
    JobFilterComponent.prototype.ngOnInit = function () { };
    JobFilterComponent = __decorate([
        Component({
            selector: 'app-job-filter',
            templateUrl: './job-filter.component.html',
            styleUrls: ['./job-filter.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], JobFilterComponent);
    return JobFilterComponent;
}());
export { JobFilterComponent };
//# sourceMappingURL=job-filter.component.js.map