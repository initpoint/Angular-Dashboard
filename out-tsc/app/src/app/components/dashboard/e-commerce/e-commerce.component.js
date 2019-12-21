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
import * as data from './../../../shared/data/dashboard/e-commerce';
var Knob = require('knob'); // browserify require
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
var ECommerceComponent = /** @class */ (function () {
    function ECommerceComponent() {
        this.slidesStore = [{
                id: 1,
                icon: 'dollar-sign',
                title: 'Total Earning',
                number: 72
            },
            {
                id: 2,
                icon: 'map-pin',
                title: 'Total Web Visitor',
                number: 65
            },
            {
                id: 3,
                icon: 'shopping-cart',
                title: 'Total Sale Product',
                number: 96
            },
            {
                id: 4,
                icon: 'trending-down',
                title: 'Company Loss',
                number: 89
            },
            {
                id: 5,
                icon: 'dollar-sign',
                title: 'Total Earning',
                number: 72
            }];
        this.customOptions = {
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            loop: true,
            dots: false,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                420: {
                    items: 2,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: false
                },
                932: {
                    items: 4,
                    nav: false
                }
            }
        };
        // Charts1
        this.saleChartType = data.saleChartType;
        this.saleChartLable = data.saleChartLabels;
        this.saleChartData = data.saleChartData;
        this.saleChartOption = data.saleChartOptions;
        this.saleChartColor = data.saleChartColors;
        this.saleChartLegend = data.saleChartLegend;
        // Charts1
        this.chartType1 = data.lineChartType1;
        this.chartLable1 = data.lineChartLabels1;
        this.chartData1 = data.lineChartData1;
        this.chartOption1 = data.lineChartOptions1;
        this.chartColor1 = data.lineChartColors1;
        this.chartLegend1 = data.lineChartLegend1;
        // Chart2
        this.chartType2 = data.lineChartType2;
        this.chartLable2 = data.lineChartLabels2;
        this.chartData2 = data.lineChartData2;
        this.chartOption2 = data.lineChartOptions2;
        this.chartColor2 = data.lineChartColors2;
        this.chartLegend2 = data.lineChartLegend2;
        //Static chart
        this.staticChartType = data.staticChartType;
        this.staticChartLable = data.staticChartLabels;
        this.staticChartData = data.staticChartData;
        this.staticChartOption = data.staticChartOptions;
        this.staticChartColor = data.staticChartColors;
        this.staticChartLegend = data.staticChartLegend;
    }
    ECommerceComponent.prototype.ngOnInit = function () {
        var review = Knob({
            value: 35,
            angleOffset: 180,
            className: "review",
            thickness: 0.1,
            width: 290,
            height: 290,
            fgColor: primary
        });
        document.getElementById('review').append(review);
    };
    ECommerceComponent = __decorate([
        Component({
            selector: 'app-e-commerce',
            templateUrl: './e-commerce.component.html',
            styleUrls: ['./e-commerce.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ECommerceComponent);
    return ECommerceComponent;
}());
export { ECommerceComponent };
//# sourceMappingURL=e-commerce.component.js.map