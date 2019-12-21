var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import * as chartData from '../../../shared/data/chart/chartist';
var ChartistComponent = /** @class */ (function () {
    function ChartistComponent() {
        // Charts
        this.chart1 = chartData.chart1;
        this.chart2 = chartData.chart2;
        this.chart3 = chartData.chart3;
        this.chart4 = chartData.chart4;
        this.chart5 = chartData.chart5;
        this.chart6 = chartData.chart6;
        this.chart7 = chartData.chart7;
        this.chart8 = chartData.chart8;
        this.chart9 = chartData.chart9;
        this.chart10 = chartData.chart10;
        this.chart11 = chartData.chart11;
        this.chart12 = chartData.chart12;
    }
    ChartistComponent = __decorate([
        Component({
            selector: 'app-chartist',
            templateUrl: './chartist.component.html',
            styleUrls: ['./chartist.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ChartistComponent);
    return ChartistComponent;
}());
export { ChartistComponent };
//# sourceMappingURL=chartist.component.js.map