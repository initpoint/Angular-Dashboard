import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor(public db: AngularFirestore,
                public afAuth: AngularFireAuth,
    ) {
    }

    async createCustomer(value) {
        const ref = this.db.collection('users');
         return this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
            .then(function (userData) {
                ref.doc(userData.user.uid).set({
                    uid: userData.user.uid,
                    email: value.email,
                    mobile: parseInt(value.mobile),
                    name: value.name,
                    code: value.code,
                    userType: 'customer'
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

    updateCustomer(userKey, value) {

        value.userType = 'customer';
        return this.db.collection('users',ref => ref.where('userType','==','customer')).doc(userKey).set(value);
    }

    searchCustomers(searchValue) {
        return this.db.collection('users', ref => ref.where('name', '>=', searchValue)
            .where('name', '<=', searchValue + '\uf8ff')
            .where('userType','==','customer'))
            .snapshotChanges();
    }


    getCustomer(userKey) {
        return this.db.collection('users',ref => ref.where('userType','==','customer')).doc(userKey).snapshotChanges();
    }

    getCustomers() {
        return this.db.collection('users', ref => ref.where('userType','==','customer')).snapshotChanges();
    }

    deleteCustomer(contactKey) {
        return this.db.collection('users',ref => ref.where('userType','==','customer')).doc(contactKey).delete();
    }
}
