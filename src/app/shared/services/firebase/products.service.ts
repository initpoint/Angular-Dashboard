import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { key } from 'flatpickr/dist/types/locale';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Category } from '../../model/category.model';
import { Ranking } from '../../model/ranking.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(public db: AngularFirestore,
        public afAuth: AngularFireAuth,
        private toastr: ToastrService,
    ) {
    }

    getCategories(): Observable<Category[]> {
        return this.db.collection<any>('category',ref => ref.where('type','==','category')).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                }
            }))
        );
    }
    getRanking(categoryId: string){
        return this.db.collection<any>('category').doc(categoryId).snapshotChanges();
    }
    getRankings(id) {
        return this.db.collection('category',ref => ref.where('headId', '==', id)).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                }
            }))
        );
    }
    /* Categories */
    getCategory(key) {
        return this.db.collection('category').doc(key).snapshotChanges();
    }
    deleteCategory(key) {
        return this.db.collection('category').doc(key).delete();
    }
    updateCategory(key,values) {
        return this.db.collection('category').doc(key).set(values,{merge:true});
    }
    createCategory(values) {
        return this.db.collection('category').add(values);
    }
}
