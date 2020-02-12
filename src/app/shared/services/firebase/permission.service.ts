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

    updateUserPermission(uid, newPermissions, addedPerms, removedPerms, unchangedPerms) {
        console.log('removedperms', removedPerms);
        return Promise.all(removedPerms.map(docId => {
            const item = this.itemsService.itemArray.find(i => i.code === docId);
            console.log(item);
            if (item.isNewList) {
                item.isNewList.splice(item.isNewList.indexOf(uid), 1);
            } else {
                item.isNewList = [];
            }
            console.log(item);
            return this.removeCustomerFromCombination(uid, docId);
        })).then(res1 => {
            this.toastr.success(`Removed ${removedPerms.length} Permissions`);

            this.db.doc('permission/' + uid).set({items: newPermissions}).then(res => {
                Promise.all(addedPerms.map(docId => {
                    const item = this.itemsService.itemArray.find(i => i.code === docId);
                    if (item.isNewList && !item.isNewList.includes(uid)) {
                        item.isNewList.push(uid);
                    } else {
                        item.isNewList = [uid];
                    }
                    return this.addCustomerToCombination(uid, docId);
                })).then(res2 => {
                    this.toastr.success(`Added ${addedPerms.length} Permissions`);

                    if (addedPerms.length > 0) {
                        Promise.all(unchangedPerms.map(docId => {
                            const item = this.itemsService.itemArray.find(i => i.code === docId);
                            if (item.isNewList) {
                                item.isNewList.splice(item.isNewList.indexOf(uid), 1);
                            } else {
                                item.isNewList = [];
                            }
                            return this.makeCombinationNotNewForCusotmer(uid, docId);
                        })).then(res3 => {
                            this.itemsService.updateItems();
                            this.toastr.success(`Made ${unchangedPerms.length} Permissions Not New`);
                        });
                    } else {
                        this.itemsService.updateItems();
                        this.toastr.success(`No Changes To New Status`);
                    }
                });
            });
        });
    }

    createDoc(uid) {
        return this.db.doc('permission/' + uid).set({items: []});
    }

    addCustomerToCombination(uid, docId) {
        return this.db.collection('combinations').doc(docId).update({
            users: firebase.firestore.FieldValue.arrayUnion(uid),
            isNewList: firebase.firestore.FieldValue.arrayUnion(uid)
        });
    }

    removeCustomerFromCombination(uid, docId) {
        return this.db.collection('combinations').doc(docId).update({
            users: firebase.firestore.FieldValue.arrayRemove(uid),
            isNewList: firebase.firestore.FieldValue.arrayRemove(uid)
        });
    }

    makeCombinationNotNewForCusotmer(uid, docId) {
        return this.db.collection('combinations').doc(docId).update({
            isNewList: firebase.firestore.FieldValue.arrayRemove(uid)
        });
    }
}
