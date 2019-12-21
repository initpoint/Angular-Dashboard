var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontAwesomeIconComponent } from './font-awesome-icon/font-awesome-icon.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { ThemifyIconComponent } from './themify-icon/themify-icon.component';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'flag',
                component: FlagIconComponent,
                data: {
                    title: "Flag",
                    breadcrumb: "Flag"
                }
            },
            {
                path: 'fontawesome',
                component: FontAwesomeIconComponent,
                data: {
                    title: "FontAwesome",
                    breadcrumb: "FontAwesome"
                }
            },
            {
                path: 'ico',
                component: IcoIconComponent,
                data: {
                    title: "Ico",
                    breadcrumb: "Ico"
                }
            },
            {
                path: 'themify',
                component: ThemifyIconComponent,
                data: {
                    title: "Themify",
                    breadcrumb: "Themify"
                }
            },
            {
                path: 'feather',
                component: FeatherIconComponent,
                data: {
                    title: "Feather",
                    breadcrumb: "Feather"
                }
            },
            {
                path: 'whether',
                component: WeatherIconComponent,
                data: {
                    title: "Whether",
                    breadcrumb: "Whether"
                }
            }
        ]
    }
];
var IconsRoutingModule = /** @class */ (function () {
    function IconsRoutingModule() {
    }
    IconsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], IconsRoutingModule);
    return IconsRoutingModule;
}());
export { IconsRoutingModule };
//# sourceMappingURL=icons-routing.module.js.map