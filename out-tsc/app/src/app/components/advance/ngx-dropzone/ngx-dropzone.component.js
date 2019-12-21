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
var NgxDropzoneComponent = /** @class */ (function () {
    function NgxDropzoneComponent() {
        this.config1 = {
            clickable: true,
            maxFiles: 1,
            autoReset: null,
            errorReset: null,
            cancelReset: null
        };
        this.config2 = {
            clickable: true,
            maxFiles: 5,
            autoReset: null,
            errorReset: null,
            cancelReset: null
        };
        this.config3 = {
            clickable: true,
            maxFiles: 5,
            autoReset: null,
            errorReset: null,
            cancelReset: null,
            acceptedFiles: '.pdf'
        };
    }
    NgxDropzoneComponent.prototype.onUploadInit = function (args) { };
    NgxDropzoneComponent.prototype.onUploadError = function (args) { };
    NgxDropzoneComponent.prototype.onUploadSuccess = function (args) { };
    NgxDropzoneComponent.prototype.ngOnInit = function () {
    };
    NgxDropzoneComponent = __decorate([
        Component({
            selector: 'app-ngx-dropzone',
            templateUrl: './ngx-dropzone.component.html',
            styleUrls: ['./ngx-dropzone.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], NgxDropzoneComponent);
    return NgxDropzoneComponent;
}());
export { NgxDropzoneComponent };
//# sourceMappingURL=ngx-dropzone.component.js.map