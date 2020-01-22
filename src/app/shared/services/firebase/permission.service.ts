import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';
import {CustomerService} from './customer.service';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class PermissionService {

    constructor(public db: AngularFirestore,
                private toastr: ToastrService,
                private customerService: CustomerService
    ) {
    }
    getCustomers() {
        return this.customerService.getCustomers();
    }
    getUserPermissions(uid) {
        return this.db.doc('permission/' + uid).get();
    }
    updateUserPermission(uid, values) {
        return this.db.doc('permission/' + uid).set({items: values});
    }
    addCombinationUsers(uid,key) {
        this.db.collection('combinations').doc(key).update({
            users: firebase.firestore.FieldValue.arrayUnion(uid)
        });
    }
    removeCombinationUsers(uid,key) {
        this.db.collection('combinations').doc(key).update({
            users: firebase.firestore.FieldValue.arrayRemove(uid)
        });
    }
}
