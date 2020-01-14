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

    // addPermission(customer, Collection) {
    //     return this.db.collection(Collection.type).doc(Collection.id).update({
    //         customers: firebase.firestore.FieldValue.arrayUnion(customer.uid)
    //     }).then(() => {
    //         this.toastr.success('Customer ' + customer.name + ' Can now access ' + Collection.type + ' [' + Collection.code + '].');
    //     });
    // }

    // removePermission(customer, Collection) {
    //     return this.db.collection(Collection.type).doc(Collection.id).update({
    //         customers: firebase.firestore.FieldValue.arrayRemove(customer.uid)
    //     }).then(() => {
    //         this.toastr.error('Customer ' + customer.name + ' Can not access ' + Collection.type + ' [' + Collection.code + '] anymore.');
    //     });
    // }

    getUserPermissions(uid) {
        return this.db.doc('permission/' + uid).get();
    }

    // getPermission(key) {
    //     return this.db.collection('permissions').doc(key).get().toPromise();
    // }

    updateUserPermission(uid, values) {
        return this.db.doc('permission/' + uid).set({items: values});
    }

    // updateItem(key, values) {
    //     this.toastr.success('Item updated.');
    //     return this.db.collection('customers').doc(key).set(values, {merge: true});
    // }

    // createPermission(values) {
    //     this.toastr.success('Item added.');
    //     return this.db.collection('permissions').add(values);
    // }

    // removeItem(itemKey: any, PermissionKey: any) {
    //     let newItem = {
    //         permissions: {}
    //     };
    //     newItem.permissions[PermissionKey] = null;
    //     return this.updatePermission(itemKey, newItem);
    // }
}
