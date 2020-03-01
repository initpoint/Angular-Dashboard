import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User, auth, initializeApp} from 'firebase/app';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {PermissionService} from './permission.service';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    app;

    constructor(public db: AngularFirestore,
                private toastrService: ToastrService,
                public permissionService: PermissionService
    ) {
    }

    async createCustomer(value) {
        if (!this.app) {
            this.app = initializeApp(environment.firebase, 'secondary');
        }
        const ref = this.db.collection('customers');
        const permServ = this.permissionService;
        return this.app.auth().createUserWithEmailAndPassword(value.email, value.password)
            .then(function (userData) {
                ref.doc(userData.user.uid).set({
                    uid: userData.user.uid,
                    email: value.email,
                    mobile: value.mobile,
                    name: value.name,
                    code: value.code,
                    pricelist: value.pricelist || null,
                    isActive: value.isActive || true,
                    hasTax: value.isActive || true,
                    lastLoginAt: Date.now(),
                    online: false
                });
                permServ.createDoc(userData.user.uid);
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
                this.toastrService.success('Customer Created.');
            });
    }

    updateCustomer(userKey, value) {
        return this.db.collection('customers').doc(userKey).set(value, {merge: true}).then(res => {
            this.toastrService.success('Customer Updated.');
        });
    }


    getCustomer(userKey) {
        return this.db.collection('customers').doc(userKey).snapshotChanges();
    }

    getCustomers() {
        return this.db.collection('customers').snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    uid: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    getActiveCustomers() {
        return this.db.collection('customers', ref => ref.where('isActive', '==', true)).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    uid: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    getPendingCustomers() {
        return this.db.collection('customers', ref => ref.where('isActive', '==', false)).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    uid: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    deleteCustomer(contactKey) {
        return this.db.collection('customers').doc(contactKey).delete().then(res => {
            this.toastrService.error('Customer Deleted.');
        });
    }
}
