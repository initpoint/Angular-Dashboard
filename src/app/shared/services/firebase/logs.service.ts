import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {formatDate} from '@angular/common';
import * as firebase from 'firebase';
@Injectable({
    providedIn: 'root'
})
export class LogsService {
    lastItem = null;
    constructor(public db: AngularFirestore,
                public toastrService: ToastrService,
                private router: Router
    ) {
    }

    createLog(action) {
        const values = {
            user: JSON.parse(localStorage.getItem('user')).name,
            createDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US'),
            page: this.router.url,
            action: action
        };
        return this.db.collection('logs').add(values).then(res => {
            this.db.doc('meta/logs').set({count:firebase.firestore.FieldValue.increment(1)},{merge:true});
        });
    }

    getLogsForPagination() {
        if (!this.lastItem) {
            return this.db.collection('logs', ref => ref.orderBy('createDate').limit(5)).get().pipe(
                map(x => {
                    this.lastItem = x.docs[x.docs.length - 1];
                    return x.docs.map(y => {
                        return {
                            id: y.id,
                            ...y.data()
                        };
                    });
                })
            );
        } else {
            return this.db.collection('logs', ref => ref.orderBy('createDate').startAfter(this.lastItem).limit(5)).get().pipe(
                map(x => {
                    this.lastItem = x.docs[x.docs.length - 1];
                    return x.docs.map(y => {
                        return {
                            id: y.id,
                            ...y.data()
                        };
                    });
                })
            );
        }
    }

    deleteLog(contactKey) {
        return this.db.collection('logs').doc(contactKey).delete().then(res => {
            this.db.doc('meta/logs').set({count:firebase.firestore.FieldValue.increment(-1)},{merge:true});
        });
    }

    getLogsTotalCount() {
        return this.db.doc('meta/logs').get();
    }
}
