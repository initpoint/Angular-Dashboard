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
import * as L from 'leaflet';
import { HttpClient } from "@angular/common/http";
var LeafletMapComponent = /** @class */ (function () {
    function LeafletMapComponent(http) {
        this.http = http;
        //First map options
        this.options1 = {
            layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            ],
            zoom: 5,
            center: L.latLng(46.879966, -121.726909)
        };
        this.layersControl = {
            baseLayers: {
                'Open Street Map': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
                'Open Cycle Map': L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            },
            overlays: {
                'Big Circle': L.circle([46.95, -122], { radius: 5000 }),
                'Big Square': L.polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
            }
        };
        //Second map
        this.options2 = {
            layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 50, attribution: '...' })
            ],
            zoom: 5,
            center: L.latLng(46.879966, -121.726909)
        };
        this.options3 = {
            layers: [
                L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 18,
                    attribution: ""
                })
            ],
            zoom: 7,
            center: L.latLng(47.482019, -1)
        };
        this.homeCoords = {
            lat: 23.810331,
            lon: 90.412521
        };
        this.popupText = "Some popup text";
        this.markerIcon = {
            icon: L.icon({
                iconSize: [25, 41],
                iconAnchor: [10, 41],
                popupAnchor: [2, -40],
                // specify the path here
                iconUrl: "assets/images/marker-icon.png",
                shadowUrl: "assets/images/marker-shadow.png"
            })
        };
        this.options4 = {
            layers: [
                L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 18,
                    attribution: ""
                })
            ],
            zoom: 5,
            center: L.latLng(this.homeCoords.lat, this.homeCoords.lon)
        };
    }
    LeafletMapComponent.prototype.onMapReady = function (map) {
        var _this = this;
        this.http.get("assets/data/map/polygon.json").subscribe(function (json) {
            _this.json = json;
            L.geoJSON(_this.json).addTo(map);
        });
    };
    LeafletMapComponent.prototype.initMarkers = function () {
        var popupInfo = "<b style=\"color: red; background-color: white\">" + this.popupText + "</b>";
        L.marker([this.homeCoords.lat, this.homeCoords.lon], this.markerIcon)
            .addTo(this.map4)
            .bindPopup(popupInfo);
    };
    LeafletMapComponent.prototype.onMapReady4 = function (map) {
        this.map4 = map;
        this.initMarkers();
    };
    LeafletMapComponent.prototype.ngOnInit = function () { };
    LeafletMapComponent = __decorate([
        Component({
            selector: 'app-leaflet-map',
            templateUrl: './leaflet-map.component.html',
            styleUrls: ['./leaflet-map.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], LeafletMapComponent);
    return LeafletMapComponent;
}());
export { LeafletMapComponent };
//# sourceMappingURL=leaflet-map.component.js.map