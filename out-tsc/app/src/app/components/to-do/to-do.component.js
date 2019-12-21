var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import * as data from '../../shared/data/todo/todo';
import { ToastrService } from 'ngx-toastr';
var ToDoComponent = /** @class */ (function () {
    function ToDoComponent(toastrService) {
        this.toastrService = toastrService;
        this.todos = data.task;
        this.red_border = false;
    }
    ToDoComponent.prototype.ngOnInit = function () { };
    ToDoComponent.prototype.addTask = function (text) {
        if (!text) {
            this.red_border = true;
            return false;
        }
        var task = { text: text, completed: false };
        this.todos.push(task);
        this.text = '';
        this.red_border = false;
    };
    ToDoComponent.prototype.taskCompleted = function (task) {
        task.completed = !task.completed;
        task.completed ? this.toastrService.success(task.text, "Mark as completed") : this.toastrService.error(task.text, "Mark as Incompleted");
    };
    ToDoComponent.prototype.taskDeleted = function (index) {
        this.todos.splice(index, 1);
    };
    ToDoComponent.prototype.markAllAction = function (action) {
        this.todos.filter(function (task) {
            task.completed = action;
        });
        this.completed = action;
        action ? this.toastrService.success("All Task as Completed") : this.toastrService.error("All Task as Incompleted");
    };
    ToDoComponent = __decorate([
        Component({
            selector: 'app-to-do',
            templateUrl: './to-do.component.html',
            styleUrls: ['./to-do.component.scss']
        }),
        __metadata("design:paramtypes", [ToastrService])
    ], ToDoComponent);
    return ToDoComponent;
}());
export { ToDoComponent };
//# sourceMappingURL=to-do.component.js.map