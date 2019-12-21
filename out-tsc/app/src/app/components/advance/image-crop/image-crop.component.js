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
import { ImageCropperComponent } from './image-cropper/component/image-cropper.component';
var ImageCropComponent = /** @class */ (function () {
    function ImageCropComponent() {
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.showCropper = false;
    }
    ImageCropComponent.prototype.ngOnInit = function () { };
    // Display dummy cropped image 
    ImageCropComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
    };
    //Display cropper on selected image
    ImageCropComponent.prototype.imageLoaded = function () {
        this.showCropper = true;
    };
    //Select a file
    ImageCropComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    //Rotate an image to left
    ImageCropComponent.prototype.rotateLeft = function () {
        this.imageCropper.rotateLeft();
    };
    //Rotate an image to right
    ImageCropComponent.prototype.rotateRight = function () {
        this.imageCropper.rotateRight();
    };
    //Flip an Image Horizontal
    ImageCropComponent.prototype.flipHorizontal = function () {
        this.imageCropper.flipHorizontal();
    };
    //Flip an Image Vertical
    ImageCropComponent.prototype.flipVertical = function () {
        this.imageCropper.flipVertical();
    };
    ImageCropComponent.prototype.cropperReady = function () { };
    ImageCropComponent.prototype.loadImageFailed = function () { };
    __decorate([
        ViewChild('ImageCropperComponent', { static: true }),
        __metadata("design:type", ImageCropperComponent)
    ], ImageCropComponent.prototype, "imageCropper", void 0);
    ImageCropComponent = __decorate([
        Component({
            selector: 'app-image-crop',
            templateUrl: './image-crop.component.html',
            styleUrls: ['./image-crop.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ImageCropComponent);
    return ImageCropComponent;
}());
export { ImageCropComponent };
//# sourceMappingURL=image-crop.component.js.map