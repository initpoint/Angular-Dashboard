import {Component, OnInit} from '@angular/core';
import {ChatUsers} from '../../../shared/model/chat.model';
import {ChatService} from '../../../shared/services/chat.service';
import {CustomerService} from '../../../shared/services/firebase/customer.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    public openTab: string = 'profile';
    public users = [];
    public searchUsers = [];
    public chatUser: any;
    public profile: any;
    public chats: any;
    public chatText: string;
    public error: boolean = false;
    public notFound: boolean = false;
    public id: any;
    public searchText: string;

    constructor(private chatService: ChatService, public customerService: CustomerService) {
        this.customerService.getActiveCustomers().subscribe(users => {
            this.searchUsers = users;
            this.users = users;
            this.id = '0';
            if (localStorage.getItem('chatId') != null) {
                this.id = localStorage.getItem('chatId');
            }
            this.userChat(this.id);
            this.getProfile();
        });

    }

    ngOnInit() {

    }


    // Get user Profile
    public getProfile() {
        this.profile = JSON.parse(localStorage.getItem('user'));

    }

    // User Chat
    public userChat(uid) {
        localStorage.setItem('chatId', uid);
        this.chatUser = this.users.filter(user => user.uid === uid)[0];
        this.chatService.getChatHistory(uid).subscribe(chats => {
            this.chats = chats;
            setTimeout(function () {
                document.querySelector('.chat-history').scrollBy({
                    top: document.querySelector('.chat-history').scrollHeight,
                    behavior: 'auto'
                });
            }, 310);
        });
    }

    // Send Message to User
    public sendMessage(form) {
        if (!form.value.message) {
            this.error = true;
            return false;
        }
        this.error = false;
        const chat = {
            sender: this.profile.uid,
            receiver: this.chatUser.uid,
            receiver_name: this.chatUser.name,
            message: form.value.message
        };
        this.chatService.sendMessage(chat);
        this.chatText = '';
        this.chatUser.online = true;

    }

    searchTerm(term: any) {
        if (!term) {
            return this.searchUsers = this.users;
        }
        term = term.toLowerCase();
        let user = [];
        this.users.filter(users => {
            if (users.name.toLowerCase().includes(term)) {
                user.push(users);
            }
        });
        this.searchUsers = user;
    }

}
