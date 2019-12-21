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
import { FormBuilder, Validators } from '@angular/forms';
var JobApplyComponent = /** @class */ (function () {
    function JobApplyComponent(route, router, fb) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.fb = fb;
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
    JobApplyComponent.prototype.ngOnInit = function () {
        this.jobForm = this.fb.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.email],
            password: ['', Validators.required],
            rpassword: ['', Validators.required],
            collegename: ['', Validators.required],
            specialization: ['', Validators.required],
            location: ['', Validators.required],
            company_name: ['', Validators.required],
        });
        this.dropdownList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Germany" },
            { "id": 7, "itemName": "France" },
            { "id": 8, "itemName": "Russia" },
            { "id": 9, "itemName": "Italy" },
            { "id": 10, "itemName": "Sweden" }
        ];
        this.selectedItems = [
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
    };
    JobApplyComponent = __decorate([
        Component({
            selector: 'app-job-apply',
            templateUrl: './job-apply.component.html',
            styleUrls: ['./job-apply.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, Router, FormBuilder])
    ], JobApplyComponent);
    return JobApplyComponent;
}());
export { JobApplyComponent };
//# sourceMappingURL=job-apply.component.js.map