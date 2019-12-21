var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MasonryGalleryComponent } from 'ngx-masonry-gallery';
import { Component, ViewChild } from '@angular/core';
var MesonryComponent = /** @class */ (function () {
    function MesonryComponent() {
        this.numberOfInitiallyShownImages = 8;
        this.numberOfImages = 23;
        this.multipleImagesCount = 3;
        this.usedImages = [];
        this.pool = [];
        this.urls = [
            'assets/images/masonry/1.jpg',
            'assets/images/masonry/2.jpg',
            'assets/images/masonry/3.jpg',
            'assets/images/masonry/4.jpg',
            'assets/images/masonry/5.jpg',
            'assets/images/masonry/6.jpg',
            'assets/images/masonry/7.jpg',
            'assets/images/masonry/8.jpg',
            'assets/images/masonry/9.jpg',
            'assets/images/masonry/10.jpg',
            'assets/images/masonry/11.jpg',
            'assets/images/masonry/12.jpg'
        ];
        // init initial images
        var images = [];
        for (var i = 1; i <= this.numberOfInitiallyShownImages; i++) {
            var image = this.pool[Math.floor(Math.random() * this.pool.length)];
            images.push(image);
            this.usedImages.push(image);
        }
        this.initialImages = images;
    }
    Object.defineProperty(MesonryComponent.prototype, "images", {
        get: function () {
            return this.urls.map(function (m) { return ({
                imageUrl: m
            }); });
        },
        enumerable: true,
        configurable: true
    });
    MesonryComponent.prototype.ngOnInit = function () { };
    __decorate([
        ViewChild('masonryGallery', { static: true }),
        __metadata("design:type", MasonryGalleryComponent)
    ], MesonryComponent.prototype, "masonryGallery", void 0);
    MesonryComponent = __decorate([
        Component({
            selector: 'app-mesonry',
            templateUrl: './mesonry.component.html',
            styleUrls: ['./mesonry.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], MesonryComponent);
    return MesonryComponent;
}());
export { MesonryComponent };
//# sourceMappingURL=mesonry.component.js.map