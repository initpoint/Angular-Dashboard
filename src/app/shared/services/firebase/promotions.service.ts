import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';
import {ItemsService} from './items.service';

@Injectable({
    providedIn: 'root'
})
export class PromotionsService {

    constructor(public db: AngularFirestore,
                private toastr: ToastrService,
                public itemsService: ItemsService
    ) {
    }

    getPromotions() {
        return this.db.collection<any>('promotions').snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    updatePromotion(key, values) {
        return this.db.collection('promotions').doc(key).set(values, {merge: true}).then(() => {
            this.toastr.success('Promotion updated.');
        });
    }

    createPromotion(values) {
        return this.db.collection('promotions').add(values).then(() => {
            this.toastr.success('Promotion Added.');
        });
    }
}
