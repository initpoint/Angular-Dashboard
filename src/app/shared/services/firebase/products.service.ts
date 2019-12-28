import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {ToastrService} from 'ngx-toastr';
import {key} from 'flatpickr/dist/types/locale';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(public db: AngularFirestore,
                public afAuth: AngularFireAuth,
                private toastr: ToastrService,
    ) {
    }

    getCategories() {
        return this.db.collection('category').snapshotChanges();
    }
    getCategory(key) {
        return this.db.collection('category').doc(key).snapshotChanges();
    }
    deleteCategory(key) {
        return this.db.collection('category').doc(key).delete();
    }
}
