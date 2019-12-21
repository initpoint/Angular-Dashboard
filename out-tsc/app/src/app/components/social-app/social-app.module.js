var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "../../shared/shared.module";
import { SocialAppRoutingModule } from './social-app-routing.module';
import { SocialAppComponent } from './social-app.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
var SocialAppModule = /** @class */ (function () {
    function SocialAppModule() {
    }
    SocialAppModule = __decorate([
        NgModule({
            declarations: [SocialAppComponent, ImageGalleryComponent],
            imports: [
                CommonModule,
                SocialAppRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                NgbModule,
                SharedModule,
                GalleryModule.forRoot()
            ]
        })
    ], SocialAppModule);
    return SocialAppModule;
}());
export { SocialAppModule };
//# sourceMappingURL=social-app.module.js.map