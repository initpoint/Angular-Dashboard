import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User, auth, initializeApp} from 'firebase/app';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    app;
    constructor(public db: AngularFirestore,
                private toastr: ToastrService,
    ) {
    }

    async createCustomer(value) {
        if (!this.app) {
            this.app = initializeApp(environment.firebase, 'secondary');
        }
        const ref = this.db.collection('customers');
         return this.app.auth().createUserWithEmailAndPassword(value.email, value.password)
            .then(function (userData) {
                ref.doc(userData.user.uid).set({
                    uid: userData.user.uid,
                    email: value.email,
                    mobile: parseInt(value.mobile),
                    name: value.name,
                    code: value.code,
                    pricelist: value.pricelist || null,
                    isActive: value.isActive || true,
                    lastLoginAt: Date.now()
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
        this.app.auth().signOut();
    }

    updateCustomer(userKey, value) {
        return this.db.collection('customers').doc(userKey).set(value,{merge:true}).then(res=> {
            this.toastr.success('Customer Updated.');
        });
    }


    setCustomer(id,attr) {
        return this.updateCustomer(id,attr);
    }
    getCustomer(userKey) {
        return this.db.collection('customers').doc(userKey).snapshotChanges();
    }

    getCustomers() {
        return this.db.collection('customers' ).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    uid: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }
    getPendingCustomers() {
        return this.db.collection('customers', ref => ref.where('isActive','==',false)).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    uid: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }
    deleteCustomer(contactKey) {
        return this.db.collection('customers').doc(contactKey).delete().then(res=> {
            this.toastr.error('Customer Deleted.');
        });
    }
}
