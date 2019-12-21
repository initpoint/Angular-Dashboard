var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { StateColorComponent } from './state-color/state-color.component';
import { TypographyComponent } from './typography/typography.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { GridComponent } from './grid/grid.component';
import { TagNPillsComponent } from './tag-n-pills/tag-n-pills.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ShadowComponent } from './shadow/shadow.component';
import { ListComponent } from './list/list.component';
import { RibbionsComponent } from './ribbions/ribbions.component';
import { StepsComponent } from './steps/steps.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "../../shared/shared.module";
var UiElementsModule = /** @class */ (function () {
    function UiElementsModule() {
    }
    UiElementsModule = __decorate([
        NgModule({
            declarations: [StateColorComponent, TypographyComponent, AvatarsComponent, HelperClassesComponent, GridComponent, TagNPillsComponent, SpinnersComponent, ShadowComponent, ListComponent, RibbionsComponent, StepsComponent, BreadcrumbComponent],
            imports: [
                CommonModule,
                UiElementsRoutingModule,
                NgbModule,
                SharedModule
            ]
        })
    ], UiElementsModule);
    return UiElementsModule;
}());
export { UiElementsModule };
//# sourceMappingURL=ui-elements.module.js.map