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
import { companyDB } from '../../../../shared/data/tables/company';
var SelectionNgxComponent = /** @class */ (function () {
    function SelectionNgxComponent() {
        this.company = [];
        this.selected = [];
        this.company = companyDB.data;
    }
    SelectionNgxComponent.prototype.onSelect = function (_a) {
        var _b;
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
    };
    SelectionNgxComponent = __decorate([
        Component({
            selector: 'app-selection',
            templateUrl: './selection.component.html',
            styleUrls: ['./selection.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], SelectionNgxComponent);
    return SelectionNgxComponent;
}());
export { SelectionNgxComponent };
//# sourceMappingURL=selection.component.js.map