var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';
import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
var SearchResultModule = /** @class */ (function () {
    function SearchResultModule() {
    }
    SearchResultModule = __decorate([
        NgModule({
            declarations: [SearchResultComponent, ImageGalleryComponent],
            imports: [
                CommonModule,
                SearchResultRoutingModule,
                NgbModule,
                GalleryModule.forRoot()
            ]
        })
    ], SearchResultModule);
    return SearchResultModule;
}());
export { SearchResultModule };
//# sourceMappingURL=search-result.module.js.map