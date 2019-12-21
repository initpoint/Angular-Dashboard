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
import * as chartData from './../../../shared/data/dashboard/default';
var Knob = require('knob'); // browserify require
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
        // Chart Data  
        this.chart1 = chartData.chartBox1;
        this.chart2 = chartData.chartBox2;
        this.chart3 = chartData.chartBox3;
        this.chart4 = chartData.chartProduction;
        this.chart5 = chartData.chartCalculation;
    }
    DefaultComponent.prototype.ngOnInit = function () {
        var profit = Knob({
            value: 35,
            angleOffset: 90,
            className: "review",
            thickness: 0.2,
            width: 270,
            height: 270,
            fgColor: primary,
            bgColor: '#f6f7fb',
            lineCap: 'round'
        });
        document.getElementById('profit').append(profit);
    };
    DefaultComponent = __decorate([
        Component({
            selector: 'app-default',
            templateUrl: './default.component.html',
            styleUrls: ['./default.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());
export { DefaultComponent };
//# sourceMappingURL=default.component.js.map