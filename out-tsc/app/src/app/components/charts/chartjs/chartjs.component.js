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
import * as chartData from '../../../shared/data/chart/chartjs';
var ChartjsComponent = /** @class */ (function () {
    function ChartjsComponent() {
        // barChart
        this.barChartOptions = chartData.barChartOptions;
        this.barChartLabels = chartData.barChartLabels;
        this.barChartType = chartData.barChartType;
        this.barChartLegend = chartData.barChartLegend;
        this.barChartData = chartData.barChartData;
        this.barChartColors = chartData.barChartColors;
        // lineGraph Chart
        this.lineGraphOptions = chartData.lineGraphOptions;
        this.lineGraphLabels = chartData.lineGraphLabels;
        this.lineGraphType = chartData.lineGraphType;
        this.lineGraphLegend = chartData.lineGraphLegend;
        this.lineGraphData = chartData.lineGraphData;
        this.lineGraphColors = chartData.lineGraphColors;
        // radarGraph Chart
        this.radarGraphOptions = chartData.radarGraphOptions;
        this.radarGraphLabels = chartData.radarGraphLabels;
        this.radarGraphType = chartData.radarGraphType;
        this.radarGraphLegend = chartData.radarGraphLegend;
        this.radarGraphData = chartData.radarGraphData;
        this.radarGraphColors = chartData.radarGraphColors;
        // lineChart
        this.lineChartData = chartData.lineChartData;
        this.lineChartLabels = chartData.lineChartLabels;
        this.lineChartOptions = chartData.lineChartOptions;
        this.lineChartColors = chartData.lineChartColors;
        this.lineChartLegend = chartData.lineChartLegend;
        this.lineChartType = chartData.lineChartType;
        // Doughnut
        this.doughnutChartLabels = chartData.doughnutChartLabels;
        this.doughnutChartData = chartData.doughnutChartData;
        this.doughnutChartType = chartData.doughnutChartType;
        this.doughnutChartColors = chartData.doughnutChartColors;
        this.doughnutChartOptions = chartData.doughnutChartOptions;
        // PolarArea
        this.polarAreaChartLabels = chartData.polarAreaChartLabels;
        this.polarAreaChartData = chartData.polarAreaChartData;
        this.polarAreaLegend = chartData.polarAreaLegend;
        this.ploarChartColors = chartData.ploarChartColors;
        this.polarAreaChartType = chartData.polarAreaChartType;
        this.polarChartOptions = chartData.polarChartOptions;
    }
    // events
    ChartjsComponent.prototype.chartClicked = function (e) { };
    ChartjsComponent.prototype.chartHovered = function (e) { };
    ChartjsComponent = __decorate([
        Component({
            selector: 'app-chartjs',
            templateUrl: './chartjs.component.html',
            styleUrls: ['./chartjs.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ChartjsComponent);
    return ChartjsComponent;
}());
export { ChartjsComponent };
//# sourceMappingURL=chartjs.component.js.map