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
        Object.keys(data).forEach(row => {
            newItem[data.code][row] = data[row];
        });
        this.db.collection('item').doc('itemArray').set(newItem, {merge: true});
    }
}
