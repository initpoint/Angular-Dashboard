var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { NavService } from '../../../services/nav.service';
import { CustomizerService } from '../../../services/customizer.service';
import * as feather from 'feather-icons';
var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent(navServices, customizer) {
        this.navServices = navServices;
        this.customizer = customizer;
    }
    ContentLayoutComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            feather.replace();
        });
    };
    ContentLayoutComponent.prototype.clickedOutside = function (event) {
        // click outside Area perform following action
        document.getElementById('outer-container').onclick = function (e) {
            e.stopPropagation();
            if (e.target != document.getElementById('search-outer')) {
                document.getElementsByTagName("body")[0].classList.remove("offcanvas");
            }
            if (e.target != document.getElementById('outer-container')) {
                document.getElementById("canvas-bookmark").classList.remove("offcanvas-bookmark");
            }
            if (e.target != document.getElementById('inner-customizer')) {
                document.getElementsByClassName("customizer-links")[0].classList.remove("open");
                document.getElementsByClassName("customizer-contain")[0].classList.remove("open");
            }
        };
    };
    ContentLayoutComponent.prototype.getRouterOutletState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    ContentLayoutComponent.prototype.rightSidebar = function ($event) {
        this.right_side_bar = $event;
    };
    ContentLayoutComponent.prototype.ngOnInit = function () { };
    __decorate([
        HostListener('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContentLayoutComponent.prototype, "clickedOutside", null);
    ContentLayoutComponent = __decorate([
        Component({
            selector: 'app-content-layout',
            templateUrl: './content-layout.component.html',
            styleUrls: ['./content-layout.component.scss'],
            animations: [
                trigger('animateRoute', [transition('* => *', useAnimation(fadeIn, {
                    // Set the duration to 5seconds and delay to 2 seconds
                    //params: { timing: 3}
                    }))])
            ]
        }),
        __metadata("design:paramtypes", [NavService,
            CustomizerService])
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());
export { ContentLayoutComponent };
//# sourceMappingURL=content-layout.component.js.map