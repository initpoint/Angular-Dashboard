import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import * as firebase from 'firebase';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ItemsService implements OnInit {
    //itemArray;
    //lastDocIndex: number = 0;

    constructor(public db: AngularFirestore, private toastr: ToastrService) {

        // this.db.collection('item').snapshotChanges().pipe(
        //     map(x => {
        //         let thev = {
        //             array: [],
        //             lastDocIndex: 0
        //         };
        //         x.forEach(doc => {
        //             thev.array = thev.array.concat(doc.payload.doc.data()['items']);
        //             thev.lastDocIndex = Math.max(parseInt(doc.payload.doc.id.split('-')[1]), thev.lastDocIndex);
        //         });
        //         return thev;
        //     })
        // ).subscribe(data => {
        //     this.lastDocIndex = data.lastDocIndex;
        //     this.itemArray = data.array;
        // });
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


    toggleItem(id, data) {
        return this.db.collection('combinations').doc(id).set({isNew: data.value}, {merge: true}).then(res => {
            this.toastr.success('Combination updated.');
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
        let storageRef = firebase.storage().ref();
        let uploadTask = storageRef.child(`${data.code}/${file.newName}`).put(file);
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
                    });
                    if (data.code) {
                        document.getElementsByClassName('list-group-item')[0]
                            .insertAdjacentHTML('afterbegin',
                                '<div class="avatar newPhotos" style="margin-left: 0;"><img class="b-r-8" style="height: 128px;width: 128px;padding-top: 3px" alt="" src="' + downloadURL + '"> <button title="Success" style="right: -1px;bottom: -1px;" class="status status-100 bg-success"><i style="margin-left: -1px;" class="fa fa-check"></i></button>\n' +
                                '</div>');
                    }
                });
            }
        );
    }

    getItem(id) {
        return this.db.collection('combinations').doc(id).get();
    }

    getItemsWithPrices(pricelistId) {
        return this.db.collection('combinations',ref => ref.where(new firebase.firestore.FieldPath('prices', pricelistId), '>', 0)).get();
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
        ;
    }

}
