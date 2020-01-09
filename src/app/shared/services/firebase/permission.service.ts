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

    addPermission(customerId,Collection) {
        return this.db.collection(Collection.type).doc(Collection.id).update({
            customers: firebase.firestore.FieldValue.arrayUnion(customerId)
        }).then(() => {
            this.toastr.success('Customer '+customerId+' Can now access '+Collection.type+' ['+Collection.id+'].');
        });
    }
    removePermission(customerId,Collection) {
        return this.db.collection(Collection.type).doc(Collection.id).update({
            customers: firebase.firestore.FieldValue.arrayRemove(customerId)
        }).then(() => {
            this.toastr.error('Customer '+customerId+' Can not access '+Collection.type+' ['+Collection.id+'] anymore.');
        });
    }
    getPermissions() {
        return this.db.collection<any>('permissions').snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    getPermission(key) {
        return this.db.collection('permissions').doc(key).get().toPromise();
    }

    updatePermission(key, values) {
        this.toastr.success('Item updated.');
        return this.db.collection('permissions').doc(key).set(values, {merge: true});
    }

    updateItem(key, values) {
        this.toastr.success('Item updated.');
        return this.db.collection('customers').doc(key).set(values, {merge: true});
    }

    createPermission(values) {
        this.toastr.success('Item added.');
        return this.db.collection('permissions').add(values);
    }

    removeItem(itemKey: any, PermissionKey: any) {
        let newItem = {
            permissions: {}
        };
        newItem.permissions[PermissionKey] = null;
        return this.updatePermission(itemKey, newItem);
    }
}
