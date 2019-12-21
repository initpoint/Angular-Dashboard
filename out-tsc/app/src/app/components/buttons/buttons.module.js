var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { DefaultComponent } from './default/default.component';
import { FlatComponent } from './flat/flat.component';
import { EdgeComponent } from './edge/edge.component';
import { RaisedComponent } from './raised/raised.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule = __decorate([
        NgModule({
            declarations: [DefaultComponent, FlatComponent, EdgeComponent, RaisedComponent, ButtonGroupComponent],
            imports: [
                CommonModule,
                ButtonsRoutingModule,
                NgbModule
            ]
        })
    ], ButtonsModule);
    return ButtonsModule;
}());
export { ButtonsModule };
//# sourceMappingURL=buttons.module.js.map