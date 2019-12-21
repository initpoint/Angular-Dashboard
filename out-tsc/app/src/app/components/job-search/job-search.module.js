var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { JobSearchRoutingModule } from './job-search-routing.module';
import { JobListComponent } from './job-list/job-list.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobDescComponent } from './job-desc/job-desc.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { SharedModule } from "../../shared/shared.module";
var JobSearchModule = /** @class */ (function () {
    function JobSearchModule() {
    }
    JobSearchModule = __decorate([
        NgModule({
            declarations: [JobListComponent, JobApplyComponent, JobDescComponent, JobFilterComponent, JobCardComponent],
            imports: [
                CommonModule,
                JobSearchRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                NgbModule,
                AngularMultiSelectModule,
                SharedModule
            ]
        })
    ], JobSearchModule);
    return JobSearchModule;
}());
export { JobSearchModule };
//# sourceMappingURL=job-search.module.js.map