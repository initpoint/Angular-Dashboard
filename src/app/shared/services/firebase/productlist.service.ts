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

    updateMetaDate() {
        this.db.doc('meta/items').set(this.metaData);
    }

    insertItem(values: any) {
        this.metaData.category = this.metaData.category === undefined ? {} : this.metaData.category;
        if (this.metaData.category[values.categoryCode] === undefined) {
            this.metaData.category[values.categoryCode] = {
                key: values.categoryCode,
                count: 1,
                nameAr: values.categoryNameAr,
                children: [],
                items: null
            };
            this.metaData.categoryCount = this.metaData.categoryCount === undefined ? 1 : this.metaData.categoryCount + 1;

        } else {
            this.metaData.category[values.categoryCode].count += 1;
        }
        if (!this.metaData.category[values.categoryCode].children.includes(values.rankingCode)) {
            this.metaData.category[values.categoryCode].children.push(values.rankingCode);
        }
        this.metaData.ranking = this.metaData.ranking === undefined ? {} : this.metaData.ranking;
        if (this.metaData.ranking[values.rankingCode] === undefined) {
            this.metaData.ranking[values.rankingCode] = {
                key: values.rankingCode,
                count: 1,
                nameAr: values.rankingNameAr,
                children: [],
                items: null
            };
            this.metaData.rankingCount = this.metaData.rankingCount === undefined ? 1 : this.metaData.rankingCount + 1;
        } else {
            this.metaData.ranking[values.rankingCode].count += 1;
        }
        if (!this.metaData.ranking[values.rankingCode].children.includes(values.rankingCode)) {
            this.metaData.ranking[values.rankingCode].children.push(values.materialCode);
        }
        this.metaData.material = this.metaData.material === undefined ? {} : this.metaData.material;
        if (this.metaData.material[values.materialCode] === undefined) {
            this.metaData.material[values.materialCode] = {
                key: values.materialCode,
                count: 1,
                nameAr: values.materialNameAr,
                children: [],
                items: null
            };
            this.metaData.materialCount = this.metaData.materialCount === undefined ? 1 : this.metaData.materialCount + 1;
        } else {
            this.metaData.material[values.materialCode].count += 1;
        }
        if (!this.metaData.material[values.materialCode].children.includes(values.rankingCode)) {
            this.metaData.material[values.materialCode].children.push(values.code);
        }
        this.metaData.totalCount = this.metaData.totalCount === undefined ? 1 : this.metaData.totalCount + 1;
        this.updateMetaDate();
        return this.db.collection('item').doc(values.materialCode + ' | ' + values.code).set(values).then(res => {
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
        // console.log(opts);
        return new Promise(resolve => {
            const obj = {};
            if (!this.metaData) {
                resolve({groupCount: 0, data: [], totalCount: 0});
                return;
            }
            if (opts.requireGroupCount) {
                const group = opts.group[0].selector;
                if (group.startsWith('cat')) {
                    obj['groupCount'] = this.metaData.categoryCount;
                    obj['data'] = Object.keys(this.metaData.category).map(key => {
                        this.metaData.category[key].items = null;
                        return this.metaData.category[key];
                    });
                    obj['totalCount'] = this.metaData.totalCount;
                    resolve(Object.assign({}, obj));
                } else if (group.startsWith('rank')) {
                    obj['groupCount'] = this.metaData.category[opts.filter[2]].children.length;
                    obj['data'] = this.metaData.category[opts.filter[2]].children.map(key => {
                        this.metaData.ranking[key].items = null;
                        return this.metaData.ranking[key];
                    });
                    obj['totalCount'] = this.metaData.category[opts.filter[2]].count;
                    resolve(Object.assign({}, obj));
                } else if (group.startsWith('mat')) {
                    obj['groupCount'] = this.metaData.ranking[opts.filter[2][2]].children.length;
                    obj['data'] = this.metaData.ranking[opts.filter[2][2]].children.map(key => {
                        this.metaData.material[key].items = null;
                        return this.metaData.material[key];
                    });
                    obj['totalCount'] = this.metaData.ranking[opts.filter[2][2]].count;
                    resolve(Object.assign({}, obj));
                } else {
                    console.log('group not exist');
                }
            } else {
                const filter = opts.filter;
                // console.log('filter', filter);
                this.db.collection('item', ref => {
                    let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
                    const whereArgs = [];
                    if (filter[1] === 'and') {
                        whereArgs.push(filter[4][2]);
                    } else if (filter[1] === 'or') {
                        filter.forEach(f => {
                            if (!(f === 'or')) {
                                whereArgs.push(f[4][2]);
                            }
                        });
                    } else {
                        console.log('Filter other case');
                    }
                    query = query.where('materialCode', 'in', whereArgs);
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
                    const sortBy = [{
                        prop: 'categoryCode',
                        direction: 1
                    }, {
                        prop: 'rankingCode',
                        direction: 1
                    }, {
                        prop: 'materialCode',
                        direction: 1
                    }];
                    console.log(itemsRes);
                    itemsRes.sort(function (a, b) {
                        let i = 0, result = 0;
                        while (i < sortBy.length && result === 0) {
                            result = sortBy[i].direction * (a[sortBy[i].prop].toString() < b[sortBy[i].prop].toString() ? -1 :
                                (a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString() ? 1 : 0));
                            i++;
                        }
                        return result;
                    });

                    // console.log(itemsRes[0].id);
                    obj['data'] = itemsRes;
                    // console.log(obj);
                    resolve(Object.assign({}, obj));
                });
            }
        });

    }
}
