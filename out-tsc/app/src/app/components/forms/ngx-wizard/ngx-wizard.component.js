var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var NgxWizardComponent = /** @class */ (function () {
    function NgxWizardComponent() {
        this.title = 'Wizard Three';
    }
    NgxWizardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NgxWizardComponent.prototype, "formData", void 0);
    NgxWizardComponent = __decorate([
        Component({
            selector: 'app-ngx-wizard',
            templateUrl: './ngx-wizard.component.html',
            styleUrls: ['./ngx-wizard.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], NgxWizardComponent);
    return NgxWizardComponent;
}());
export { NgxWizardComponent };
//# sourceMappingURL=ngx-wizard.component.js.map