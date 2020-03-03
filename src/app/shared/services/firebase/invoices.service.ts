import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class InvoicesService {
    constructor(public db: AngularFirestore, private toastrService: ToastrService) {

    }

    getCustomerInvoices(uid) {
        return this.db.collection('invoices', ref => ref.where('customerId', '==', uid)).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    addInvoices(invoices: any[]) {
        Promise.all(invoices.map(invoice => {
            this.db.collection('invoices').add(invoice);
        })).then(() => {
            this.toastrService.success('All Invoices Added');
        });
    }
}
