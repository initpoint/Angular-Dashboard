var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'details',
                component: BlogDetailComponent,
                data: {
                    title: "Blog-Detail",
                    breadcrumb: "Blog-Detail"
                }
            },
            {
                path: 'single',
                component: BlogSingleComponent,
                data: {
                    title: "Blog-Single",
                    breadcrumb: "Blog-Single"
                }
            }
        ]
    }
];
var BlogRoutingModule = /** @class */ (function () {
    function BlogRoutingModule() {
    }
    BlogRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], BlogRoutingModule);
    return BlogRoutingModule;
}());
export { BlogRoutingModule };
//# sourceMappingURL=blog-routing.module.js.map