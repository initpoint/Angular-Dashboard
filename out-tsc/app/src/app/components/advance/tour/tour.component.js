var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { HintService } from 'angular-custom-tour';
var TourComponent = /** @class */ (function () {
    function TourComponent(hintService) {
        this.hintService = hintService;
    }
    TourComponent.prototype.ngOnInit = function () { };
    TourComponent.prototype.startTour = function () {
        this.hintService.initialize();
    };
    //Fileupload
    TourComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files.length === 0)
            return;
        //Image upload validation
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        // Image upload
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (_event) {
            _this.url = reader.result;
        };
    };
    TourComponent = __decorate([
        Component({
            selector: 'app-tour',
            templateUrl: './tour.component.html',
            styleUrls: ['./tour.component.scss'],
            providers: [HintService],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [HintService])
    ], TourComponent);
    return TourComponent;
}());
export { TourComponent };
//# sourceMappingURL=tour.component.js.map