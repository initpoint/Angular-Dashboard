import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import * as firebase from 'firebase';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ItemsService implements OnInit {
    lastItem = null;
    lastItemInPriceList = null;
    uploadProgress = 0;
    totalProgress = 0;

    constructor(public db: AngularFirestore, private toastr: ToastrService) {
    }

    ngOnInit() {

    }

    searchByCode(code) {
        return this.db.collection(`combinations`, ref => ref
            .orderBy('code')
            .startAt(code)
            .endAt(code + '\uf8ff')
            .limit(10))
            .valueChanges();
    }

    updateItem(key, newValues) {
        return this.db.collection('combinations').doc(key).set(newValues, {merge: true});
    }

    removeImage(row, path, pic) {
        return this.db.collection('combinations').doc(row.code).update({
            pics: firebase.firestore.FieldValue.arrayRemove(pic)
        }).then(() => {
            firebase.storage().ref().child(path).delete().then(() => {
                this.toastr.success('Image removed.');
            }).catch(function (error) {
                console.log(error);

            });
        });
    }

    uploadImage(file, data) {
        return new Promise((resolve => {
            const storageRef = firebase.storage().ref();
            const uploadTask = storageRef.child(`${data.code}/${file.newName}`).put(file);
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => {
                    // upload in progress
                    this.uploadProgress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
                },
                (error) => {
                    // upload failed
                    console.log(error);
                },
                () => {
                    storageRef.child(`${data.code}/${file.newName}`).getDownloadURL().then(downloadURL => {
                        this.db.collection('combinations').doc(data.code).update({
                            pics: firebase.firestore.FieldValue.arrayUnion(downloadURL)
                        }).then(() => {
                            resolve(downloadURL);
                            this.uploadProgress = 0;
                        });
                    });
                }
            );
        }));
    }

    getItem(id) {
        return this.db.collection('combinations').doc(id).get();
    }


    getItemsWithPriceForPagination(id: any) {
        const fieldPath = new firebase.firestore.FieldPath('prices', id);
        if (!this.lastItemInPriceList) {
            return this.db.collection('combinations',
                ref => ref.where(fieldPath, '>=', 0)
                    .orderBy(fieldPath).limit(20)).get().pipe(
                map(x => x.docs.map(y => {
                    this.lastItemInPriceList = x.docs[x.docs.length - 1];
                    return {
                        id: y.id,
                        ...y.data()
                    };
                }))
            );
        } else {
            return this.db.collection('combinations',
                ref => ref.where(fieldPath, '>=', 0)
                    .startAfter(this.lastItemInPriceList).orderBy(fieldPath).limit(20)).get().pipe(
                map(x => x.docs.map(y => {
                    this.lastItemInPriceList = x.docs[x.docs.length - 1];
                    return {
                        id: y.id,
                        ...y.data()
                    };
                }))
            );

        }
    }

    getItemsForPagination() {
        if (!this.lastItem) {
            return this.db.collection('combinations', ref => ref.orderBy('code').limit(20)).get().pipe(
                map(x => {
                    this.lastItem = x.docs[x.docs.length - 1];
                    return x.docs.map(y => {
                        return {
                            id: y.id,
                            ...y.data()
                        };
                    });
                })
            );
        } else {
            return this.db.collection('combinations', ref => ref.orderBy('code').startAfter(this.lastItem).limit(20)).get().pipe(
                map(x => {
                    this.lastItem = x.docs[x.docs.length - 1];
                    return x.docs.map(y => {
                        return {
                            id: y.id,
                            ...y.data()
                        };
                    });
                })
            );
        }
    }

    getItemsTotalCount() {
        return this.db.doc('meta/items').get();
    }

    getItemsForUser(uid) {
        return this.db.collection('combinations', ref => ref.where('users', 'array-contains', uid)).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    getMetaItems() {
        return this.db.doc('meta/items').get();
    }

    addItem(data) {
        const item = {
            code: data.code || null,
            prices: {},
            pics: [],
            barCodeId: [data.barCodeId],
            size: data.size || null,
            unitCode: data.unitCode || null,
            unitNameAr: data.unitNameAr || null,
            users: [],
            isActive: true
        };
        Object.keys(data).forEach(row => {
            if (row != 'barCodeId') {
                item[row] = data[row];
            }
        });
        return this.db.doc(`combinations/${item.code}`).set(item, {merge: true});
    }

    addItems(data) {
        this.uploadProgress = 0;
        return new Promise(resolve => {
            this.getMetaItems().subscribe(res => {
                const itemsMeta = res.data() || {};
                if (!itemsMeta.itemsCodes) {
                    itemsMeta.itemsCodes = [];
                }
                if (!itemsMeta.count) {
                    itemsMeta.count = 0;
                }
                const itemsToAdd = [];
                const itemsToUpdate = [];
                data.forEach(row => {
                    if (!itemsMeta.itemsCodes.includes(row.code)) {
                        itemsToAdd.push(this.addItem(row).then(() => {
                            this.uploadProgress += 1 / data.length * 100;
                        }));
                        itemsMeta.itemsCodes.push(row.code);
                        itemsMeta.count += 1;
                    } else {
                        itemsToUpdate.push(this.addItem(row).then(() => {
                            this.uploadProgress += 1 / data.length * 100;
                        }));
                    }
                });
                this.db.doc('meta/items').set(itemsMeta);
                Promise.all([...itemsToAdd, ...itemsToUpdate]).then(() => {
                    this.toastr.success(`${itemsToAdd.length} Items Added.`);
                    this.toastr.success(`${itemsToUpdate.length} Items Updated.`);
                    this.uploadProgress = 100;
                    resolve();
                });
            });
        });
    }
}
