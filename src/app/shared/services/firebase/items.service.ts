import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ItemsService implements OnInit {
    metaData;
    itemArray;

    constructor(public db: AngularFirestore, private toastr: ToastrService) {

    }

    ngOnInit() {
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

    getItemsSync() {
       return this.db.doc('item/itemArray').get();
    }

    getItems() {
        return new Promise((resolve, reject) => {
            if (!this.itemArray) {
                this.db.doc('item/itemArray').snapshotChanges().subscribe(res => {
                    this.itemArray = res.payload.data();
                    resolve({data: Object.keys(this.itemArray).map(key => this.itemArray[key])});
                });
            } else {
                resolve({data: Object.keys(this.itemArray).map(key => this.itemArray[key])});
            }
        });
    }

}
