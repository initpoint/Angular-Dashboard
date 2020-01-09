import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Category} from '../../model/category.model';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(public db: AngularFirestore,
                private toastr: ToastrService,
    ) {
    }


    removeImage(row, path, pic) {

        return this.db.collection(row.type).doc(row.id).update({
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

        let uploadTask = storageRef.child(`${data.id}/${file.newName}`).put(file);
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
                storageRef.child(`${data.id}/${file.newName}`).getDownloadURL().then(downloadURL => {
                    this.db.collection(data.type).doc(data.id).update({
                        pics: firebase.firestore.FieldValue.arrayUnion(downloadURL)
                    });
                    document.getElementsByClassName('list-group-item')[0].insertAdjacentHTML('afterbegin', '<div class="avatar new-photos" style="margin-left: 0;"><img class="b-r-8" style="height: 128px;width: 128px;padding-top: 3px" alt="" src="' + downloadURL + '"> <button title="Success" style="right: -1px;bottom: -1px;" class="status status-100 bg-success"><i class="fa fa-check"></i></button>\n' +
                        '</div>');
                });
            }
        );
    }

    getItems(id, collection) {
        return this.db.collection(collection, ref => ref.where('headId', '==', id)).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    addChild(child) {
        this.db.collection(child.parent_type).doc(child.headId).set({hasChildren: true}, {merge: true});
        if (child.parent_type == 'material') {
            child.prices = {};
            child.pics = [];
        }
        return this.db.collection(child.type).add(child).then(res => {
            this.toastr.success('Item added.');
        });
    }

    getCombinations() {
        return this.db.collection('combination').snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    /* Categories */
    getCategories() {
        return this.db.collection('category').snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    getCategory(key) {
        return this.db.collection('category').doc(key).snapshotChanges();
    }

    setTreeAttr(item, attr) {
        if (item.type == 'category') {
            this.updateItem(item.id, item);
            this.db.collection('ranking', ref => ref.where('headId', '==', item.id)).get().subscribe((ranks) => {
                ranks.docs.forEach((rank) => {
                    rank.ref.set(attr, {merge: true});
                    this.setMaterialsAttr(rank.ref.id, attr);
                });
            });
        } else if (item.type == 'ranking') {
            this.updateItem(item.id, item);
            this.setMaterialsAttr(item.id, attr);
        } else if (item.type == 'material') {
            this.updateItem(item.id, item);
            this.setCombinationsAttr(item.id, attr);
        } else if (item.type == 'combination') {
            this.updateItem(item.id, item);
        }
        this.toastr.success('Item updated.');
    }

    setMaterialsAttr(parentId, attr) {
        this.db.collection('material', ref => ref.where('headId', '==', parentId)).get().subscribe((materials) => {
            materials.docs.forEach((material) => {
                material.ref.set(attr, {merge: true});
                this.setCombinationsAttr(material.ref.id, attr);
            });
        });
    }

    setCombinationsAttr(parentId, attr) {
        this.db.collection('combination', ref => ref.where('headId', '==', parentId)).get().subscribe((combinations) => {
            combinations.docs.forEach((combination) => {
                combination.ref.set(attr, {merge: true});
            });
        });
    }

    updateItem(key, values) {
        this.toastr.success('Item updated.');
        return this.db.collection(values.type).doc(key).set(values, {merge: true});
    }

    createCategory(values) {
        return this.db.collection('category').add(values).then(res => {
            this.toastr.success('Item added.');
        });
    }
}
