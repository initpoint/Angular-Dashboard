import 'chartjs-plugin-streaming';
var moment = require('moment');
moment.suppressDeprecationWarnings = true;
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
//Sale chart
export var memoryChartType = 'line';
export var memoryChartLabels = ["1 min.", "10 min.", "20 min.", "30 min.", "40 min.", "50 min.", "60 min.", "70 min.", "80 min.", "90 min.", "100 min"];
export var memoryChartData = [
    { data: [0, 59, 80, 40, 100, 60, 95, 20, 70, 40, 70] },
    { data: [0, 48, 30, 19, 86, 27, 90, 60, 30, 70, 40] },
    { data: [0, 30, 40, 10, 60, 40, 70, 30, 20, 80, 50] }
];
// export var memoryChartData: Array<any> = [{ data: getRandomData() }];
export var memoryChartOptions = {
    responsive: true,
    animation: false,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
                display: true,
            }],
        yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    precision: 0
                }
            }]
    }
};
export var memoryChartColors = [{
        fill: false,
        borderColor: primary,
        borderWidth: 2.5,
        pointBackgroundColor: primary,
        pointBorderColor: primary
    }, {
        fill: false,
        borderColor: secondary,
        borderWidth: 2.5,
        pointBackgroundColor: secondary,
        pointBorderColor: secondary
    },
    {
        fill: false,
        borderColor: "#22af47",
        borderWidth: 2.5,
        pointBackgroundColor: '#22af47',
        pointBorderColor: "#22af47"
    }];
export var memoryChartLegend = false;
// Line chart
export var latencyChartType = 'line';
export var latencyChartLabels = ["", "2009", "2010", "2011", "2012", "2013", "2014"];
export var latencyChartData = [{
        data: []
    }, {
        data: []
    }];
export var latencyChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        point: {
            radius: 0
        }
    },
    scales: {
        xAxes: [{
                display: false,
                type: 'realtime',
                realtime: {
                    onRefresh: function (chart) {
                        chart.data.datasets.forEach(function (dataset) {
                            dataset.data.push({
                                x: Date.now(),
                                y: (Math.random() > 0.1 ? 1.0 : 1.0) * Math.round(Math.random() * 100)
                            });
                        });
                    },
                    delay: 1000,
                    duration: 50000,
                    refresh: 1000,
                },
            }],
        yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true,
                    fixedStepSize: 10,
                    precision: 0
                }
            }]
    }
};
export var latencyChartColors = [{
        fill: true,
        backgroundColor: "rgb(183, 196, 246)",
        borderColor: "#4466f2",
        borderWidth: 1.5,
        pointBackgroundColor: '#4466f2',
        pointBorderColor: "#4466f2",
        pointBorderWidth: 0,
        lineTension: 0,
    }];
export var latencyChartLegend = false;
// Line chart
export var cpuChartType = 'line';
export var cpuChartLabels = ["", "2009", "2010", "2011", "2012", "2013", "2014"];
export var cpuChartData = [{
        data: []
    }, {
        data: []
    }];
export var cpuChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        point: {
            radius: 0
        }
    },
    scales: {
        xAxes: [{
                display: false,
                type: 'realtime',
                realtime: {
                    onRefresh: function (chart) {
                        chart.data.datasets.forEach(function (dataset) {
                            dataset.data.push({
                                x: Date.now(),
                                y: (Math.random() > 0.1 ? 1.0 : 1.0) * Math.round(Math.random() * 100)
                            });
                        });
                    },
                    delay: 1000,
                    duration: 50000,
                    refresh: 1000,
                },
            }],
        yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    fixedStepSize: 10,
                    precision: 0
                }
            }]
    }
};
export var cpuChartColors = [{
        fill: true,
        backgroundColor: "rgb(183, 196, 246)",
        borderColor: primary,
        borderWidth: 1.5,
        pointBackgroundColor: primary,
        pointBorderColor: primary,
        pointBorderWidth: 0,
        lineTension: 0,
    }];
export var cpuChartLegend = false;
//# sourceMappingURL=server.js.map