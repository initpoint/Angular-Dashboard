var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef } from '@angular/core';
import * as data from '../../../shared/data/sticky/sticky';
var StickyComponent = /** @class */ (function () {
    function StickyComponent(eRef) {
        this.eRef = eRef;
        this.notes = data.sticky;
    }
    StickyComponent.prototype.ngOnInit = function () { };
    //Add new sticky note
    StickyComponent.prototype.addStickyNote = function () {
        this.notes.push({ id: this.notes.length + 1, isDeleted: false });
    };
    ;
    //Delete a particulr sticky note
    StickyComponent.prototype.deleteNote = function (note) {
        note.isDeleted = true;
    };
    StickyComponent = __decorate([
        Component({
            selector: 'app-sticky',
            templateUrl: './sticky.component.html',
            styleUrls: ['./sticky.component.scss']
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], StickyComponent);
    return StickyComponent;
}());
export { StickyComponent };
//# sourceMappingURL=sticky.component.js.map