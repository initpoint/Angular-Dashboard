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
import { doughnutData, vertical_stack_chart, multiData, } from '../../../shared/data/dashboard/project';
import * as graphoptions from '../../../shared/data/dashboard/project';
var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
        this.doughnutData = doughnutData;
        this.vertical_stack_chart = vertical_stack_chart;
        // doughnut
        this.view = graphoptions.view;
        this.doughnutChartColorScheme = graphoptions.doughnutChartcolorScheme;
        this.doughnutChartShowLabels = graphoptions.doughnutChartShowLabels;
        this.doughnutChartGradient = graphoptions.doughnutChartGradient;
        //vertical_stack_chart
        this.verticalStackChartColorScheme = graphoptions.colorScheme;
        this.verticalStackChartshowXAxis = graphoptions.showXAxis;
        this.verticalStackChartshowYAxis = graphoptions.showYAxis;
        this.verticalStackChartgradient = graphoptions.gradient;
        this.verticalStackChartshowLegend = graphoptions.showLegend;
        this.verticalStackChartshowXAxisLabel = graphoptions.showXAxisLabel;
        this.verticalStackChartshowYAxisLabel = graphoptions.showYAxisLabel;
        this.chart1 = graphoptions.chart1;
        this.chart2 = graphoptions.chart2;
        this.chart3 = graphoptions.chart3;
        this.chart4 = graphoptions.chart4;
        this.chart5 = graphoptions.chart5;
        this.chart6 = graphoptions.chart6;
        this.pieChart1 = graphoptions.pieChart1;
        this.barChartSingle1 = graphoptions.barChartSingle1;
        this.barChartSingle2 = graphoptions.barChartSingle2;
        this.barChartSingle3 = graphoptions.barChartSingle3;
        Object.assign(this, { doughnutData: doughnutData, vertical_stack_chart: vertical_stack_chart, multiData: multiData, });
    }
    ProjectComponent.prototype.ngOnInit = function () { };
    ProjectComponent = __decorate([
        Component({
            selector: 'app-project',
            templateUrl: './project.component.html',
            styleUrls: ['./project.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());
export { ProjectComponent };
//# sourceMappingURL=project.component.js.map