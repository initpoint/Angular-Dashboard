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

    importJSONBeta(data) {
        let chunk = 100;
        let allNewCombinations = [];
        data.forEach(dataItem => {
            allNewCombinations.push(data.splice(0, chunk));
        });

        allNewCombinations.forEach(newCombination => {
            const docData = [];
            this.itemsService.lastDocIndex++;
            newCombination.forEach(dataItem => {
                let Item = this.itemsService.itemArray.find(item => item.barCodeId === dataItem.barCodeId);
                if (this.itemsService.itemArray && Item) {
                    Item.size = dataItem.size || null;
                    Item.unitCode = dataItem.unitCode || null;
                    Item.unitNameAr = dataItem.unitNameAr || null;
                    Item.nameArFull = dataItem.nameArFull || null;

                } else {
                    let item =
                        {
                            prices: {},
                            pics: [],
                            docIndex: this.itemsService.lastDocIndex,
                            isNew: false,
                            isActive: true,
                            size: dataItem.size || null,
                            unitCode: dataItem.unitCode || null,
                            unitNameAr: dataItem.unitNameAr || null
                        };

                    Object.keys(dataItem).forEach(row => {
                        item[row] = dataItem[row];
                    });
                    docData.push(item)
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
        const b = this.db.firestore.batch();
        data.forEach(item => {
            const dataItem = {
                isNew: false,
                isActive: true,
                size: item.size || null,
                unitCode: item.unitCode || null,
                unitNameAr: item.unitNameAr || null,
                prices: {},
                pics: [],
                ...item
            };
            b.set(this.db.doc('combinations/' + item.barCodeId).ref, dataItem);
        });
        return b.commit().then(res => {
            this.toastr.success('Combinations added.');
        });
    }

    importPriceList(rows, listID) {
        if (this.itemsService.itemArray.find(item => item.code === rows.code)) {
            this.itemsService.itemArray.find(item => item.code === rows.code).prices[listID] = rows.price;
            this.db.collection('combinations',ref => ref.where('barCodeId','==',rows.barCodeId)).get().subscribe(res=> {
                // console.log(res)
                if (!res.empty) {
                    res.docs[0].ref.update(this.itemsService.itemArray.find(item => item.code === rows.code));
                }
            })
        }
    }
}
