var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Timeline1Component } from './timeline1/timeline1.component';
import { Timeline2Component } from './timeline2/timeline2.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'timeline1',
                component: Timeline1Component,
                data: {
                    title: "Timeline1",
                    breadcrumb: "Timeline1"
                }
            },
            {
                path: 'timeline2',
                component: Timeline2Component,
                data: {
                    title: "Timeline2",
                    breadcrumb: "Timeline2"
                }
            },
        ]
    }
];
var TimelineRoutingModule = /** @class */ (function () {
    function TimelineRoutingModule() {
    }
    TimelineRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TimelineRoutingModule);
    return TimelineRoutingModule;
}());
export { TimelineRoutingModule };
//# sourceMappingURL=timeline-routing.module.js.map