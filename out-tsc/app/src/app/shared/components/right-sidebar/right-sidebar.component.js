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
var RightSidebarComponent = /** @class */ (function () {
    function RightSidebarComponent(chatService) {
        var _this = this;
        this.chatService = chatService;
        this.users = [];
        this.searchUsers = [];
        this.notFound = false;
        this.chatService.getUsers().subscribe(function (users) {
            _this.searchUsers = users;
            _this.users = users;
        });
    }
    RightSidebarComponent.prototype.searchTerm = function (term) {
        if (!term)
            return this.searchUsers = this.users;
        term = term.toLowerCase();
        var user = [];
        this.users.filter(function (users) {
            if (users.name.toLowerCase().includes(term)) {
                user.push(users);
            }
        });
        this.checkSearchResultEmpty(user);
        this.searchUsers = user;
    };
    RightSidebarComponent.prototype.checkSearchResultEmpty = function (user) {
        if (!user.length)
            this.notFound = true;
        else
            this.notFound = false;
    };
    RightSidebarComponent.prototype.ngOnInit = function () { };
    RightSidebarComponent = __decorate([
        Component({
            selector: 'app-right-sidebar',
            templateUrl: './right-sidebar.component.html',
            styleUrls: ['./right-sidebar.component.scss']
        }),
        __metadata("design:paramtypes", [ChatService])
    ], RightSidebarComponent);
    return RightSidebarComponent;
}());
export { RightSidebarComponent };
//# sourceMappingURL=right-sidebar.component.js.map