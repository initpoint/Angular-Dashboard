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
var PageWithVideoComponent = /** @class */ (function () {
    function PageWithVideoComponent() {
        this.setTime();
    }
    PageWithVideoComponent.prototype.setTime = function () {
        setInterval(function () {
            var countDown = new Date('Sep 30, 2019 00:00:00').getTime();
            var now = new Date().getTime();
            var distance = countDown - now;
            this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
        }, this.seconds);
    };
    PageWithVideoComponent.prototype.ngOnInit = function () { };
    PageWithVideoComponent = __decorate([
        Component({
            selector: 'app-page-with-video',
            templateUrl: './page-with-video.component.html',
            styleUrls: ['./page-with-video.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PageWithVideoComponent);
    return PageWithVideoComponent;
}());
export { PageWithVideoComponent };
//# sourceMappingURL=page-with-video.component.js.map