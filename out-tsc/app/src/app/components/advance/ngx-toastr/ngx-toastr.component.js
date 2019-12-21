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
import { ToastrService } from 'ngx-toastr';
var NgxToastrComponent = /** @class */ (function () {
    function NgxToastrComponent(toastrService) {
        this.toastrService = toastrService;
    }
    NgxToastrComponent.prototype.ngOnInit = function () { };
    // Success Type
    NgxToastrComponent.prototype.success = function () {
        this.toastrService.success('You are awesome!', 'Success!');
    };
    // info Type
    NgxToastrComponent.prototype.info = function () {
        this.toastrService.info('We do have the Kapua suite available.', 'Turtle Bay Resort');
    };
    // warning Type
    NgxToastrComponent.prototype.warning = function () {
        this.toastrService.warning('My name is John Dio. You killed my father, prepare to die!');
    };
    // danger Type
    NgxToastrComponent.prototype.danger = function () {
        this.toastrService.error('I do not think that word means what you think it means.', 'Inconceivable!');
    };
    // Timeout
    NgxToastrComponent.prototype.timeout = function () {
        this.toastrService.error('I do not think that word means what you think it means.', 'Timeout!', { timeOut: 2000 });
    };
    // Dismiss toastr on Click
    NgxToastrComponent.prototype.dismissToastOnClick = function () {
        this.toastrService.info('We do have the Kapua suite available.', 'Turtle Bay Resort', { tapToDismiss: true });
    };
    // Show close button
    NgxToastrComponent.prototype.showCloseButton = function () {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { closeButton: true });
    };
    // Show Progressbar
    NgxToastrComponent.prototype.showProgressbar = function () {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { progressBar: true });
    };
    // Title Class
    NgxToastrComponent.prototype.titleClass = function () {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { titleClass: 'h3' });
    };
    // Message Class
    NgxToastrComponent.prototype.messageClass = function () {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { messageClass: 'text-uppercase' });
    };
    // Enable HTML
    NgxToastrComponent.prototype.enableHtml = function () {
        this.toastrService.show('<p class="mb-0 mt-1">We do have the Kapua suite available.</p>', 'Custom', {
            enableHtml: true
        });
    };
    // custom position
    NgxToastrComponent.prototype.position = function () {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', {
            positionClass: 'toast-top-center'
        });
    };
    NgxToastrComponent = __decorate([
        Component({
            selector: 'app-ngx-toastr',
            templateUrl: './ngx-toastr.component.html',
            styleUrls: ['./ngx-toastr.component.scss']
        }),
        __metadata("design:paramtypes", [ToastrService])
    ], NgxToastrComponent);
    return NgxToastrComponent;
}());
export { NgxToastrComponent };
//# sourceMappingURL=ngx-toastr.component.js.map