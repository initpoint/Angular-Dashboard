import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';
import {CustomerService} from './customer.service';
import * as firebase from 'firebase';

import {ItemsService} from './items.service';

@Injectable({
    providedIn: 'root'
})
export class PermissionService {

    constructor(public db: AngularFirestore,
                private toastr: ToastrService,
                public itemsService: ItemsService,
                public customerService: CustomerService
    ) {
    }

    getUserPermissions(uid) {
        return this.db.doc('permission/' + uid).get();
    }

    updateUserPermission(uid, newPermissions, addedPerms, removedPerms) {
        Promise.all(removedPerms.map(docId => this.removeCombinationUsers(uid, docId))).then(res1 => {
            this.toastr.success(`Removed ${removedPerms.length} Permissions`);
            this.db.doc('permission/' + uid).set({items: newPermissions}).then(res => {
                Promise.all(addedPerms.map(docId => this.addCombinationUsers(uid, docId))).then(res2 => {
                    this.toastr.success(`Added ${addedPerms.length} Permissions`);
                });
            });
        });
    }

    createDoc(uid) {
        return this.db.doc('permission/' + uid).set({items: []});
    }

    addCombinationUsers(uid, docId) {
        return this.db.collection('combinations').doc(docId).update({
            users: firebase.firestore.FieldValue.arrayUnion(uid)
        });
    }

    removeCombinationUsers(uid, docId) {
        return this.db.collection('combinations').doc(docId).update({
            users: firebase.firestore.FieldValue.arrayRemove(uid)
        });
    }
}
