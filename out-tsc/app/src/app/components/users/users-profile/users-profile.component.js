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
import { ButtonsStrategy, GalleryService, Image, KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_BTN_FULL_SCREEN, ButtonType, PlainGalleryStrategy, AdvancedLayout, } from '@ks89/angular-modal-gallery';
var UsersProfileComponent = /** @class */ (function () {
    function UsersProfileComponent(galleryService) {
        this.galleryService = galleryService;
        this.images = [
            new Image(0, {
                img: 'assets/images/other-images/profile-style-img3.png',
                extUrl: 'http://www.google.com'
            })
        ];
        this.images1 = [
            new Image(0, {
                img: 'assets/images/blog/img.png',
                extUrl: 'http://www.google.com'
            })
        ];
        this.buttonsConfigDefault = {
            visible: true,
            strategy: ButtonsStrategy.DEFAULT
        };
        this.buttonsConfigSimple = {
            visible: true,
            strategy: ButtonsStrategy.SIMPLE
        };
        this.buttonsConfigAdvanced = {
            visible: true,
            strategy: ButtonsStrategy.ADVANCED
        };
        this.buttonsConfigFull = {
            visible: true,
            strategy: ButtonsStrategy.FULL
        };
        this.buttonsConfigCustom = {
            visible: true,
            strategy: ButtonsStrategy.CUSTOM,
            buttons: [
                KS_DEFAULT_BTN_FULL_SCREEN,
                KS_DEFAULT_BTN_EXTURL,
                KS_DEFAULT_BTN_DOWNLOAD,
                KS_DEFAULT_BTN_CLOSE
            ]
        };
        this.customPlainGalleryRowDescConfig = {
            strategy: PlainGalleryStrategy.CUSTOM,
            layout: new AdvancedLayout(-1, true)
        };
    }
    UsersProfileComponent.prototype.openImageModalRowDescription = function (image) {
        var index = this.getCurrentIndexCustomLayout(image, this.images);
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
    };
    UsersProfileComponent.prototype.getCurrentIndexCustomLayout = function (image, images) {
        return image ? images.indexOf(image) : -1;
    };
    ;
    UsersProfileComponent.prototype.onButtonAfterHook = function (event) {
        if (!event || !event.button) {
            return;
        }
    };
    UsersProfileComponent.prototype.onCustomButtonBeforeHook = function (event, galleryId) {
        var _this = this;
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === ButtonType.CUSTOM) {
            this.addRandomImage();
            setTimeout(function () {
                _this.galleryService.openGallery(galleryId, _this.images.length - 1);
            }, 0);
        }
    };
    UsersProfileComponent.prototype.onCustomButtonAfterHook = function (event, galleryId) {
        if (!event || !event.button) {
            return;
        }
    };
    UsersProfileComponent.prototype.addRandomImage = function () {
        var imageToCopy = this.images[Math.floor(Math.random() * this.images.length)];
        var newImage = new Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.images = this.images.concat([newImage]);
    };
    //FileUpload
    UsersProfileComponent.prototype.readUrl = function (event) {
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
    UsersProfileComponent.prototype.ngOnInit = function () { };
    UsersProfileComponent = __decorate([
        Component({
            selector: 'app-users-profile',
            templateUrl: './users-profile.component.html',
            styleUrls: ['./users-profile.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [GalleryService])
    ], UsersProfileComponent);
    return UsersProfileComponent;
}());
export { UsersProfileComponent };
//# sourceMappingURL=users-profile.component.js.map