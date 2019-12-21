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
import * as chartData from './../../../shared/data/dashboard/server';
import { serverDB } from '../../../shared/data/tables/server';
import 'chartjs-plugin-streaming';
var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        this.explorer = [];
        this.settings = {
            columns: {
                name: {
                    title: 'Name'
                },
                user: {
                    title: 'User Name',
                    type: 'html',
                },
                IO: {
                    title: 'IO'
                },
                cpu: {
                    title: 'CPU'
                },
                mem: {
                    title: 'MEM'
                }
            }
        };
        this.latencyChartType = chartData.cpuChartType;
        this.latencyChartLabels = chartData.latencyChartLabels;
        this.latencyChartData = chartData.latencyChartData;
        this.latencyChartOptions = chartData.latencyChartOptions;
        this.latencyChartColors = chartData.latencyChartColors;
        this.latencyChartLegend = chartData.latencyChartLegend;
        this.memoryChartType = chartData.memoryChartType;
        this.memoryChartLabels = chartData.memoryChartLabels;
        this.memoryChartData = chartData.memoryChartData;
        this.memoryChartOptions = chartData.memoryChartOptions;
        this.memoryChartColors = chartData.memoryChartColors;
        this.memoryChartLegend = chartData.memoryChartLegend;
        this.cpuChartType = chartData.cpuChartType;
        this.cpuChartLabels = chartData.cpuChartLabels;
        this.cpuChartData = chartData.cpuChartData;
        this.cpuChartOptions = chartData.cpuChartOptions;
        this.cpuChartColors = chartData.cpuChartColors;
        this.cpuChartLegend = chartData.cpuChartLegend;
        this.explorer = serverDB.explorer;
    }
    ServerComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/tables/explorer.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    ServerComponent.prototype.ngAfterViewChecked = function () { };
    ServerComponent = __decorate([
        Component({
            selector: 'app-server',
            templateUrl: './server.component.html',
            styleUrls: ['./server.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ServerComponent);
    return ServerComponent;
}());
export { ServerComponent };
//# sourceMappingURL=server.component.js.map