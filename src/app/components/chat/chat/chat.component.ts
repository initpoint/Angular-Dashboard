import {Component, OnInit} from '@angular/core';
import {ChatUsers} from '../../../shared/model/chat.model';
import {ChatService} from '../../../shared/services/chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    public openTab: string = 'profile';
    public users: ChatUsers[] = [];
    public searchUsers: ChatUsers[] = [];
    public chatUser: any;
    public profile: any;
    public chats: any;
    public chatText: string;
    public error: boolean = false;
    public notFound: boolean = false;
    public id: any;
    public searchText: string;

    constructor(private chatService: ChatService) {
        this.chatService.getUsers().subscribe(users => {
            this.searchUsers = users;
            this.users = users;
        });

        if (localStorage.getItem('chatId') != null) {
            console.log(localStorage.getItem('chatId'))
            this.id = localStorage.getItem('chatId');
        }
    }

    ngOnInit() {
        this.userChat(this.id);
        this.getProfile();
    }

    public tabbed(val) {
        this.openTab = val;
    }

    // Get user Profile
    public getProfile() {
        this.profile = JSON.parse(localStorage.getItem('user'));
    }

    // User Chat
    public userChat(id: number = 1) {
        this.chatService.chatToUser(id).subscribe(chatUser => this.chatUser = chatUser);
        this.chatService.getChatHistory(id).subscribe(chats => {
            this.chats = chats;
            setTimeout(function () {
                document.querySelector('.chat-history').scrollBy({
                    top: document.querySelector('.chat-history').scrollHeight,
                    behavior: 'auto'
                });
            }, 310);
        });
        localStorage.removeItem('chatId');
        this.id = 1;
    }

    // Send Message to User
    public sendMessage(form) {
        if (!form.value.message) {
            this.error = true;
            return false;
        }
        this.error = false;
        let chat = {
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
