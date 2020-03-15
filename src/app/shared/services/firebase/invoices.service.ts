import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';
import {CustomerService} from './customer.service';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class InvoicesService {
    constructor(public db: AngularFirestore, private toastrService: ToastrService, public customerService: CustomerService) {

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
        let accumulatedCredit = 0;
        let accumulatedDebt = 0;
        return Promise.all(invoices.map(invoice =>
            this.db.collection('invoices', ref => ref.where('customerId', '==', invoice['customerId'])
                .where('description', '==', invoice.description)).get().toPromise().then(data => {
                if (data.size === 0) {
                    this.db.collection(`invoices`).add(invoice);
                    accumulatedCredit += invoice['credit'];
                    accumulatedDebt += invoice['debt'];
                }
            }))).then(() => {
            this.customerService.updateCustomer(invoices[0]['customerId'], {
                'credit': firebase.firestore.FieldValue.increment(accumulatedCredit),
                'debt': firebase.firestore.FieldValue.increment(accumulatedDebt)
            });
            this.toastrService.success('All Invoices Added');
        });
    }
}
