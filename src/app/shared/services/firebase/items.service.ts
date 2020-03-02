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

    constructor(public db: AngularFirestore, private toastr: ToastrService) {
    }

    ngOnInit() {

    }

    updateItem(key, newValues) {
        return new Promise(resolve => {
            this.db.collection('combinations').doc(key).set(newValues, {merge: true}).then(value => {
                this.toastr.success('Item updated.');
                resolve();
            });
        });
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
                    console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100);
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
                        });
                    });
                }
            );
        }));
    }

    getItem(id) {
        return this.db.collection('combinations').doc(id).get();
    }

    getItemsWithPrices(pricelistId) {
        return this.db.collection('combinations', ref => ref.where(new firebase.firestore.FieldPath('prices', pricelistId), '>', 0)).get();
    }

    getItems() {
        return this.db.collection('combinations').snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
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
}
