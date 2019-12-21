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
import { CustomizerService } from '../../services/customizer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(customize, modalService, toastrService) {
        this.customize = customize;
        this.modalService = modalService;
        this.toastrService = toastrService;
        this.sidebarSetting = 'color';
        this.layoutType = 'ltr';
        this.sidebarType = 'default';
        this.customize.data.color.layout_version = localStorage.getItem("layoutVersion");
        this.customize.data.color.color = localStorage.getItem("color");
        this.customize.data.color.primary_color = localStorage.getItem("primary_color");
        this.customize.data.color.secondary_color = localStorage.getItem("secondary_color");
    }
    // Open customizer
    CustomizerComponent.prototype.openCustomizerSetting = function (val) {
        this.customizer = val;
    };
    // Sidebar customizer Settings
    CustomizerComponent.prototype.customizerSetting = function (val) {
        this.sidebarSetting = val;
    };
    // Customize Layout Type
    CustomizerComponent.prototype.customizeLayoutType = function (val) {
        this.customize.setLayoutType(val);
        this.layoutType = val;
    };
    // Customize Sidebar Type
    CustomizerComponent.prototype.customizeSidebarType = function (val) {
        if (val == 'default') {
            this.customize.data.settings.sidebar.type = 'default';
            this.customize.data.settings.sidebar.body_type = 'default';
        }
        else if (val == 'compact') {
            this.customize.data.settings.sidebar.type = 'compact-wrapper';
            this.customize.data.settings.sidebar.body_type = 'sidebar-icon';
        }
        else if (val == 'compact-icon') {
            this.customize.data.settings.sidebar.type = 'compact-page';
            this.customize.data.settings.sidebar.body_type = 'sidebar-hover';
        }
        this.sidebarType = val;
    };
    // Customize Sidebar Setting
    CustomizerComponent.prototype.customizeSidebarSetting = function (val) {
        this.customize.data.settings.sidebar_setting = val;
    };
    // Customize Sidebar Backround
    CustomizerComponent.prototype.customizeSidebarBackround = function (val) {
        this.customize.data.settings.sidebar_backround = val;
    };
    // Customize Mix Layout
    CustomizerComponent.prototype.customizeMixLayout = function (val) {
        this.customize.setLayout(val);
    };
    // Customize Light Color
    CustomizerComponent.prototype.customizeLightColorScheme = function (val) {
        this.customize.setColorLightScheme(val);
    };
    // Customize Dark Color
    CustomizerComponent.prototype.customizeDarkColorScheme = function (val) {
        this.customize.setColorDarkScheme(val);
    };
    //Display modal for copy config
    CustomizerComponent.prototype.copyConfig = function (popup, data) {
        this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
        data = this.customize.data;
    };
    //Copy config
    CustomizerComponent.prototype.copyText = function (data) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = JSON.stringify(data);
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });
    };
    CustomizerComponent.prototype.ngOnInit = function () { };
    CustomizerComponent = __decorate([
        Component({
            selector: 'app-customizer',
            templateUrl: './customizer.component.html',
            styleUrls: ['./customizer.component.scss']
        }),
        __metadata("design:paramtypes", [CustomizerService,
            NgbModal,
            ToastrService])
    ], CustomizerComponent);
    return CustomizerComponent;
}());
export { CustomizerComponent };
//# sourceMappingURL=customizer.component.js.map