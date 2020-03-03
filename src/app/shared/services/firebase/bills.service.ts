import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map, take} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BillsService {
    constructor(public db: AngularFirestore, private toastr: ToastrService) {

    }

    getBills() {
        return this.db.collection('bills').snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    getCustomerBills(uid) {
        return this.db.collection('bills', ref => ref.where('customerId', '==', uid)).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    deleteBill(key) {
        return this.db.collection('bills').doc(key).delete().then(res => {
            this.toastr.error('Bill Deleted.');
        });
    }

    updateBill(key, value) {
        return this.db.collection('bills').doc(key).set(value, {merge: true}).then(res => {
            this.toastr.success('Bill Updated.');
        });
    }

    addBill(data) {
        return this.db.collection('bills').add(data).then(() => {
            this.toastr.success('Bill Added');
        });
    }

}
