import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {key} from 'flatpickr/dist/types/locale';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
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

    saveImage(id) {

    }

    uploadImage(file, data) {
        let storageRef = firebase.storage().ref();

        let uploadTask = storageRef.child(`${data.id}/${file.name}`).put(file);
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
                console.log('zy el fol', storageRef.child(`${data.id}/${file.name}`).getDownloadURL());
                storageRef.child(`${data.id}/${file.name}`).getDownloadURL().then(downloadURL => {
                    this.db.collection(data.type).doc(data.id).update({
                        pics:firebase.firestore.FieldValue.arrayUnion(downloadURL)
                    });
                })
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
        return this.db.collection(child.type).add(child);
    }

    /* Categories */
    getCategories(): Observable<Category[]> {
        return this.db.collection<any>('category').snapshotChanges().pipe(
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
        return this.db.collection(values.type).doc(key).set(values, {merge: true});
    }

    createCategory(values) {
        return this.db.collection('category').add(values);
    }
}
