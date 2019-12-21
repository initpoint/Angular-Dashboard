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
import * as chartData from '../../../shared/data/widgets-chart/chart-widget';
import { monthlydoughnutData, dailydoughnutData } from '../../../shared/data/widgets-chart/chart-widget';
var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.isOpened = true;
        this.monthlydoughnutData = monthlydoughnutData;
        this.dailydoughnutData = dailydoughnutData;
        this.chart1 = chartData.chart1;
        this.chart2 = chartData.chart2;
        this.chart3 = chartData.chart3;
        this.WidgetBarChart1 = chartData.WidgetBarChart1;
        this.WidgetBarChart2 = chartData.WidgetBarChart2;
        this.liveProductChart = chartData.liveProductChart;
        this.turnOverChart = chartData.turnOverChart;
        this.monthlyChart = chartData.monthlyChart;
        this.usesChart = chartData.usesChart;
        this.financeWidget = chartData.financeWidget;
        this.orderStatusWidget = chartData.orderStatusWidget;
        this.skillWidget = chartData.skillWidget;
        // Doughnut Chart (Monthlt visitor chart)
        this.monthlydoughnutChartColorScheme = chartData.monthlydoughnutChartcolorScheme;
        this.monthlydoughnutChartShowLabels = chartData.monthlydoughnutChartShowLabels;
        this.monthlydoughnutChartGradient = chartData.monthlydoughnutChartGradient;
        // Doughnut Chart (Daily visitor chart)
        this.dailydoughnutChartColorScheme = chartData.dailydoughnutChartcolorScheme;
        this.dailydoughnutChartShowLabels = chartData.dailydoughnutChartShowLabels;
        this.dailydoughnutChartGradient = chartData.dailydoughnutChartGradient;
        Object.assign(this, { monthlydoughnutData: monthlydoughnutData, dailydoughnutData: dailydoughnutData });
    }
    ChartComponent.prototype.ngOnInit = function () { };
    ChartComponent = __decorate([
        Component({
            selector: 'app-chart',
            templateUrl: './chart.component.html',
            styleUrls: ['./chart.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());
export { ChartComponent };
//# sourceMappingURL=chart.component.js.map