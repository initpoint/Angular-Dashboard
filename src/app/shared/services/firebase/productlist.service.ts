import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map, take} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Category} from '../../model/category.model';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class ProductlistService {
    private metaData;

    constructor(public db: AngularFirestore, private toastr: ToastrService) {
        this.db.doc('meta/items').snapshotChanges().subscribe(res => {
            this.metaData = res.payload.data();
            console.log('metaData', this.metaData);
        });
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

    // getItems(id, collection) {
    //     return this.db.collection(collection, ref => ref.where('headId', '==', id)).snapshotChanges().pipe(
    //         map(x => x.map(y => {
    //             return {
    //                 id: y.payload.doc.id,
    //                 ...y.payload.doc.data()
    //             };
    //         }))
    //     );
    // }

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

    insertItem(values: any) {
        this.db.doc('meta/items').get().subscribe(res => {
            const data = res.data();

            data.category = data.category === undefined ? {} : data.category;
            if (data.category[values.categoryCode] === undefined) {
                data.category[values.categoryCode] = {
                    key: values.categoryCode,
                    count: 1,
                    nameAr: values.categoryNameAr,
                    children: [],
                };
                data.categoryCount = data.categoryCount === undefined ? 1 : data.categoryCount + 1;

            } else {
                data.category[values.categoryCode].count += 1;
            }

            data.category[values.categoryCode].children.push(values.rankingCode);
            data.ranking = data.ranking === undefined ? {} : data.ranking;
            if (data.ranking[values.rankingCode] === undefined) {
                data.ranking[values.rankingCode] = {
                    key: values.rankingCode,
                    count: 1,
                    nameAr: values.rankingNameAr,
                    children: [],
                };
                data.rankingCount = data.rankingCount === undefined ? 1 : data.rankingCount + 1;
            } else {
                data.ranking[values.rankingCode].count += 1;
            }


            data.ranking[values.rankingCode].children.push(values.materialCode);
            data.material = data.material === undefined ? {} : data.material;
            if (data.material[values.materialCode] === undefined) {
                data.material[values.materialCode] = {
                    key: values.materialCode,
                    count: 1,
                    nameAr: values.materialNameAr,
                    children: [],
                };
                data.materialCount = data.materialCount === undefined ? 1 : data.materialCount + 1;
            } else {
                data.material[values.materialCode].count += 1;
            }

            data.material[values.materialCode].children.push(values.code);
            data.totalCount = data.totalCount === undefined ? 1 : data.totalCount + 1;
            res.ref.set(data);
        });
        return this.db.collection('item').add(values).then(res => {
            this.toastr.success('Item added');
        });
    }

    removeAllItems() {
        this.db.doc('meta/items').ref.set({});
        const batch = this.db.firestore.batch();
        this.db.firestore.collection(`item`).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                batch.delete(doc.ref);
            });
            batch.commit();
            this.toastr.success('All Items Removed');
        });
    }

    getItems(opts) {
        console.log('opts', opts);
        return new Promise(resolve => {
            const obj = {};
            if (opts.requireGroupCount) {
                const group = opts.group[0].selector;
                if (group.startsWith('cat')) {
                    obj['groupCount'] = this.metaData.categoryCount;
                    obj['data'] = Object.keys(this.metaData.category).map(key => {
                        this.metaData.category[key].items = null;
                        return this.metaData.category[key];
                    });
                    obj['totalCount'] = this.metaData.totalCount;
                    resolve(obj);
                } else if (group.startsWith('rank')) {
                    obj['groupCount'] = this.metaData.category[opts.filter[2]].children.length;
                    obj['data'] = this.metaData.category[opts.filter[2]].children.map(key => {
                        this.metaData.ranking[key].items = null;
                        return this.metaData.ranking[key];
                    });
                    obj['totalCount'] = this.metaData.category[opts.filter[2]].count;
                    resolve(obj);
                } else if (group.startsWith('mat')) {
                    obj['groupCount'] = this.metaData.ranking[opts.filter[2][2]].children.length;
                    obj['data'] = this.metaData.ranking[opts.filter[2][2]].children.map(key => {
                        this.metaData.material[key].items = null;
                        return this.metaData.material[key];
                    });
                    obj['totalCount'] = this.metaData.ranking[opts.filter[2][2]].count;
                    resolve(obj);
                } else {
                    console.log('group not exist');
                }
            } else {
                console.log('requireGroupCount = False');

                const filter = opts.filter;
                console.log('filter', filter);
                this.db.collection('item', ref => {
                    let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
                    let whereArgs = [];
                    if (filter[1] === 'and') {
                        whereArgs.push([filter[0][0], filter[0][2]]);
                        whereArgs.push([filter[2][0], filter[2][2]]);
                        whereArgs.push([filter[4][0], filter[4][2]]);
                    } else if (filter[1] === 'or') {
                        filter.forEach(f => {
                            if (!(f === 'or')) {
                                whereArgs.push([f[0][0], f[0][2]]);
                                whereArgs.push([f[2][0], f[2][2]]);
                                whereArgs.push([f[4][0], f[4][2]]);
                            }
                        });
                    } else {
                        console.log('Filter other case');
                    }
                    whereArgs.forEach(arg => {
                        query = query.where(arg[0], '==', arg[1]);
                        // firebase.firestore().collection('abc')
                    });
                    // query = query.orderBy('categoryCode').orderBy('rankingCode');
                    return query;
                }).snapshotChanges().pipe(
                    map(x => x.map(y => {
                        return {
                            id: y.payload.doc.id,
                            ...y.payload.doc.data()
                        };
                    }))
                ).subscribe(itemsRes => {
                    obj['data'] = itemsRes;
                    resolve(obj);
                });
            }

            console.log(obj);
            // debugger;
            // resolve({...obj});
        });

    }
}
