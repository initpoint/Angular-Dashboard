import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map, take} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Category} from '../../model/category.model';
import * as firebase from 'firebase';
import {reject} from 'q';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    metaData;
    itemArray;

    constructor(public db: AngularFirestore, private toastr: ToastrService) {

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

    getItems(opts) {
        // return new Promise(resolve => {
        //     // const obj = {};
        //     // if (!this.itemArray) {
        //     //     resolve({groupCount: 0, data: [], totalCount: 0});
        //     //     return;
        //     // }
        //     // if (opts.requireGroupCount) {
        //     //     const group = opts.group[0].selector;
        //     //    if (group.startsWith('rank')) {
        //     //         obj['groupCount'] = this.itemArray.category[opts.filter[2]].children.length;
        //     //         obj['data'] = this.itemArray.category[opts.filter[2]].children.map(key => {
        //     //             this.itemArray.ranking[key].items = null;
        //     //             return this.itemArray.ranking[key];
        //     //         });
        //     //         obj['totalCount'] = this.itemArray.category[opts.filter[2]].count;
        //     //         resolve(Object.assign({}, obj));
        //     //     } else if (group.startsWith('mat')) {
        //     //         obj['groupCount'] = this.itemArray.ranking[opts.filter[2][2]].children.length;
        //     //         obj['data'] = this.itemArray.ranking[opts.filter[2][2]].children.map(key => {
        //     //             this.itemArray.material[key].items = null;
        //     //             return this.itemArray.material[key];
        //     //         });
        //     //         obj['totalCount'] = this.itemArray.ranking[opts.filter[2][2]].count;
        //     //         resolve(Object.assign({}, obj));
        //     //     } else {
        //     //         console.log('group not exist');
        //     //     }
        //     // } else {
        //     //     const filter = opts.filter;
        //     //     this.db.collection('item', ref => {
        //     //         let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        //     //         const whereArgs = [];
        //     //         if (filter[1] === 'and') {
        //     //             whereArgs.push(filter[4][2]);
        //     //         } else if (filter[1] === 'or') {
        //     //             filter.forEach(f => {
        //     //                 if (!(f === 'or')) {
        //     //                     whereArgs.push(f[4][2]);
        //     //                 }
        //     //             });
        //     //         } else {
        //     //             console.log('Filter other case');
        //     //         }
        //     //         query = query.where('materialCode', 'in', whereArgs);
        //     //         return query;
        //     //     }).snapshotChanges().pipe(
        //     //         map(x => x.map(y => {
        //     //             return {
        //     //                 id: y.payload.doc.id,
        //     //                 ...y.payload.doc.data()
        //     //             };
        //     //         }))
        //     //     ).subscribe(itemsRes => {
        //     //         const sortBy = [{
        //     //             prop: 'rankingCode',
        //     //             direction: 1
        //     //         }, {
        //     //             prop: 'materialCode',
        //     //             direction: 1
        //     //         }];
        //     //         itemsRes.sort(function (a, b) {
        //     //             let i = 0, result = 0;
        //     //             while (i < sortBy.length && result === 0) {
        //     //                 result = sortBy[i].direction * (a[sortBy[i].prop].toString() < b[sortBy[i].prop].toString() ? -1 :
        //     //                     (a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString() ? 1 : 0));
        //     //                 i++;
        //     //             }
        //     //             return result;
        //     //         });
        //     //         obj['data'] = itemsRes;
        //     //         obj['totalCount'] = this.metaData.totalCount;
        //     //         resolve(Object.assign({}, obj));
        //     //     });
        //     // }
        //     console.log(this.itemArray)
        //     resolve(this.itemArray);
        // });
        let Values = this.itemArray;
        let ItemArray = Object.keys(Values).map(function (key) {
            return Values[key];
        });

        return new Promise(resolve => {
            let obj = {};
            if (!ItemArray) {
                resolve({groupCount: 0, data: [], totalCount: 0});
                return;
            }
            obj['data'] = ItemArray;
            resolve({data: obj['data']});
        });
    }

}
