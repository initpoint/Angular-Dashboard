import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';
import {CustomerService} from './customer.service';
import * as firebase from 'firebase';

import {ItemsService} from './items.service';
import {formatDate} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PermissionService {

    constructor(public db: AngularFirestore,
                private toastrService: ToastrService,
                public itemsService: ItemsService
    ) {
    }

    getUserPermissions(uid) {
        return this.db.doc('permission/' + uid).get();
    }

    updateUserPermission(uid, newPermissions, addedPerms, removedPerms, unchangedPerms) {
        const customerPermissionsDoc = {
            permissions: newPermissions,
            lastTransactionDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss.SSSSSS', 'en-US'),
            transactions: firebase.firestore.FieldValue.arrayUnion({
                date: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss.SSSSSS', 'en-US'),
                addedPerms: addedPerms,
                removedPerms: removedPerms
            })
        };
        return Promise.all(removedPerms.map(docId => {
            this.itemsService.getItem(docId).subscribe(doc => {
                const item = doc.data();
                if (item.isNewList) {
                    item.isNewList.splice(item.isNewList.indexOf(uid), 1);
                } else {
                    item.isNewList = [];
                }
                return this.removeCustomerFromCombination(uid, docId);
            });
        })).then(res1 => {
            this.toastrService.success(`Removed ${removedPerms.length} Permissions`);

            this.db.doc('permission/' + uid).set(customerPermissionsDoc,{merge:true}).then(res => {
                Promise.all(addedPerms.map(docId => {
                    this.itemsService.getItem(docId).subscribe(doc => {
                        const item = doc.data();
                        if (item.isNewList && !item.isNewList.includes(uid)) {
                            item.isNewList.push(uid);
                        } else {
                            item.isNewList = [uid];
                        }
                        return this.addCustomerToCombination(uid, docId);
                    });
                })).then(res2 => {
                    this.toastrService.success(`Added ${addedPerms.length} Permissions`);

                    if (addedPerms.length > 0) {
                        Promise.all(unchangedPerms.map(docId => {
                            this.itemsService.getItem(docId).subscribe(doc => {
                                const item = doc.data();
                                if (item.isNewList) {
                                    item.isNewList.splice(item.isNewList.indexOf(uid), 1);
                                } else {
                                    item.isNewList = [];
                                }
                                return this.makeCombinationNotNewForCusotmer(uid, docId);
                            });
                        })).then(res3 => {
                            // this.itemsService.updateItems();
                            this.toastrService.success(`Made ${unchangedPerms.length} Permissions Not New`);
                        });
                    } else {
                        // this.itemsService.updateItems();
                        this.toastrService.success(`No Changes To New Status`);
                    }
                });
            });
        });
    }

    createDoc(uid) {
        const customerPermissionsDoc = {
            permissions: [],
            lastTransactionDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss.SSSSSS', 'en-US'),
            transactions: []
        };
        return this.db.doc('permission/' + uid).set(customerPermissionsDoc);
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
