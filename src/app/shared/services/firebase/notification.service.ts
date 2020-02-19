import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    public notifications: any[] = [];

    constructor(private db: AngularFirestore, public toastr: ToastrService, private router: Router) {
        this.toastr.toastrConfig.maxOpened = 3;
        this.toastr.toastrConfig.newestOnTop = true;
        this.toastr.toastrConfig.autoDismiss = true;
        let newMessages = [];
        this.db.collection('messages').stateChanges().subscribe(docs => {
            docs.forEach(doc => {
                if (doc.type == 'added') {
                    let data = doc.payload.doc.data();
                    data['icon'] = 'message-square';
                    data['url'] = '/chat';
                    //doc.payload.doc.data()['sender'] != JSON.parse(localStorage.getItem('user')['uid']) &&
                    if (doc.payload.doc.data()['sender'] != JSON.parse(localStorage.getItem('user')['uid']) && Math.round((Date.now() - doc.payload.doc.data()['createdAt']) / 1000 / 60) <= 5) {
                        newMessages.push(doc.payload.doc.data());
                    }
                    // Allow only 24 hours to display the notification on the notification list
                    if (doc.payload.doc.data()['sender'] != JSON.parse(localStorage.getItem('user')['uid']) && Math.round((Date.now() - doc.payload.doc.data()['createdAt']) / 1000 / 60 / 60) <= 24) {
                        this.notifications.push(data);
                    }
                }
            });
            if (newMessages.length >= this.toastr.toastrConfig.maxOpened) {
                this.toastr.show('You have ' + newMessages.length + ' new message', 'New Message', {
                    progressBar: true,
                    tapToDismiss: false,
                    positionClass: 'toast-top-left'
                }).onTap.subscribe(notify => {
                    this.router.navigateByUrl('/chat');
                });
            } else {
                newMessages.forEach(doc => {
                    doc['icon'] = 'message-square';
                    doc['url'] = '/chat';
                    this.toastr.show(doc['text'], 'New Message', {
                        progressBar: true,
                        tapToDismiss: true,
                        positionClass: 'toast-top-left'
                    }).onTap.subscribe(notify => {
                        this.router.navigateByUrl('/chat');
                        localStorage.setItem('chatId',doc['customerId']);
                    });
                });
            }
        });
    }
}
