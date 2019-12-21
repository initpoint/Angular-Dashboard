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
var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.createUser = function (value, avatar) {
        return this.db.collection('users').add({
            email: value.email,
            password: value.password,
            mobile: parseInt(value.mobile),
            name: value.name,
            avatar: avatar ? avatar : 'assets/images/user/user.png',
            nameToSearch: value.name.toLowerCase()
        });
    };
    UserService.prototype.updateUser = function (userKey, value) {
        value.nameToSearch = value.name.toLowerCase();
        return this.db.collection('users').doc(userKey).set(value);
    };
    UserService.prototype.searchUsers = function (searchValue) {
        return this.db.collection('users', function (ref) { return ref.where('nameToSearch', '>=', searchValue)
            .where('nameToSearch', '<=', searchValue + '\uf8ff'); })
            .snapshotChanges();
    };
    UserService.prototype.searchUsersByAge = function (value) {
        return this.db.collection('users', function (ref) { return ref.orderBy('age').startAt(value); }).snapshotChanges();
    };
    UserService.prototype.getUser = function (userKey) {
        return this.db.collection('users').doc(userKey).snapshotChanges();
    };
    UserService.prototype.getUsers = function () {
        return this.db.collection('users').snapshotChanges();
    };
    UserService.prototype.deleteUser = function (contactKey) {
        return this.db.collection('users').doc(contactKey).delete();
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map