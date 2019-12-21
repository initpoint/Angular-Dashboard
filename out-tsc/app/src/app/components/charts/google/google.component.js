var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import * as chartData from '../../../shared/data/chart/google-chart';
var GoogleComponent = /** @class */ (function () {
    function GoogleComponent() {
        // Pie Chart
        this.pieChart1 = chartData.pieChart1;
        this.pieChart2 = chartData.pieChart2;
        this.pieChart3 = chartData.pieChart3;
        this.pieChart4 = chartData.pieChart4;
        // Area Chart
        this.areaChart1 = chartData.areaChart1;
        this.areaChart2 = chartData.areaChart2;
        // Column Chart
        this.columnChart1 = chartData.columnChart1;
        this.columnChart2 = chartData.columnChart2;
        // Bar Chart
        this.barChart1 = chartData.barChart1;
        this.barChart2 = chartData.barChart2;
        // Line Chart
        this.lineChart = chartData.lineChart;
        // Combo Chart
        this.comboChart = chartData.comboChart;
        this.geoChartData = {
            chartType: 'GeoChart',
            dataTable: [
                ['City', 'Population'],
                ['Melbourne', 456789]
            ],
            options: {
                'region': 'IT',
                'displayMode': 'markers',
                colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#FF5370"]
            }
        };
    }
    GoogleComponent = __decorate([
        Component({
            selector: 'app-google',
            templateUrl: './google.component.html',
            styleUrls: ['./google.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], GoogleComponent);
    return GoogleComponent;
}());
export { GoogleComponent };
//# sourceMappingURL=google.component.js.map