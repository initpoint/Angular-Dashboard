var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobDescComponent } from './job-desc/job-desc.component';
import { JobCardComponent } from './job-card/job-card.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'cardview',
                component: JobCardComponent,
                data: {
                    title: "Card View",
                    breadcrumb: "Card View"
                }
            },
            {
                path: 'listview',
                component: JobListComponent,
                data: {
                    title: "List View",
                    breadcrumb: "List View"
                }
            },
            {
                path: 'job-desc/:id',
                component: JobDescComponent,
                data: {
                    title: "Job Details",
                    breadcrumb: "Job Details"
                }
            },
            {
                path: 'job-apply/:id',
                component: JobApplyComponent,
                data: {
                    title: "Apply",
                    breadcrumb: "Apply"
                }
            },
        ]
    }
];
var JobSearchRoutingModule = /** @class */ (function () {
    function JobSearchRoutingModule() {
    }
    JobSearchRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], JobSearchRoutingModule);
    return JobSearchRoutingModule;
}());
export { JobSearchRoutingModule };
//# sourceMappingURL=job-search-routing.module.js.map