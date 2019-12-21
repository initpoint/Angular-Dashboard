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
import { ButtonsStrategy, AdvancedLayout, GalleryService, Image, KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DELETE, KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_BTN_FULL_SCREEN, ButtonType, PlainGalleryStrategy, } from '@ks89/angular-modal-gallery';
var HoverEffectComponent = /** @class */ (function () {
    function HoverEffectComponent(galleryService) {
        this.galleryService = galleryService;
        this.imageIndex = 1;
        this.galleryId = 1;
        this.isPlaying = true;
        this.imagesRect = [
            new Image(0, {
                img: 'assets/images/big-lightgallry/013.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 1'
            }, {
                img: 'assets/images/big-lightgallry/013.jpg',
            }),
            new Image(1, {
                img: 'assets/images/big-lightgallry/014.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 2'
            }, {
                img: 'assets/images/big-lightgallry/014.jpg',
            }),
            new Image(2, {
                img: 'assets/images/big-lightgallry/015.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 3'
            }, {
                img: 'assets/images/big-lightgallry/015.jpg',
            }),
            new Image(3, {
                img: 'assets/images/big-lightgallry/016.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 4'
            }, {
                img: 'assets/images/big-lightgallry/016.jpg',
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
                KS_DEFAULT_BTN_DELETE,
                KS_DEFAULT_BTN_EXTURL,
                KS_DEFAULT_BTN_DOWNLOAD,
                KS_DEFAULT_BTN_CLOSE
            ]
        };
        this.customPlainGalleryRowConfig = {
            strategy: PlainGalleryStrategy.CUSTOM,
            layout: new AdvancedLayout(-1, true)
        };
        this.customPlainGalleryRowDescConfig = {
            strategy: PlainGalleryStrategy.CUSTOM,
            layout: new AdvancedLayout(-1, true)
        };
        this.isShownAutoNavigate = false;
    }
    HoverEffectComponent.prototype.openImageModalRow = function (image) {
        var index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
        this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
    };
    HoverEffectComponent.prototype.openImageModalRowDescription = function (image) {
        var index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
    };
    HoverEffectComponent.prototype.getCurrentIndexCustomLayout = function (image, images) {
        return image ? images.indexOf(image) : -1;
    };
    ;
    HoverEffectComponent.prototype.onButtonBeforeHook = function (event) {
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === ButtonType.DELETE) {
            this.imagesRect = this.imagesRect.filter(function (val) { return event.image && val.id !== event.image.id; });
        }
    };
    HoverEffectComponent.prototype.onButtonAfterHook = function (event) {
        if (!event || !event.button) {
            return;
        }
    };
    HoverEffectComponent.prototype.onCustomButtonBeforeHook = function (event, galleryId) {
        var _this = this;
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === ButtonType.CUSTOM) {
            this.addRandomImage();
            setTimeout(function () {
                _this.galleryService.openGallery(galleryId, _this.imagesRect.length - 1);
            }, 0);
        }
    };
    HoverEffectComponent.prototype.onCustomButtonAfterHook = function (event, galleryId) {
        if (!event || !event.button) {
            return;
        }
    };
    HoverEffectComponent.prototype.addRandomImage = function () {
        var imageToCopy = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
        var newImage = new Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.imagesRect = this.imagesRect.concat([newImage]);
    };
    HoverEffectComponent.prototype.ngOnInit = function () { };
    HoverEffectComponent = __decorate([
        Component({
            selector: 'app-hover-effect',
            templateUrl: './hover-effect.component.html',
            styleUrls: ['./hover-effect.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [GalleryService])
    ], HoverEffectComponent);
    return HoverEffectComponent;
}());
export { HoverEffectComponent };
//# sourceMappingURL=hover-effect.component.js.map