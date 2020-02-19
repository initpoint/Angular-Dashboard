import {Injectable} from '@angular/core';
import {ChatUsers, chat} from '../../../../../theme/src/app/shared/model/chat.model';
import {Observable, Subscriber} from 'rxjs';
import {map, filter, scan} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {CustomerService} from './firebase/customer.service';
var today = new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    public observer: Subscriber<{}>;
    public chat: any[] = [];

    constructor(public db: AngularFirestore,public customerServices:CustomerService) {
        this.getChats();
    }

    getChats() {

        this.db.collection('messages').get().subscribe(collection => {
            collection.docs.forEach(doc => {
                    if (this.chat.find(customer => customer.id ===doc.data().customerId)) {
                        this.chat.find(customer => customer.id === doc.data().customerId)['name'] = doc.data().customerName;
                    } else {
                        this.chat.push({
                            name: doc.data().customerName,
                            id: doc.data().customerId,
                            text: doc.data().text,
                        });
                    }
                });
        });

    }

    // Get User Data
    public getUsers() {
        const users = this.customerServices.getCustomers();
        return <Observable<ChatUsers[]>>users;
    }

    // chat to user
    public chatToUser(id: number) {
        return this.getUsers().pipe(map(users => {
            return users.find((item) => {
                return item['uid'] === id;
            });
        }));
    }

    // Get chat History
    public getChatHistory(id: number) {
        return this.db.collection('messages', ref => ref.where('customerId', '==', id).orderBy('createdAt')).snapshotChanges().pipe(
            map(x => x.map(y => {
                return {
                    id: y.payload.doc.id,
                    ...y.payload.doc.data()
                };
            }))
        );

    }

    // Send Message to user
    public sendMessage(chat) {
        this.db.collection('messages').add(
            {
                userId: chat.sender,
                customerId: chat.receiver,
                customerName: chat.receiver_name,
                text: chat.message,
                createdAt: Date.now(),
                sender: chat.sender
            }).then(res => {
            setTimeout(function () {
                document.querySelector('.chat-history').scrollBy({top: 200, behavior: 'smooth'});
            }, 310);
        });
    }
    //
    // public responseMessage(chat) {
    //
    //     this.chat.filter(chats => {
    //         if (chats.id == chat.receiver) {
    //             setTimeout(() => {
    //                 chats.message.push({
    //                     sender: chat.receiver,
    //                     createdAt: today.toLowerCase(),
    //                     text: 'Hey This is ' + chat.receiver_name + ', Sorry I busy right now, I will text you later'
    //                 });
    //             }, 2000);
    //             setTimeout(function () {
    //                 document.querySelector('.chat-history').scrollBy({top: 200, behavior: 'smooth'});
    //             }, 2310);
    //         }
    //     });
    // }

}
