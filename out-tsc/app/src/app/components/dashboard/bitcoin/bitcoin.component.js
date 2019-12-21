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
import * as chartData from './../../../shared/data/dashboard/crypto';
var BitcoinComponent = /** @class */ (function () {
    function BitcoinComponent() {
        this.isBTC = false;
        this.isETH = false;
        this.isDASH = false;
        this.chart1 = chartData.chart1;
        this.chart2 = chartData.chart2;
        this.chart3 = chartData.chart3;
        this.chart4 = chartData.chart4;
        this.saleChartType = chartData.saleChartType;
        this.saleChartLable = chartData.saleChartLabels;
        this.saleChartData = chartData.saleChartData;
        this.saleChartOption = chartData.saleChartOptions;
        this.saleChartColor = chartData.saleChartColors;
        this.saleChartLegend = chartData.saleChartLegend;
        //Invest Chart data and options
        this.dailyChartLabels = chartData.dailyChartLabels;
        this.dailyChartData = chartData.dailyChartData;
        this.dailyChartColors = chartData.dailyChartColors;
        this.dailyChartType = chartData.dailyChartType;
        this.dailyChartLegend = chartData.dailyChartLegend;
        this.dailyChartOptions = chartData.dailyChartOptions;
    }
    BitcoinComponent.prototype.ngOnInit = function () { };
    BitcoinComponent = __decorate([
        Component({
            selector: 'app-bitcoin',
            templateUrl: './bitcoin.component.html',
            styleUrls: ['./bitcoin.component.scss'],
            encapsulation: ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [])
    ], BitcoinComponent);
    return BitcoinComponent;
}());
export { BitcoinComponent };
//# sourceMappingURL=bitcoin.component.js.map