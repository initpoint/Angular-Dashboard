var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from "../../shared/shared.module";
import { KnowledgeBaseRoutingModule } from './knowledge-base-routing.module';
import { KnowledgeBaseComponent } from './knowledge-base.component';
var KnowledgeBaseModule = /** @class */ (function () {
    function KnowledgeBaseModule() {
    }
    KnowledgeBaseModule = __decorate([
        NgModule({
            declarations: [KnowledgeBaseComponent],
            imports: [
                CommonModule,
                KnowledgeBaseRoutingModule,
                FormsModule,
                Ng2SearchPipeModule,
                SharedModule
            ]
        })
    ], KnowledgeBaseModule);
    return KnowledgeBaseModule;
}());
export { KnowledgeBaseModule };
//# sourceMappingURL=knowledge-base.module.js.map