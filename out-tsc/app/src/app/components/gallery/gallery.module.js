var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryDescComponent } from './gallery-desc/gallery-desc.component';
import { MesonryComponent } from './mesonry/mesonry.component';
import { HoverEffectComponent } from './hover-effect/hover-effect.component';
import { Angular2PhotoswipeModule } from 'angular2_photoswipe';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { CrystalGalleryModule } from 'ngx-crystal-gallery';
import { NgxMasonryModule } from 'ngx-masonry';
import 'hammerjs';
import 'mousetrap';
var GalleryDemoModule = /** @class */ (function () {
    function GalleryDemoModule() {
    }
    GalleryDemoModule = __decorate([
        NgModule({
            declarations: [GalleryGridComponent, GalleryDescComponent, MesonryComponent, HoverEffectComponent],
            imports: [
                CommonModule,
                GalleryRoutingModule,
                Angular2PhotoswipeModule,
                GalleryModule.forRoot(),
                MasonryGalleryModule,
                CrystalGalleryModule,
                NgxMasonryModule
            ]
        })
    ], GalleryDemoModule);
    return GalleryDemoModule;
}());
export { GalleryDemoModule };
//# sourceMappingURL=gallery.module.js.map