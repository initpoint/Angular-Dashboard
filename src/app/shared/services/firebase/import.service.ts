import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {ItemsService} from './items.service';

@Injectable({
    providedIn: 'root'
})
export class ImportService {

    constructor(public db: AngularFirestore,
                private toastr: ToastrService,
                private itemsService: ItemsService,
    ) {
    }

    importJSON(data) {
        let chunk = 100;
        let allNewCombinations = [];
        data.forEach(dataItem => {
            allNewCombinations.push(data.splice(0, chunk));
        });

        allNewCombinations.forEach(newCombination => {
            const docData = [];
            this.itemsService.lastDocIndex++;
            newCombination.forEach(dataItem => {
                let Item = this.itemsService.itemArray.find(item => item.code === dataItem.code);
                if (this.itemsService.itemArray && Item) {
                    if (!Item.barCodeId.find(code => code === dataItem.barCodeId)) {
                        Item.barCodeId.push(dataItem.barCodeId);
                    }
                    Item.size = dataItem.size || null;
                    Item.unitCode = dataItem.unitCode || null;
                    Item.unitNameAr = dataItem.unitNameAr || null;
                    Item.nameArFull = dataItem.nameArFull || null;
                } else {
                    let item =
                        {
                            prices: {},
                            pics: [],
                            barCodeId: [],
                            docIndex: this.itemsService.lastDocIndex,
                            isNew: false,
                            isActive: true,
                            size: dataItem.size || null,
                            unitCode: dataItem.unitCode || null,
                            unitNameAr: dataItem.unitNameAr || null
                        };
                    item.barCodeId.push(dataItem.barCodeId);
                    Object.keys(dataItem).forEach(row => {
                        if (row != 'barCodeId') {
                            item[row] = dataItem[row];
                        }
                    });
                    docData.push(item);
                }
            });
            this.itemsService.updateItems();
            if (docData.length != 0) {
                return this.db.collection('item').doc(`array-${this.itemsService.lastDocIndex}`).set({items: docData}).then(res => {
                    this.toastr.success('ItemArray updated.');
                });
            }
        });
    }

    importToPhones(data) {
        data.forEach(dataItem => {
                let item = this.itemsService.itemArray.find(item => item.code === dataItem.code);
                if (this.itemsService.itemArray && item) {
                    if (!item.barCodeId.find(code => code === dataItem.barCodeId)) {
                        item.barCodeId.push(dataItem.barCodeId);
                    }
                    item.size = dataItem.size || null;
                    item.unitCode = dataItem.unitCode || null;
                    item.unitNameAr = dataItem.unitNameAr || null;
                    item.nameArFull = dataItem.nameArFull || null;
                } else {
                   item =
                        {
                            code: dataItem.code || null,
                            prices: {},
                            pics: [],
                            barCodeId: [],
                            isNew: false,
                            isActive: true,
                            size: dataItem.size || null,
                            unitCode: dataItem.unitCode || null,
                            unitNameAr: dataItem.unitNameAr || null
                        };
                    item.barCodeId.push(dataItem.barCodeId);
                    Object.keys(dataItem).forEach(row => {
                        if (row != 'barCodeId') {
                            item[row] = dataItem[row];
                        }
                    });
                }
            this.db.collection('combinations').doc(item.code).set(item)
        });
        this.itemsService.updateItems();
        // const b = this.db.firestore.batch();
        // data.forEach(item => {
        //     console.log(data.find(items=> items.barCodeId === item.barCodeId))
        //     const dataItem = {
        //         isNew: false,
        //         isActive: true,
        //         size: item.size || null,
        //         unitCode: item.unitCode || null,
        //         unitNameAr: item.unitNameAr || null,
        //         prices: {},
        //         pics: [],
        //         ...item
        //     };
        //     dataItem.barCodeId = [item.barCodeId];
        //     b.set(this.db.doc('combinations/' + item.code).ref, dataItem);
        // });
        // return b.commit().then(res => {
        //     this.toastr.success('Combinations added.');
        // });
    }

    importPriceList(rows, listID) {
        if (this.itemsService.itemArray.find(item => item.code === rows.code)) {
            this.itemsService.itemArray.find(item => item.code === rows.code).prices[listID] = rows.price;
            this.db.collection('combinations', ref => ref.where('code', '==', rows.code)).get().subscribe(res => {
                // console.log(res)
                if (!res.empty) {
                    res.docs[0].ref.update(this.itemsService.itemArray.find(item => item.code === rows.code));
                }
            });
        }
    }
}
