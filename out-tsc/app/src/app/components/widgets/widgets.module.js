var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { GeneralComponent } from './general/general.component';
import { ChartComponent } from './chart/chart.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountToModule } from 'angular-count-to';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from "../../shared/shared.module";
var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        NgModule({
            declarations: [GeneralComponent, ChartComponent],
            imports: [
                CommonModule,
                WidgetsRoutingModule,
                NgDatepickerModule,
                NgbModule,
                CountToModule,
                CarouselModule,
                ChartistModule,
                ChartsModule,
                NgxChartsModule,
                SharedModule
            ]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());
export { WidgetsModule };
//# sourceMappingURL=widgets.module.js.map