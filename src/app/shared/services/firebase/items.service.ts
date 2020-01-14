import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import * as firebase from 'firebase';
import {environment} from '../../../../environments/environment';
import {initializeApp} from 'firebase';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ItemsService implements OnInit {
    metaData;
    itemArray;

    constructor(public db: AngularFirestore, private toastr: ToastrService) {

    }

    ngOnInit() {
        this.db.doc('item/itemArray').snapshotChanges().subscribe(res => {
            this.itemArray = res.payload.data();
        });
    }

    updateItem(key, newValues) {
        return new Promise(resolve => {
            this.db.collection('item').doc(key).set(newValues, {merge: true}).then(value => {
                this.toastr.success('Item updated.');
                resolve();
            });
        });
    }


    updateMetaDate() {
        this.db.doc('meta/items').set(this.metaData);
    }

    getItemsSync() {
        return this.db.doc('item/itemArray').get();
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
                    document.getElementsByClassName('list-group-item')[0]
                        .insertAdjacentHTML('afterbegin',
                            '<div class="avatar newPhotos" style="margin-left: 0;"><img class="b-r-8" style="height: 128px;width: 128px;padding-top: 3px" alt="" src="' + downloadURL + '"> <button title="Success" style="right: -1px;bottom: -1px;" class="status status-100 bg-success"><i style="margin-left: -1px;" class="fa fa-check"></i></button>\n' +
                            '</div>');
                });
            }
        );
    }

    getItemPhotos(id) {
        return this.db.collection('combinations').doc(id).get();
    }

    getItems() {
        return new Promise((resolve, reject) => {
            if (!this.itemArray) {
                this.db.doc('item/itemArray').snapshotChanges().subscribe(res => {
                    this.itemArray = res.payload.data();
                    resolve({data: Object.keys(this.itemArray).map(key => this.itemArray[key])});
                });
            } else {
                resolve({data: Object.keys(this.itemArray).map(key => this.itemArray[key])});
            }
        });
    }

}
