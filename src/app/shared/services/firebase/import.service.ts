import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';
import {ProductsService} from './products.service';

@Injectable({
    providedIn: 'root'
})
export class ImportService {

    constructor(public db: AngularFirestore,
                private toastr: ToastrService,
                private productsService: ProductsService
    ) {
    }

    importJSON(data) {
        data.type = 'combination';
        data.hasChildren = false;
        data.isNew = true;
        data.isActive = true;
        data.headId = null;
        data.prices = {};
        data.pics = [];
        data.nameEn = '';
        data.nameAr = '';
        data.parent_type = 'material';
        let materialData = {
            code: data.materialCode,
            nameAr: data.materialNameAr,
            nameEn: '',
            type: 'material',
            hasChildren: true,
            isNew: true,
            isActive: true,
            headId: '',
            parent_type: 'ranking'
        };
        let rankingData = {
            code: data.rankingCode,
            nameAr: data.rankingNameAr,
            nameEn: '',
            type: 'ranking',
            hasChildren: true,
            isNew: true,
            isActive: true,
            headId: 'zGnEcKh2GzeeyhfHIToQ',
            parent_type: 'category'
        };
        this.db.collection('combination').ref.where('code', '==', data.code).get().then(res => {
            if (res.empty) {
                this.db.collection('material').ref.where('code', '==', data.materialCode).get().then(materials => {
                    if (materials.empty) {
                        this.db.collection('ranking').ref.where('code', '==', data.rankingCode).get().then(rankings => {
                            if (rankings.empty) {
                                this.db.collection('ranking').add(rankingData).then(rankingDoc => {
                                    materialData.headId = rankingDoc.id;
                                    this.db.collection('material').add(materialData).then(materialDoc=> {
                                        data.headId = materialDoc.id;
                                        this.db.collection('combination').add(data)
                                    })
                                });
                            } else {
                                materialData.headId = rankings.docs[0].id;
                                this.db.collection('material').add(materialData).then(materialDoc=> {
                                    data.headId = materialDoc.id;
                                    this.db.collection('combination').add(data)
                                })
                            }
                        });
                    } else {
                        data.headId = materials.docs[0].id;
                        this.db.collection('combination').add(data)
                    }
                });
            } else {
                // ToDo : pass
            }
        });
        //this.db.collection('import').add(data);
    }


    getPermissions() {
        return this.db.collection<any>('permissions').snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );
    }

    getPermission(key) {
        return this.db.collection('permissions').doc(key).get().toPromise();
    }

    updatePermission(key, values) {
        this.toastr.success('Item updated.');
        return this.db.collection('permissions').doc(key).set(values, {merge: true});
    }

    updateItem(key, values) {
        this.toastr.success('Item updated.');
        return this.db.collection('customers').doc(key).set(values, {merge: true});
    }

    createPermission(values) {
        this.toastr.success('Item added.');
        return this.db.collection('permissions').add(values);
    }

    removeItem(itemKey: any, PermissionKey: any) {
        let newItem = {
            permissions: {}
        };
        newItem.permissions[PermissionKey] = null;
        return this.updatePermission(itemKey, newItem);
    }
}
