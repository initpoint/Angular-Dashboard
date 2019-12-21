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
import { FirebaseService } from '../../shared/services/firebase/todo.service';
import { Router } from '@angular/router';
var ToDoFirebaseComponent = /** @class */ (function () {
    function ToDoFirebaseComponent(toastrService, router, firebaseService) {
        this.toastrService = toastrService;
        this.router = router;
        this.firebaseService = firebaseService;
        this.todos = data.task;
        this.redBorder = false;
    }
    //Add new task
    ToDoFirebaseComponent.prototype.addTask = function (text) {
        var _this = this;
        if (!text) {
            this.redBorder = true;
            return false;
        }
        this.firebaseService.createTask(text)
            .then(function (res) {
            _this.resetFields();
            _this.router.navigate(['/to-do-firebase']);
        });
        this.redBorder = false;
    };
    ToDoFirebaseComponent.prototype.resetFields = function () {
        this.text = '';
    };
    //For completing your task
    ToDoFirebaseComponent.prototype.taskCompleted = function (todo) {
        var _this = this;
        todo.task = todo.payload.doc.data().task;
        todo.completed = todo.payload.doc.data().completed;
        todo.completed = !todo.completed;
        todo.nameToSearch = todo.task.toLowerCase();
        todo.completed ? this.toastrService.success(todo.text, "Mark as completed") : this.toastrService.error(todo.text, "Mark as Incompleted");
        this.firebaseService.updateTask(todo.payload.doc.id, todo)
            .then(function (res) {
            _this.router.navigate(['/to-do-firebase']);
        });
    };
    //For deleting a task
    ToDoFirebaseComponent.prototype.taskDeleted = function (taskid) {
        var _this = this;
        this.firebaseService.deleteTask(taskid)
            .then(function (res) {
            _this.router.navigate(['/to-do-firebase']);
        }, function (err) {
        });
    };
    //Mark and unmark all task
    ToDoFirebaseComponent.prototype.markAllAction = function (action) {
        this.firebaseService.markAll(action);
        this.completed = action;
        action ? this.toastrService.success("All Task as Completed") : this.toastrService.error("All Task as Incompleted");
    };
    ToDoFirebaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get complete list of task
        this.firebaseService.getTasks()
            .subscribe(function (result) {
            _this.items = result;
        });
    };
    ToDoFirebaseComponent = __decorate([
        Component({
            selector: 'app-to-do-firebase',
            templateUrl: './to-do-firebase.component.html',
            styleUrls: ['./to-do-firebase.component.scss']
        }),
        __metadata("design:paramtypes", [ToastrService, Router, FirebaseService])
    ], ToDoFirebaseComponent);
    return ToDoFirebaseComponent;
}());
export { ToDoFirebaseComponent };
//# sourceMappingURL=to-do-firebase.component.js.map