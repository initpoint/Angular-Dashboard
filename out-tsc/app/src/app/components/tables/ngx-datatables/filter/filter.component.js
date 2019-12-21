var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import { companyDB } from '../../../../shared/data/tables/company';
var FilterNgxComponent = /** @class */ (function () {
    function FilterNgxComponent() {
        this.company = [];
        this.temp = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.company = companyDB.data;
    }
    FilterNgxComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.company = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    __decorate([
        ViewChild('DatatableComponent', { static: true }),
        __metadata("design:type", DatatableComponent)
    ], FilterNgxComponent.prototype, "table", void 0);
    FilterNgxComponent = __decorate([
        Component({
            selector: 'app-filter',
            templateUrl: './filter.component.html',
            styleUrls: ['./filter.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FilterNgxComponent);
    return FilterNgxComponent;
}());
export { FilterNgxComponent };
//# sourceMappingURL=filter.component.js.map