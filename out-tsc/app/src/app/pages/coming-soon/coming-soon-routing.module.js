var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { PageWithVideoComponent } from './page-with-video/page-with-video.component';
import { PageWithImageComponent } from './page-with-image/page-with-image.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'page',
                component: SimpleComponent
            },
            {
                path: 'page/image',
                component: PageWithImageComponent
            },
            {
                path: 'page/video',
                component: PageWithVideoComponent
            }
        ]
    }
];
var ComingSoonRoutingModule = /** @class */ (function () {
    function ComingSoonRoutingModule() {
    }
    ComingSoonRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ComingSoonRoutingModule);
    return ComingSoonRoutingModule;
}());
export { ComingSoonRoutingModule };
//# sourceMappingURL=coming-soon-routing.module.js.map