var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { ChartComponent } from './chart/chart.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'general',
                component: GeneralComponent,
                data: {
                    title: "General",
                    breadcrumb: "General"
                }
            },
            {
                path: 'chart',
                component: ChartComponent,
                data: {
                    title: "Chart",
                    breadcrumb: "Chart"
                }
            },
        ]
    }
];
var WidgetsRoutingModule = /** @class */ (function () {
    function WidgetsRoutingModule() {
    }
    WidgetsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], WidgetsRoutingModule);
    return WidgetsRoutingModule;
}());
export { WidgetsRoutingModule };
//# sourceMappingURL=widgets-routing.module.js.map