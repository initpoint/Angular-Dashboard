var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    //For Creating a new task
    FirebaseService.prototype.createTask = function (value) {
        return this.db.collection('todo').add({
            task: value,
            completed: false,
            nameToSearch: value.toLowerCase()
        });
    };
    //Display complete list of task
    FirebaseService.prototype.getTasks = function () {
        return this.db.collection('todo').snapshotChanges();
    };
    //For deleting particular task
    FirebaseService.prototype.deleteTask = function (taskKey) {
        return this.db.collection('todo').doc(taskKey).delete();
    };
    //For updating particular task
    FirebaseService.prototype.updateTask = function (taskKey, value) {
        return this.db.collection('todo').doc(taskKey).set({
            task: value.task,
            completed: value.completed,
            nameToSearch: value.nameToSearch
        });
    };
    FirebaseService.prototype.markAll = function (action) {
        var _this = this;
        this.db.collection('todo').get().forEach(function (item) {
            return item.docs.map(function (m) {
                return _this.db.doc("todo/" + m.id).update({ completed: action });
            });
        });
    };
    FirebaseService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], FirebaseService);
    return FirebaseService;
}());
export { FirebaseService };
//# sourceMappingURL=todo.service.js.map