var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ChatDB } from '../../shared/data/chat/chat';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
var today = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
var ChatService = /** @class */ (function () {
    function ChatService() {
        this.chat = [];
        this.users = [];
        this.chat = ChatDB.chat;
        this.users = ChatDB.chatUser;
    }
    // Get User Data
    ChatService.prototype.getUsers = function () {
        var _this = this;
        var users = new Observable(function (observer) {
            observer.next(_this.users);
            observer.complete();
        });
        return users;
    };
    // Get cuurent user
    ChatService.prototype.getCurrentUser = function () {
        return this.getUsers().pipe(map(function (users) {
            return users.find(function (item) {
                return item.authenticate === 1;
            });
        }));
    };
    // chat to user
    ChatService.prototype.chatToUser = function (id) {
        return this.getUsers().pipe(map(function (users) {
            return users.find(function (item) {
                return item.id === id;
            });
        }));
    };
    // Get users chat
    ChatService.prototype.getUserChat = function () {
        var _this = this;
        var chat = new Observable(function (observer) {
            observer.next(_this.chat);
            observer.complete();
        });
        return chat;
    };
    // Get chat History
    ChatService.prototype.getChatHistory = function (id) {
        return this.getUserChat().pipe(map(function (users) {
            return users.find(function (item) {
                return item.id === id;
            });
        }));
    };
    // Send Message to user
    ChatService.prototype.sendMessage = function (chat) {
        var _this = this;
        this.chat.filter(function (chats) {
            if (chats.id == chat.receiver) {
                chats.message.push({ sender: chat.sender, time: today.toLowerCase(), text: chat.message });
                setTimeout(function () {
                    document.querySelector(".chat-history").scrollBy({ top: 200, behavior: 'smooth' });
                }, 310);
                _this.responseMessage(chat);
            }
        });
    };
    ChatService.prototype.responseMessage = function (chat) {
        this.chat.filter(function (chats) {
            if (chats.id == chat.receiver) {
                setTimeout(function () {
                    chats.message.push({ sender: chat.receiver, time: today.toLowerCase(), text: 'Hey This is ' + chat.receiver_name + ', Sorry I busy right now, I will text you later' });
                }, 2000);
                setTimeout(function () {
                    document.querySelector(".chat-history").scrollBy({ top: 200, behavior: 'smooth' });
                }, 2310);
            }
        });
    };
    ChatService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());
export { ChatService };
//# sourceMappingURL=chat.service.js.map