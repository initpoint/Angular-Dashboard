var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { PageWithImageComponent } from './page-with-image/page-with-image.component';
import { PageWithVideoComponent } from './page-with-video/page-with-video.component';
var ComingSoonModule = /** @class */ (function () {
    function ComingSoonModule() {
    }
    ComingSoonModule = __decorate([
        NgModule({
            declarations: [SimpleComponent, PageWithImageComponent, PageWithVideoComponent],
            imports: [
                CommonModule,
                ComingSoonRoutingModule
            ]
        })
    ], ComingSoonModule);
    return ComingSoonModule;
}());
export { ComingSoonModule };
//# sourceMappingURL=coming-soon.module.js.map