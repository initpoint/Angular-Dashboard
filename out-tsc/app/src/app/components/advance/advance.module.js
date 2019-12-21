var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvanceRoutingModule } from './advance-routing.module';
import { Ng5SliderModule } from 'ng5-slider';
import { ImageCropperModule } from './image-crop/image-cropper/image-cropper.module';
import { DragulaModule } from 'ng2-dragula';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HintModule } from 'angular-custom-tour';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { SharedModule } from "../../shared/shared.module";
import { ScrollableComponent } from './scrollable/scrollable.component';
import { NgxToastrComponent } from './ngx-toastr/ngx-toastr.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { UploadComponent } from './upload/upload.component';
import { StickyComponent } from './sticky/sticky.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { TourComponent } from './tour/tour.component';
import { NgxDropzoneComponent } from './ngx-dropzone/ngx-dropzone.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
var DEFAULT_DROPZONE_CONFIG = {
    maxFilesize: 50,
    url: 'https://httpbin.org/post',
};
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: false,
    wheelPropagation: false
};
var AdvanceModule = /** @class */ (function () {
    function AdvanceModule() {
    }
    AdvanceModule = __decorate([
        NgModule({
            declarations: [ScrollableComponent, NgxToastrComponent, SweetAlertComponent, RangeSliderComponent, DragDropComponent, UploadComponent, StickyComponent, ImageCropComponent, OwlCarouselComponent, TourComponent, NgxDropzoneComponent],
            imports: [
                CommonModule,
                AdvanceRoutingModule,
                Ng5SliderModule,
                FormsModule,
                ReactiveFormsModule,
                ImageCropperModule,
                DragulaModule.forRoot(),
                FileUploadModule,
                CarouselModule,
                HintModule.forRoot(),
                DropzoneModule,
                PerfectScrollbarModule,
                SharedModule
            ],
            providers: [
                { provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG },
                { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
            ],
        })
    ], AdvanceModule);
    return AdvanceModule;
}());
export { AdvanceModule };
//# sourceMappingURL=advance.module.js.map