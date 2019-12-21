var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { FlatComponent } from './flat/flat.component';
import { EdgeComponent } from './edge/edge.component';
import { RaisedComponent } from './raised/raised.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'default',
                component: DefaultComponent,
                data: {
                    title: "Default",
                    breadcrumb: "Default"
                }
            },
            {
                path: 'flat',
                component: FlatComponent,
                data: {
                    title: "Flat",
                    breadcrumb: "Flat"
                }
            },
            {
                path: 'edge',
                component: EdgeComponent,
                data: {
                    title: "Edge",
                    breadcrumb: "Edge"
                }
            },
            {
                path: 'raised',
                component: RaisedComponent,
                data: {
                    title: "Raised",
                    breadcrumb: "Raised"
                }
            },
            {
                path: 'group',
                component: ButtonGroupComponent,
                data: {
                    title: "Group",
                    breadcrumb: "Group"
                }
            }
        ]
    }
];
var ButtonsRoutingModule = /** @class */ (function () {
    function ButtonsRoutingModule() {
    }
    ButtonsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ButtonsRoutingModule);
    return ButtonsRoutingModule;
}());
export { ButtonsRoutingModule };
//# sourceMappingURL=buttons-routing.module.js.map