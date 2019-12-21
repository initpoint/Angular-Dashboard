var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ChatService } from '../../../shared/services/chat.service';
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService) {
        var _this = this;
        this.chatService = chatService;
        this.openTab = "call";
        this.users = [];
        this.searchUsers = [];
        this.error = false;
        this.notFound = false;
        this.chatService.getUsers().subscribe(function (users) {
            _this.searchUsers = users;
            _this.users = users;
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.userChat(this.id);
        this.getProfile();
    };
    ChatComponent.prototype.tabbed = function (val) {
        this.openTab = val;
    };
    // Get user Profile
    ChatComponent.prototype.getProfile = function () {
        var _this = this;
        this.chatService.getCurrentUser().subscribe(function (userProfile) { return _this.profile = userProfile; });
    };
    // User Chat
    ChatComponent.prototype.userChat = function (id) {
        var _this = this;
        if (id === void 0) { id = 1; }
        this.chatService.chatToUser(id).subscribe(function (chatUser) { return _this.chatUser = chatUser; });
        this.chatService.getChatHistory(id).subscribe(function (chats) { return _this.chats = chats; });
    };
    // Send Message to User
    ChatComponent.prototype.sendMessage = function (form) {
        if (!form.value.message) {
            this.error = true;
            return false;
        }
        this.error = false;
        var chat = {
            sender: this.profile.id,
            receiver: this.chatUser.id,
            receiver_name: this.chatUser.name,
            message: form.value.message
        };
        this.chatService.sendMessage(chat);
        this.chatText = '';
        this.chatUser.seen = 'online';
        this.chatUser.online = true;
    };
    ChatComponent.prototype.searchTerm = function (term) {
        if (!term)
            return this.searchUsers = this.users;
        term = term.toLowerCase();
        var user = [];
        this.users.filter(function (users) {
            if (users.name.toLowerCase().includes(term)) {
                user.push(users);
            }
        });
        this.searchUsers = user;
    };
    ChatComponent = __decorate([
        Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.scss']
        }),
        __metadata("design:paramtypes", [ChatService])
    ], ChatComponent);
    return ChatComponent;
}());
export { ChatComponent };
//# sourceMappingURL=chat.component.js.map