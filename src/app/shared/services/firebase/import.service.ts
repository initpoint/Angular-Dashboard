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
        let newItem = {};
        // This is the Item Map
        newItem[data.code] = {};
        newItem[data.code].prices = {};
        newItem[data.code].pics = [];
        newItem[data.code].users = [];
        Object.keys(data).forEach(row => {
            newItem[data.code][row] = data[row];
        });
        this.db.collection('item').doc('itemArray').set(newItem, {merge: true});
    }

    importToPhones(data) {
        data.isNew = false;
        data.isActive = true;
        data.prices = {};
        data.pics = [];
        data.users = [];
        this.db.collection('combinations').doc(data.code).set(data, {merge: true});
    }

    importPriceList(rows,listID) {
        if (this.itemArray[rows.code]) {

                this.itemArray[rows.code].prices= {};
                this.itemArray[rows.code].prices[listID] = rows.price
                this.db.collection('combinations').doc(rows.code).set(this.itemArray[rows.code],{merge:true});
                this.db.doc('item/itemArray').set(this.itemArray,{merge:true})
                console.log(this.itemArray[rows.code]);

        }
    }
}
