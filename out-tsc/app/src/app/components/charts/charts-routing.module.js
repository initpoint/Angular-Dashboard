var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleComponent } from './google/google.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component';
import { NgxChartComponent } from './ngx-chart/ngx-chart.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'google',
                component: GoogleComponent,
                data: {
                    title: "Google",
                    breadcrumb: "Google"
                }
            },
            {
                path: 'chartjs',
                component: ChartjsComponent,
                data: {
                    title: "ChartJS",
                    breadcrumb: "ChartJS"
                }
            },
            {
                path: 'chartist',
                component: ChartistComponent,
                data: {
                    title: "Chartist",
                    breadcrumb: "Chartist"
                }
            },
            {
                path: 'ngx-chart',
                component: NgxChartComponent,
                data: {
                    title: "Ngx-Chart",
                    breadcrumb: "Ngx-Chart"
                }
            }
        ]
    }
];
var ChartsRoutingModule = /** @class */ (function () {
    function ChartsRoutingModule() {
    }
    ChartsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ChartsRoutingModule);
    return ChartsRoutingModule;
}());
export { ChartsRoutingModule };
//# sourceMappingURL=charts-routing.module.js.map