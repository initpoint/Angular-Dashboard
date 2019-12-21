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
import { ButtonsStrategy, GalleryService, Image, KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DELETE, KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_BTN_FULL_SCREEN, PlainGalleryStrategy, AdvancedLayout, ButtonType } from '@ks89/angular-modal-gallery';
var ImageGalleryComponent = /** @class */ (function () {
    function ImageGalleryComponent(galleryService) {
        this.galleryService = galleryService;
        this.imagesRect = [
            new Image(0, {
                img: 'assets/images/big-lightgallry/013.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new Image(1, {
                img: 'assets/images/big-lightgallry/014.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new Image(2, {
                img: 'assets/images/big-lightgallry/015.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new Image(3, {
                img: 'assets/images/big-lightgallry/016.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new Image(4, {
                img: 'assets/images/big-lightgallry/012.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new Image(5, {
                img: 'assets/images/big-lightgallry/01.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new Image(6, {
                img: 'assets/images/big-lightgallry/02.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new Image(7, {
                img: 'assets/images/big-lightgallry/03.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new Image(8, {
                img: 'assets/images/big-lightgallry/04.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new Image(9, {
                img: 'assets/images/big-lightgallry/05.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new Image(10, {
                img: 'assets/images/big-lightgallry/06.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new Image(11, {
                img: 'assets/images/big-lightgallry/07.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
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
        this.customPlainGalleryRowDescConfig = {
            strategy: PlainGalleryStrategy.CUSTOM,
            layout: new AdvancedLayout(-1, true)
        };
    }
    ImageGalleryComponent.prototype.openImageModalRowDescription = function (image) {
        var index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
    };
    ImageGalleryComponent.prototype.getCurrentIndexCustomLayout = function (image, images) {
        return image ? images.indexOf(image) : -1;
    };
    ;
    ImageGalleryComponent.prototype.onButtonBeforeHook = function (event) {
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === ButtonType.DELETE) {
            this.imagesRect = this.imagesRect.filter(function (val) { return event.image && val.id !== event.image.id; });
        }
    };
    ImageGalleryComponent.prototype.onButtonAfterHook = function (event) {
        if (!event || !event.button) {
            return;
        }
    };
    ImageGalleryComponent.prototype.onCustomButtonBeforeHook = function (event, galleryId) {
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
    ImageGalleryComponent.prototype.onCustomButtonAfterHook = function (event, galleryId) {
        if (!event || !event.button) {
            return;
        }
    };
    ImageGalleryComponent.prototype.addRandomImage = function () {
        var imageToCopy = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
        var newImage = new Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.imagesRect = this.imagesRect.concat([newImage]);
    };
    ImageGalleryComponent.prototype.ngOnInit = function () { };
    ImageGalleryComponent = __decorate([
        Component({
            selector: 'app-image-gallery',
            templateUrl: './image-gallery.component.html',
            styleUrls: ['./image-gallery.component.scss']
        }),
        __metadata("design:paramtypes", [GalleryService])
    ], ImageGalleryComponent);
    return ImageGalleryComponent;
}());
export { ImageGalleryComponent };
//# sourceMappingURL=image-gallery.component.js.map