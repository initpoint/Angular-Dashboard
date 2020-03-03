import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';
import {ItemsService} from './items.service';

@Injectable({
    providedIn: 'root'
})
export class PriceListService {

    constructor(public db: AngularFirestore,
                private toastr: ToastrService,
                public itemsService: ItemsService
    ) {
    }

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

    updatePriceList(key, values) {
        return this.db.collection('pricelist').doc(key).set(values, {merge: true}).then(() => {
            this.toastr.success('PriceList updated.');
        });
    }

    createPriceList(values) {
        return this.db.collection('pricelist').add(values).then(() => {
            this.toastr.success('PriceList Added.');
        });
    }
}
