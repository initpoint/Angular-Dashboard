var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { SharedModule } from "../../shared/shared.module";
import { TimelineRoutingModule } from './timeline-routing.module';
import { Timeline1Component } from './timeline1/timeline1.component';
import { Timeline2Component } from './timeline2/timeline2.component';
var TimelineModule = /** @class */ (function () {
    function TimelineModule() {
    }
    TimelineModule = __decorate([
        NgModule({
            declarations: [Timeline1Component, Timeline2Component],
            imports: [
                CommonModule,
                TimelineRoutingModule,
                VerticalTimelineModule,
                SharedModule
            ]
        })
    ], TimelineModule);
    return TimelineModule;
}());
export { TimelineModule };
//# sourceMappingURL=timeline.module.js.map