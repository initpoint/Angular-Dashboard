import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../../environments/environment';
import {User, auth, initializeApp} from 'firebase/app';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    app;

    constructor(public db: AngularFirestore,
                public afAuth: AngularFireAuth,
                public toastrService: ToastrService,
    ) {
    }

    async createUser(value) {
        if (!this.app) {
            this.app = initializeApp(environment.firebase, 'secondary');
        }
        const ref = this.db.collection('users');
        return this.app.auth().createUserWithEmailAndPassword(value.email, value.password)
            .then(function (userData) {
                ref.doc(userData.user.uid).set({
                    uid: userData.user.uid,
                    email: value.email,
                    mobile: value.mobile || null,
                    name: value.name || null,
                    code: value.code || null,
                    permissions: {update: [], create: [], delete: [],view: [],import:[],export:[]}
                });
                return true;
            }).catch(function (err) {
                if (err.code === 'auth/weak-password') {
                    alert('The password is too weak.');
                } else if (err.code === 'auth/email-already-in-use') {
                    alert('This email is already in use.');
                } else if (err.code === 'auth/invalid-email') {
                    alert('email address is not valid.');
                } else {
                    alert(err.message);
                }
                return false;
            }).then(res => {
                this.app.auth().signOut();
                this.toastrService.success('User Created.');
            });
    }

    updateUser(userKey, value) {
        return this.db.collection('users').doc(userKey).set(value, {merge: true});
    }

    searchUsers(searchValue) {
        return this.db.collection('users', ref => ref.where('name', '>=', searchValue)
            .where('name', '<=', searchValue + '\uf8ff')
            .where('userType', '==', 'user'))
            .snapshotChanges();
    }

    getUser(userKey) {
        return this.db.collection('users').doc(userKey).snapshotChanges();
    }

    getUsers() {
        return this.db.collection('users').snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    uid: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    deleteUser(contactKey) {
        return this.db.collection('users').doc(contactKey).delete();
    }
}
