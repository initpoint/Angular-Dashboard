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
var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
        // Map1
        this.lat_m1 = 20.593683;
        this.lng_m1 = 78.962883;
        this.zoom_m1 = 4;
        //Map2
        this.lat_m2 = 52.5159;
        this.lng_m2 = 13.3777;
        this.zoom_m2 = 14;
        //Map3
        this.lat_m3 = 34.552942;
        this.lng_m3 = 112.690597;
        this.zoom_m3 = 6;
        //Map4
        this.lat_m4 = 27.98805;
        this.lng_m4 = 86.9250;
        this.zoom_m4 = 10;
        //Map5
        this.lat_m5 = 42.3572;
        this.lng_m5 = -71.0596;
        this.zoom_m5 = 4;
        this.lat_m5_c1 = 41.4822;
        this.lng_m5_c1 = -81.6697;
        this.lat_m5_c2 = 37.090240;
        this.lng_m5_c2 = -95.712891;
        //Map6
        this.lat_m6 = 10;
        this.lng_m6 = 10;
        this.zoom_m6 = 5;
        this.paths_m6 = [
            { lat: 0, lng: 10 },
            { lat: 0, lng: 20 },
            { lat: 10, lng: 20 },
            { lat: 10, lng: 10 },
            { lat: 0, lng: 10 }
        ];
        //Map7
        this.lat_m7 = 52.5159;
        this.lng_m7 = 13.3777;
        this.zoom_m7 = 14;
        //Map8
        this.lat_m8 = 52.5159;
        this.lng_m8 = 13.3777;
        this.zoom_m8 = 3;
        this.lat_m8_A = 53.3477;
        this.lng_m8_A = -6.2597;
        this.lat_m8_B = 51.5008;
        this.lng_m8_B = -0.1224;
        this.lat_m8_c = 48.8567;
        this.lng_m8_c = 2.3508;
        this.lat_m8_d = 52.5166;
        this.lng_m8_d = 13.3833;
        this.strokecolor_m8 = "#0000FF";
        this.strokewidth_m8 = 4;
        //Map9
        this.lat_m9 = 52.5159;
        this.lng_m9 = 13.3777;
        this.zoom_m9 = 2;
        this.fillcolor_m9 = "#FFFFCC";
        this.strokeColor_m9 = "#829";
        this.pstrokeweight_m9 = 8;
        this.fillOpacity_m9 = 1;
        this.paths_m9 = [
            { lat: 52, lng: 40 },
            { lat: 40, lng: 13 },
            { lat: 13, lng: 50 }
        ];
        //Map10
        this.lat_m10 = 42.3572;
        this.lng_m10 = -81.6697;
        this.zoom_m10 = 4;
        this.lat_m10_c1 = 37.090240;
        this.lng_m10_c1 = -95.712891;
        this.markers = [
            {
                lat: 52.5159,
                lng: 13.3777,
                label: 'A',
                draggable: true
            },
            {
                lat: 52.5159,
                lng: 13.3730,
                label: 'B',
                draggable: true
            },
            {
                lat: 52.5059,
                lng: 13.3771,
                label: 'C',
                draggable: true
            }
        ];
    }
    GoogleMapComponent.prototype.markerDragEnd = function (m, $event) { };
    GoogleMapComponent.prototype.mapClicked = function (e) { };
    GoogleMapComponent.prototype.ngOnInit = function () { };
    GoogleMapComponent = __decorate([
        Component({
            selector: 'app-google-map',
            templateUrl: './google-map.component.html',
            styleUrls: ['./google-map.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());
export { GoogleMapComponent };
//# sourceMappingURL=google-map.component.js.map