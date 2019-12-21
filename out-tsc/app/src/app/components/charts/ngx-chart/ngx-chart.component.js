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
import { barChartSingle, pieChart, multiData, single } from '../../../shared/data/chart/ngx-chart';
import * as graphoptions from '../../../shared/data/chart/config';
var NgxChartComponent = /** @class */ (function () {
    function NgxChartComponent() {
        this.barChartsingle = barChartSingle;
        this.pieChart = pieChart;
        this.multiData = multiData;
        this.single = single;
        // Bar-chart options
        this.barChartShowYAxis = graphoptions.barChartShowYAxis;
        this.barChartShowXAxis = graphoptions.barChartShowXAxis;
        this.barChartGradient = graphoptions.barChartGradient;
        this.barChartShowLegend = graphoptions.barChartShowLegend;
        this.barChartShowXAxisLabel = graphoptions.barChartShowXAxisLabel;
        this.barChartXAxisLabel = graphoptions.barChartXAxisLabel;
        this.barChartShowYAxisLabel = graphoptions.barChartShowYAxisLabel;
        this.barChartYAxisLabel = graphoptions.barChartYAxisLabel;
        this.barChartColorScheme = graphoptions.barChartColorScheme;
        this.barChartshowGridLines = graphoptions.barChartshowGridLines;
        // pie-chart options
        this.pieChartColorScheme = graphoptions.pieChartcolorScheme;
        this.pieChartShowLabels = graphoptions.pieChartShowLabels;
        this.pieChartGradient = graphoptions.pieChartGradient;
        this.chartOptions = graphoptions.chartOptions;
        //Area-chart options
        this.areaChartshowXAxis = graphoptions.areaChartshowXAxis;
        this.areaChartshowYAxis = graphoptions.areaChartshowYAxis;
        this.areaChartgradient = graphoptions.areaChartgradient;
        this.areaChartshowXAxisLabel = graphoptions.areaChartshowXAxisLabel;
        this.areaChartxAxisLabel = graphoptions.areaChartxAxisLabel;
        this.areaChartshowYAxisLabel = graphoptions.areaChartshowYAxisLabel;
        this.areaChartcolorScheme = graphoptions.areaChartcolorScheme;
        this.lineChartcurve = graphoptions.lineChartcurve;
        this.lineChartcurve1 = graphoptions.lineChartcurve1;
        Object.assign(this, { multiData: multiData, barChartSingle: barChartSingle, pieChart: pieChart, single: single });
    }
    NgxChartComponent.prototype.ngOnInit = function () { };
    NgxChartComponent.prototype.onSelect = function (e) { };
    NgxChartComponent = __decorate([
        Component({
            selector: 'app-ngx-chart',
            templateUrl: './ngx-chart.component.html',
            styleUrls: ['./ngx-chart.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], NgxChartComponent);
    return NgxChartComponent;
}());
export { NgxChartComponent };
//# sourceMappingURL=ngx-chart.component.js.map