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
                public itemsService: ItemsService,
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
                let item = this.itemsService.itemArray.find(item => item.code === dataItem.code);
                if (this.itemsService.itemArray && item) {
                    if (!this.itemsService.itemArray.find(item => item.code === dataItem.code).barCodeId.find(code => code === dataItem.barCodeId)) {
                        this.itemsService.itemArray.find(item => item.code === dataItem.code).barCodeId.push(dataItem.barCodeId);
                    }
                    this.itemsService.itemArray.find(item => item.code === dataItem.code).size = dataItem.size || null;
                    this.itemsService.itemArray.find(item => item.code === dataItem.code).unitCode = dataItem.unitCode || null;
                    this.itemsService.itemArray.find(item => item.code === dataItem.code).unitNameAr = dataItem.unitNameAr || null;
                    this.itemsService.itemArray.find(item => item.code === dataItem.code).nameArFull = dataItem.nameArFull || null;
                    this.itemsService.itemArray.find(item => item.code === dataItem.code).docIndex = item.docIndex;
                } else {
                    item =
                        {
                            code: dataItem.code || null,
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
                    this.itemsService.itemArray.push(item);
                }
                this.db.collection('combinations').doc(item.code).set(item)
            });

            if (docData.length != 0) {
                return this.db.collection('item').doc(`array-${this.itemsService.lastDocIndex}`).set({items: docData},{merge:true}).then(res => {
                    this.toastr.success('ItemArray updated.');
                });
            }
            this.itemsService.updateItems();
        });
    }

    // importToPhones(data) {
    //     const docData = [];
    //     data.forEach(dataItem => {
    //             let item = this.itemsService.itemArray.find(item => item.code === dataItem.code);
    //             if (this.itemsService.itemArray && item) {
    //                 if (!item.barCodeId.find(code => code === dataItem.barCodeId)) {
    //                     item.barCodeId.push(dataItem.barCodeId);
    //                 }
    //                 item.size = dataItem.size || null;
    //                 item.unitCode = dataItem.unitCode || null;
    //                 item.unitNameAr = dataItem.unitNameAr || null;
    //                 item.nameArFull = dataItem.nameArFull || null;
    //                 console.log('item duplicated',item)
    //             } else {
    //                item =
    //                     {
    //                         code: dataItem.code || null,
    //                         prices: {},
    //                         pics: [],
    //                         barCodeId: [],
    //                         isNew: false,
    //                         isActive: true,
    //                         size: dataItem.size || null,
    //                         unitCode: dataItem.unitCode || null,
    //                         unitNameAr: dataItem.unitNameAr || null
    //                     };
    //                 item.barCodeId.push(dataItem.barCodeId);
    //                 console.log('new item',item)
    //                 Object.keys(dataItem).forEach(row => {
    //                     if (row != 'barCodeId') {
    //                         item[row] = dataItem[row];
    //                     }
    //                 });
    //             }
    //         docData.push(item);
    //         this.itemsService.itemArray.push(item);
    //
    //         this.db.collection('combinations').doc(item.code).set(item)
    //     });
    //     if (docData.length != 0) {
    //         return this.db.collection('item').doc(`array-${this.itemsService.lastDocIndex}`).set({items: docData}).then(res => {
    //             this.toastr.success('ItemArray updated.');
    //         });
    //     }
    //     this.itemsService.updateItems();
    //     //this.itemsService.updateItems();
    //     // const b = this.db.firestore.batch();
    //     // data.forEach(item => {
    //     //     console.log(data.find(items=> items.barCodeId === item.barCodeId))
    //     //     const dataItem = {
    //     //         isNew: false,
    //     //         isActive: true,
    //     //         size: item.size || null,
    //     //         unitCode: item.unitCode || null,
    //     //         unitNameAr: item.unitNameAr || null,
    //     //         prices: {},
    //     //         pics: [],
    //     //         ...item
    //     //     };
    //     //     dataItem.barCodeId = [item.barCodeId];
    //     //     b.set(this.db.doc('combinations/' + item.code).ref, dataItem);
    //     // });
    //     // return b.commit().then(res => {
    //     //     this.toastr.success('Combinations added.');
    //     // });
    // }

    importPriceList(rows, listID) {
        if (this.itemsService.itemArray.find(item => item.code === rows.code)) {
            this.itemsService.itemArray.find(item => item.code === rows.code).prices[listID] = rows.price;
            this.db.collection('combinations', ref => ref.where('code', '==', rows.code)).get().subscribe(res => {
                if (!res.empty) {
                    res.docs[0].ref.update(this.itemsService.itemArray.find(item => item.code === rows.code));
                }
            });
        }
    }

}
