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
var ContactService = /** @class */ (function () {
    function ContactService(db) {
        this.db = db;
    }
    ContactService.prototype.createUser = function (value, avatar) {
        return this.db.collection('usersContact').add({
            age: parseInt(value.age),
            mobile: parseInt(value.mobile),
            name: value.name,
            surname: value.surname,
            avatar: avatar ? avatar : 'assets/images/user/user.png',
            nameToSearch: value.name.toLowerCase()
        });
    };
    ContactService.prototype.updateUser = function (userKey, value) {
        value.nameToSearch = value.name.toLowerCase();
        return this.db.collection('usersContact').doc(userKey).set(value);
    };
    ContactService.prototype.searchUsers = function (searchValue) {
        return this.db.collection('usersContact', function (ref) { return ref.where('nameToSearch', '>=', searchValue)
            .where('nameToSearch', '<=', searchValue + '\uf8ff'); })
            .snapshotChanges();
    };
    ContactService.prototype.searchUsersByAge = function (value) {
        return this.db.collection('usersContact', function (ref) { return ref.orderBy('age').startAt(value); }).snapshotChanges();
    };
    ContactService.prototype.getUser = function (userKey) {
        return this.db.collection('usersContact').doc(userKey).snapshotChanges();
    };
    ContactService.prototype.getUsers = function () {
        return this.db.collection('usersContact').snapshotChanges();
    };
    ContactService.prototype.deleteUser = function (contactKey) {
        return this.db.collection('usersContact').doc(contactKey).delete();
    };
    ContactService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], ContactService);
    return ContactService;
}());
export { ContactService };
//# sourceMappingURL=contact.service.js.map