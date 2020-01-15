import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ImportService {
    itemArray;

    constructor(public db: AngularFirestore,
                private toastr: ToastrService
    ) {
        this.db.doc('item/itemArray').get().subscribe(res => {
            this.itemArray = res.data();
        });
    }

    importJSON(data) {
        const newItem = {};
        data.forEach(dataItem => {
            newItem[dataItem.code] = {
                prices: {},
                pics: [],
                users: []
            };
            Object.keys(dataItem).forEach(row => {
                newItem[dataItem.code][row] = dataItem[row];
            });
        });
        return this.db.doc('item/itemArray').set(newItem, {merge: true}).then(res => {
            this.toastr.success('ItemArray updated.');
        });
    }

    importToPhones(data) {
        const b = this.db.firestore.batch();
        data.forEach(item => {
            const dataItem = {
                isNew: false,
                isActive: true,
                prices: {},
                pics: [],
                ...item
            };
            b.set(this.db.doc('combinations/' + item.code).ref, dataItem);
        });
        return b.commit().then(res => {
            this.toastr.success('Combinations added.');
        });
    }

    importPriceList(rows,listID) {
        if (this.itemArray[rows.code]) {
            this.itemArray[rows.code].prices = {};
            this.itemArray[rows.code].prices[listID] = rows.price;
            this.db.collection('combinations').doc(rows.code).set(this.itemArray[rows.code], {merge: true});
            this.db.doc('item/itemArray').set(this.itemArray, {merge: true});

        }
    }
}
