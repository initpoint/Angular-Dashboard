var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { UniversityComponent } from './university/university.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { ServerComponent } from './server/server.component';
import { ProjectComponent } from './project/project.component';
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
                path: 'e-commerce',
                component: ECommerceComponent,
                data: {
                    title: "E-commerce",
                    breadcrumb: "E-commerce"
                }
            },
            {
                path: 'university',
                component: UniversityComponent,
                data: {
                    title: "University",
                    breadcrumb: "University"
                }
            },
            {
                path: 'bitcoin',
                component: BitcoinComponent,
                data: {
                    title: "Crypto",
                    breadcrumb: "Crypto"
                }
            },
            {
                path: 'server',
                component: ServerComponent,
                data: {
                    title: "Server",
                    breadcrumb: "Server"
                }
            },
            {
                path: 'project',
                component: ProjectComponent,
                data: {
                    title: "Project",
                    breadcrumb: "Project"
                }
            }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
export { DashboardRoutingModule };
//# sourceMappingURL=dashboard-routing.module.js.map