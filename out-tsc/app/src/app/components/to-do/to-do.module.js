var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
var ToDoModule = /** @class */ (function () {
    function ToDoModule() {
    }
    ToDoModule = __decorate([
        NgModule({
            declarations: [ToDoComponent],
            imports: [
                CommonModule,
                FormsModule,
                ToDoRoutingModule
            ]
        })
    ], ToDoModule);
    return ToDoModule;
}());
export { ToDoModule };
//# sourceMappingURL=to-do.module.js.map