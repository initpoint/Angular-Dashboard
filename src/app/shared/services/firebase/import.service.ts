import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ImportService {

    constructor(public db: AngularFirestore,
                private toastr: ToastrService
    ) {
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
        data.users = []
        this.db.collection('combinations').doc(data.code).set(data, {merge: true});
    }

    importPriceList(name,rows) {
        let data;
        data.code = rows.code;
        data.name = name;
        this.db.collection('combinations').add(data);
    }
}
