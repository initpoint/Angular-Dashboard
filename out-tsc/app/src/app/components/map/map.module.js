var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from "@angular/common/http";
var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        NgModule({
            declarations: [GoogleMapComponent, LeafletMapComponent],
            imports: [
                CommonModule,
                MapRoutingModule,
                AgmCoreModule.forRoot({
                    apiKey: 'ADD_YOUR_APIKEY'
                }),
                LeafletModule.forRoot(),
                HttpClientModule
            ]
        })
    ], MapModule);
    return MapModule;
}());
export { MapModule };
//# sourceMappingURL=map.module.js.map