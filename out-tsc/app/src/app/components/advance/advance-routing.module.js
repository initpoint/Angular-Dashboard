var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollableComponent } from './scrollable/scrollable.component';
import { NgxToastrComponent } from './ngx-toastr/ngx-toastr.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { UploadComponent } from './upload/upload.component';
import { StickyComponent } from './sticky/sticky.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { TourComponent } from './tour/tour.component';
import { NgxDropzoneComponent } from './ngx-dropzone/ngx-dropzone.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'scrollable',
                component: ScrollableComponent,
                data: {
                    title: "Scrollable",
                    breadcrumb: "Scrollable"
                }
            },
            {
                path: 'toastr',
                component: NgxToastrComponent,
                data: {
                    title: "Toastr",
                    breadcrumb: "Toastr"
                }
            },
            {
                path: 'sweetalert',
                component: SweetAlertComponent,
                data: {
                    title: "Sweetalert",
                    breadcrumb: "Sweetalert"
                }
            },
            {
                path: 'range-slider',
                component: RangeSliderComponent,
                data: {
                    title: "Range-Slider",
                    breadcrumb: "Range-Slider"
                }
            },
            {
                path: 'crop',
                component: ImageCropComponent,
                data: {
                    title: "Cropper",
                    breadcrumb: "Cropper"
                }
            },
            {
                path: 'drag-drop',
                component: DragDropComponent,
                data: {
                    title: "Drag-Drop",
                    breadcrumb: "Drag-Drop"
                }
            },
            {
                path: 'upload',
                component: UploadComponent,
                data: {
                    title: "Upload",
                    breadcrumb: "Upload"
                }
            },
            {
                path: 'sticky',
                component: StickyComponent,
                data: {
                    title: "Sticky",
                    breadcrumb: "Sticky"
                }
            },
            {
                path: 'owl-carousel',
                component: OwlCarouselComponent,
                data: {
                    title: "Owl-Carousel",
                    breadcrumb: "Owl-Carousel"
                }
            },
            {
                path: 'tour',
                component: TourComponent,
                data: {
                    title: "Tour",
                    breadcrumb: "Tour"
                }
            },
            {
                path: 'dropzone',
                component: NgxDropzoneComponent,
                data: {
                    title: "Dropzone",
                    breadcrumb: "Dropzone"
                }
            },
        ]
    }
];
var AdvanceRoutingModule = /** @class */ (function () {
    function AdvanceRoutingModule() {
    }
    AdvanceRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AdvanceRoutingModule);
    return AdvanceRoutingModule;
}());
export { AdvanceRoutingModule };
//# sourceMappingURL=advance-routing.module.js.map