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
import * as chartData from './../../../shared/data/dashboard/university';
var Knob = require('knob'); // browserify require
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
var UniversityComponent = /** @class */ (function () {
    function UniversityComponent() {
        this.chart1 = chartData.chart1;
        this.chart2 = chartData.chart2;
        this.chart3 = chartData.chart3;
        this.chart4 = chartData.chart4;
        this.chart5 = chartData.chart5;
        this.admissionChartType = chartData.admissionChartType;
        this.admissionChartLabels = chartData.admissionChartLabels;
        this.admissionChartData = chartData.admissionChartData;
        this.admissionChartOptions = chartData.admissionChartOptions;
        this.admissionChartColors = chartData.admissionChartColors;
        this.admissionChartLegend = chartData.admissionChartLegend;
    }
    UniversityComponent.prototype.ngOnInit = function () {
        var ranker = Knob({
            value: 25,
            angleOffset: -125,
            angleArc: 250,
            className: "review",
            lineCap: "round",
            thickness: 0.2,
            width: 295,
            height: 295,
            fgColor: primary
        });
        document.getElementById('ranker').append(ranker);
        var student = Knob({
            value: 85,
            angleOffset: 80,
            angleArc: 360,
            className: "review",
            lineCap: "round",
            thickness: 0.1,
            width: 180,
            height: 180,
            fgColor: '#fff',
            bgColor: primary
        });
        document.getElementById('student').append(student);
    };
    UniversityComponent = __decorate([
        Component({
            selector: 'app-university',
            templateUrl: './university.component.html',
            styleUrls: ['./university.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], UniversityComponent);
    return UniversityComponent;
}());
export { UniversityComponent };
//# sourceMappingURL=university.component.js.map