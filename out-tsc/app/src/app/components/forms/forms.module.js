var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidationComponent } from './form-controls/form-validation/form-validation.component';
import { BaseInputsComponent } from './form-controls/base-inputs/base-inputs.component';
import { CheckboxRadioComponent } from './form-controls/checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './form-controls/input-groups/input-groups.component';
import { MegaOptionsComponent } from './form-controls/mega-options/mega-options.component';
import { FormDefaultComponent } from './form-default/form-default.component';
import { NgxWizardModule } from './ngx-wizard/ngx-wizard.module';
var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        NgModule({
            declarations: [
                FormValidationComponent,
                BaseInputsComponent,
                CheckboxRadioComponent,
                InputGroupsComponent,
                MegaOptionsComponent,
                FormDefaultComponent
            ],
            imports: [
                CommonModule,
                FormsRoutingModule,
                ReactiveFormsModule,
                FormsModule,
                NgxWizardModule
            ]
        })
    ], FormModule);
    return FormModule;
}());
export { FormModule };
//# sourceMappingURL=forms.module.js.map