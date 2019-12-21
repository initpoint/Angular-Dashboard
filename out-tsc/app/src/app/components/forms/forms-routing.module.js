var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormValidationComponent } from './form-controls/form-validation/form-validation.component';
import { BaseInputsComponent } from './form-controls/base-inputs/base-inputs.component';
import { CheckboxRadioComponent } from './form-controls/checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './form-controls/input-groups/input-groups.component';
import { MegaOptionsComponent } from './form-controls/mega-options/mega-options.component';
import { FormDefaultComponent } from './form-default/form-default.component';
import { NgxWizardComponent } from './ngx-wizard/ngx-wizard.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'validation',
                component: FormValidationComponent,
                data: {
                    title: "Validation",
                    breadcrumb: "Validation"
                }
            },
            {
                path: 'inputs',
                component: BaseInputsComponent,
                data: {
                    title: "Inputs",
                    breadcrumb: "Inputs"
                }
            },
            {
                path: 'checkbox-radio',
                component: CheckboxRadioComponent,
                data: {
                    title: "Checkbox-Radio",
                    breadcrumb: "Checkbox-Radio"
                }
            },
            {
                path: 'input-groups',
                component: InputGroupsComponent,
                data: {
                    title: "Input-Groups",
                    breadcrumb: "Input-Groups"
                }
            },
            {
                path: 'mega-options',
                component: MegaOptionsComponent,
                data: {
                    title: "Mega-Options",
                    breadcrumb: "Mega-Options"
                }
            },
            {
                path: 'form-default',
                component: FormDefaultComponent,
                data: {
                    title: "Form-Default",
                    breadcrumb: "Form-Default"
                }
            },
            {
                path: 'wizard',
                component: NgxWizardComponent,
                data: {
                    title: "Ngx-Wizard",
                    breadcrumb: "Ngx-Wizard"
                }
            }
        ]
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());
export { FormsRoutingModule };
//# sourceMappingURL=forms-routing.module.js.map