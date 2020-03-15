import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {formatDate} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ReportsService {
    allreport = [{
        name: 'New Combinations',
        fields: ['Created At', 'Code', 'Name', 'Removed At', 'Customer Code', 'Customer Name', 'Qty', 'Is New'],
        filters: {default: 'customers', optionals: 'combinations'},
    }, {
        name: 'Cart',
        fields: ['createDate', 'Code', 'Name', 'Bill Date', 'customerId', 'customerName', 'Qty', 'Exported Qty', 'Different'],
        filters: {default: 'customer', optionals: 'carts'},
    }, {
        name: 'Customers',
        fields: ['Date', 'Code', 'Name', 'Customer Code', 'Customer Name', 'Action'],
        filters: {default: 'user', optionals: 'pages'},
    }, {
        name: 'Best Selling',
        fields: ['Date', 'Code', 'Name', 'Qty'],
        filters: {default: 'user', optionals: 'pages'},
    }, {
        name: 'Customers Inventory',
        fields: ['BarCode', 'Code', 'Name', 'Bill Qty', 'Shortage Qty', 'Over Qty', 'Match'],
        filters: {default: 'user', optionals: 'pages'},
    }, {
        name: 'Customers Visits',
        fields: ['Created At', 'Customer Code', 'Customer Name'],
        filters: {default: 'user', optionals: ''},
    }, {
        name: 'Users Actions',
        fields: ['createdAt', 'user', 'page', 'action'],
        filters: {default: 'user', optionals: 'pages'}
    }, {
        name: 'Customers Permissions',
        fields: ['Created At', 'Customer Code', 'Customer Name', 'Page', 'Action'],
        filters: {default: 'customers', optionals: ''}
    }];

    constructor(public db: AngularFirestore,
                public toastrService: ToastrService,
                private router: Router
    ) {
    }


    getLogs() {
        return this.db.collection('logs').snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    deleteLog(contactKey) {
        return this.db.collection('logs').doc(contactKey).delete();
    }
}
