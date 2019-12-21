var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ConfigDB } from '../../shared/data/config/config';
var CustomizerService = /** @class */ (function () {
    function CustomizerService() {
        // Configration Layout
        this.data = ConfigDB.data;
        document.body.className = this.data.color.mix_layout;
        document.body.setAttribute("main-theme-layout", this.data.settings.layout_type);
        document.getElementsByTagName('html')[0].setAttribute('dir', this.data.settings.layout_type);
        var color = localStorage.getItem("color") || this.data.color.color;
        var layoutVersion = localStorage.getItem("layoutVersion") || this.data.color.layout_version;
        if (color) {
            this.createStyle(color);
            if (layoutVersion)
                document.body.className = layoutVersion;
        }
    }
    // Set Customize layout Version
    CustomizerService.prototype.setLayoutType = function (layout) {
        document.body.setAttribute("main-theme-layout", layout);
        document.getElementsByTagName('html')[0].setAttribute('dir', layout);
        this.data.settings.layout_type = layout;
    };
    // Set Customize layout Version
    CustomizerService.prototype.setLayout = function (layout) {
        document.body.className = layout;
        this.data.color.mix_layout = layout;
        localStorage.setItem('layout_type', layout);
    };
    // Set Color 
    CustomizerService.prototype.setColor = function (color) {
        this.createStyle(color);
        this.data.color.color = color;
        if (color == "color-1") {
            this.data.color.primary_color = '#4466f2';
            this.data.color.secondary_color = '#1ea6ec';
        }
        else if (color == "color-2") {
            this.data.color.primary_color = '#0288d1';
            this.data.color.secondary_color = '#26c6da';
        }
        else if (color == "color-3") {
            this.data.color.primary_color = '#8e24aa';
            this.data.color.secondary_color = '#ff6e40';
        }
        else if (color == "color-4") {
            this.data.color.primary_color = '#4c2fbf';
            this.data.color.secondary_color = '#2e9de4';
        }
        else if (color == "color-5") {
            this.data.color.primary_color = '#7c4dff';
            this.data.color.secondary_color = '#7b1fa2';
        }
        else if (color == "color-6") {
            this.data.color.primary_color = '#3949ab';
            this.data.color.secondary_color = '#4fc3f7';
        }
        localStorage.setItem('color', this.data.color.color);
        localStorage.setItem('primary_color', this.data.color.primary_color);
        localStorage.setItem('secondary_color', this.data.color.secondary_color);
        window.location.reload();
    };
    // Set Customize layout Version
    CustomizerService.prototype.setColorLightScheme = function (color) {
        this.setColor(color);
        this.data.color.layout_version = 'light';
        localStorage.setItem('layoutVersion', this.data.color.layout_version);
    };
    // Set Customize layout Version
    CustomizerService.prototype.setColorDarkScheme = function (color) {
        this.setColor(color);
        this.data.color.layout_version = 'dark-only';
        localStorage.setItem('layoutVersion', this.data.color.layout_version);
    };
    // Create style sheet append in head
    CustomizerService.prototype.createStyle = function (color) {
        var head = document.head;
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = window.location.origin + "/assets/css/" + color + ".css";
        head.appendChild(link);
    };
    CustomizerService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CustomizerService);
    return CustomizerService;
}());
export { CustomizerService };
//# sourceMappingURL=customizer.service.js.map