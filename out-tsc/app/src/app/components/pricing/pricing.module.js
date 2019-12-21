var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
var PricingModule = /** @class */ (function () {
    function PricingModule() {
    }
    PricingModule = __decorate([
        NgModule({
            declarations: [PricingComponent],
            imports: [
                CommonModule,
                PricingRoutingModule
            ]
        })
    ], PricingModule);
    return PricingModule;
}());
export { PricingModule };
//# sourceMappingURL=pricing.module.js.map