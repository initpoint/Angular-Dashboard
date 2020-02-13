import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map, take} from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class CartsService {
    constructor(public db: AngularFirestore, private toastr: ToastrService) {

    }

    getCarts() {
        return this.db.collection('carts' ).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    deleteCart(key) {
        return this.db.collection('carts' ).doc(key).delete().then(res=> {
            this.toastr.error('Cart Deleted.');
        });
    }
    updateCart(key, value) {
        return this.db.collection('carts').doc(key).set(value,{merge:true}).then(res=> {
            this.toastr.success('Cart Updated.');
        });
    }
    addShipment(key,item) {
        return this.db.collection('carts').doc(key).update({
            bills: firebase.firestore.FieldValue.arrayUnion(item)
        }).then(res=>{
            this.toastr.success('Bill Added');
        });
    }
    getShipments(key) {
        return  this.db.collection(`carts/${key}/shipments`).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }
}
