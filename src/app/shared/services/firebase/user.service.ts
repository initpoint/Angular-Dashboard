import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(public db: AngularFirestore,
                public afAuth: AngularFireAuth,
    ) {
    }

    async createUser(value, avatar) {
        const ref = this.db.collection('users');
         return this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
            .then(function (userData) {
                ref.doc(userData.user.uid).set({
                    uid: userData.user.uid,
                    email: value.email,
                    mobile: parseInt(value.mobile),
                    name: value.name,
                    avatar: avatar ? avatar : 'assets/images/user/user.png',
                    nameToSearch: value.name.toLowerCase(),
                    userType: 'user'
                });
                return true;
            }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else if (errorCode == 'auth/email-already-in-use') {
                alert('This email is already in use.');
            } else if (errorCode == 'auth/invalid-email') {
                alert('email address is not valid.');
            } else {
                alert(errorMessage);
            }
            return false;
        });
    }

    updateUser(userKey, value) {
        value.nameToSearch = value.name.toLowerCase();
        value.userType = 'user';
        return this.db.collection('users').doc(userKey).set(value);
    }

    searchUsers(searchValue) {
        return this.db.collection('users', ref => ref.where('nameToSearch', '>=', searchValue)
            .where('nameToSearch', '<=', searchValue + '\uf8ff'))
            .snapshotChanges()
    }

    /*searchUsersByAge(value) {
      return this.db.collection('users', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
    }*/

    getUser(userKey) {
        return this.db.collection('users').doc(userKey).snapshotChanges();
    }

    getUsers() {
        return this.db.collection('users', ref => ref.where('userType','==','user')).snapshotChanges();
    }

    deleteUser(contactKey) {
        return this.db.collection('users').doc(contactKey).delete();
    }
}
