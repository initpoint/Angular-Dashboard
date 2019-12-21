var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicComponent } from './bootstrap-tables/basic/basic.component';
import { BorderComponent } from './bootstrap-tables/border/border.component';
import { SizingComponent } from './bootstrap-tables/sizing/sizing.component';
import { StylingComponent } from './bootstrap-tables/styling/styling.component';
import { BasicNgxDatatableComponent } from './ngx-datatables/basic/basic.component';
import { EditingComponent } from './ngx-datatables/editing/editing.component';
import { FilterNgxComponent } from './ngx-datatables/filter/filter.component';
import { FullscreenComponent } from './ngx-datatables/fullscreen/fullscreen.component';
import { PagingComponent } from './ngx-datatables/paging/paging.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { SelectionNgxComponent } from './ngx-datatables/selection/selection.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                component: BasicComponent,
                data: {
                    title: "Basic",
                    breadcrumb: "Basic"
                }
            },
            {
                path: 'sizing',
                component: SizingComponent,
                data: {
                    title: "Sizing",
                    breadcrumb: "Sizing"
                }
            },
            {
                path: 'border',
                component: BorderComponent,
                data: {
                    title: "Border",
                    breadcrumb: "Border"
                }
            },
            {
                path: 'styling',
                component: StylingComponent,
                data: {
                    title: "Styling",
                    breadcrumb: "Styling"
                }
            },
            {
                path: 'ngx-datatables/basic',
                component: BasicNgxDatatableComponent,
                data: {
                    title: "Basic",
                    breadcrumb: "Ngx-Datatables / Basic"
                }
            },
            {
                path: 'ngx-datatables/editing',
                component: EditingComponent,
                data: {
                    title: "Editing",
                    breadcrumb: "Ngx-Datatables / Editing"
                }
            },
            {
                path: 'ngx-datatables/filter',
                component: FilterNgxComponent,
                data: {
                    title: "Filter",
                    breadcrumb: "Ngx-Datatables / Filter"
                }
            },
            {
                path: 'ngx-datatables/fullscreen',
                component: FullscreenComponent,
                data: {
                    title: "FullScreen",
                    breadcrumb: "Ngx-Datatables / FullScreen"
                }
            },
            {
                path: 'ngx-datatables/paging',
                component: PagingComponent,
                data: {
                    title: "Paging",
                    breadcrumb: "Ngx-Datatables / Paging"
                }
            },
            {
                path: 'ngx-datatables/selection',
                component: SelectionNgxComponent,
                data: {
                    title: "Selection",
                    breadcrumb: "Ngx-Datatables / Selection"
                }
            },
            {
                path: 'smart-table',
                component: SmartTableComponent,
                data: {
                    title: "Smart Table",
                    breadcrumb: "Smart Table"
                }
            }
        ]
    }
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());
export { TablesRoutingModule };
//# sourceMappingURL=tables-routing.module.js.map