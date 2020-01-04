import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Category} from '../../model/category.model';
import * as firebase from 'firebase';
import {Combination} from '../../model/combination.model';

@Injectable({
    providedIn: 'root'
})
export class PriceListService {

    constructor(public db: AngularFirestore,
                private toastr: ToastrService,
    ) {
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
    getPriceLists() {
        return this.db.collection<any>('pricelist').snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    getPriceList(key) {
        return this.db.collection('pricelist').doc(key).get();
    }



    updateItem(key, values) {
        this.toastr.success('Item updated.');
        return this.db.collection('combination').doc(key).set(values, {merge: true});
    }
    updatePriceList(key, values) {
        this.toastr.success('Item updated.');
        return this.db.collection('pricelist').doc(key).set(values, {merge: true});
    }
    createPriceList(values) {
        this.toastr.success('Item added.');
        return this.db.collection('pricelist').add(values);
    }

    removeItem(itemKey: any, priceListKey: any) {
        let newItem = {
            prices: {}
        };
        newItem.prices[priceListKey] = null;
        return this.updateItem(itemKey,newItem);
    }
}
