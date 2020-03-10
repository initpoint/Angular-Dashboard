import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {formatDate} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class LogsService {
    app;

    constructor(public db: AngularFirestore,
                public toastrService: ToastrService,
                private router: Router
    ) {
    }

    createLog(action) {
        const values = {
            user: JSON.parse(localStorage.getItem('user')).name,
            createdAt: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US'),
            page: this.router.url,
            action: action
        };

        return this.db.collection('logs').add(values);
    }

    updateLog(userKey, value) {
        return this.db.collection('logs').doc(userKey).set(value, {merge: true});
    }

    searchLogs(searchValue) {
        return this.db.collection('logs', ref => ref.where('name', '>=', searchValue)
            .where('name', '<=', searchValue + '\uf8ff')
            .where('userType', '==', 'user'))
            .snapshotChanges();
    }

    getLog(userKey) {
        return this.db.collection('logs').doc(userKey).snapshotChanges();
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
