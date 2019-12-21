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
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(config) {
        this.name = 'World';
        // customize default values of popovers used by this component tree
        config.placement = 'top';
        config.triggers = 'click';
    }
    PopoverComponent.prototype.ngOnInit = function () { };
    //Tooltip greeting on click as well as hover
    PopoverComponent.prototype.toggleWithGreeting = function (popover, greeting, language) {
        if (popover.isOpen()) {
            popover.close();
        }
        else {
            popover.open({ greeting: greeting, language: language });
        }
    };
    PopoverComponent.prototype.recordShown = function () {
        this.lastShown = new Date();
    };
    PopoverComponent.prototype.recordHidden = function () {
        this.lastHidden = new Date();
    };
    PopoverComponent = __decorate([
        Component({
            selector: 'app-popover',
            templateUrl: './popover.component.html',
            styleUrls: ['./popover.component.scss'],
            encapsulation: ViewEncapsulation.None,
            providers: [NgbPopoverConfig] // add NgbPopoverConfig to the component providers
        }),
        __metadata("design:paramtypes", [NgbPopoverConfig])
    ], PopoverComponent);
    return PopoverComponent;
}());
export { PopoverComponent };
//# sourceMappingURL=popover.component.js.map