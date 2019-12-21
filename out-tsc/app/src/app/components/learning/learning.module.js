var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LearningRoutingModule } from './learning-routing.module';
import { LearningFilterComponent } from './learning-filter/learning-filter.component';
import { LearningDetailComponent } from './learning-detail/learning-detail.component';
import { LearningListComponent } from './learning-list/learning-list.component';
import { SharedModule } from "../../shared/shared.module";
var LearningModule = /** @class */ (function () {
    function LearningModule() {
    }
    LearningModule = __decorate([
        NgModule({
            declarations: [LearningFilterComponent, LearningDetailComponent, LearningListComponent],
            imports: [
                CommonModule,
                LearningRoutingModule,
                NgbModule,
                SharedModule
            ]
        })
    ], LearningModule);
    return LearningModule;
}());
export { LearningModule };
//# sourceMappingURL=learning.module.js.map