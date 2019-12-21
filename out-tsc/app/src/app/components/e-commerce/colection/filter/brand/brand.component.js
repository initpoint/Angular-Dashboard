var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
var BrandComponent = /** @class */ (function () {
    function BrandComponent() {
        this.tagsFilters = [];
        this.tagFilters = new EventEmitter();
        // Array
        this.checkedTagsArray = [];
    }
    // value checked call this function
    BrandComponent.prototype.checkedFilter = function (event) {
        var index = this.checkedTagsArray.indexOf(event.target.value); // checked and unchecked value
        if (event.target.checked)
            this.checkedTagsArray.push(event.target.value); // push in array cheked value
        else
            this.checkedTagsArray.splice(index, 1); // removed in array unchecked value           
    };
    BrandComponent.prototype.ngOnInit = function () {
        this.tagFilters.emit(this.checkedTagsArray); // Pass value Using emit 
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], BrandComponent.prototype, "tagsFilters", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], BrandComponent.prototype, "tagFilters", void 0);
    BrandComponent = __decorate([
        Component({
            selector: 'app-brand',
            templateUrl: './brand.component.html',
            styleUrls: ['./brand.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], BrandComponent);
    return BrandComponent;
}());
export { BrandComponent };
//# sourceMappingURL=brand.component.js.map