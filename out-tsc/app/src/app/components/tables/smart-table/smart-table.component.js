var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var SmartTableComponent = /** @class */ (function () {
    function SmartTableComponent() {
        this.settings = {
            columns: {
                id: {
                    title: 'ID'
                },
                name: {
                    title: 'Full Name'
                },
                username: {
                    title: 'User Name'
                },
                email: {
                    title: 'Email'
                }
            }
        };
        this.data = [
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz"
            },
            {
                id: 2,
                name: "Ervin Howell",
                username: "Antonette",
                email: "Shanna@melissa.tv"
            },
            {
                id: 3,
                name: "Nicholas DuBuque",
                username: "Nicholas.Stanton",
                email: "Rey.Padberg@rosamond.biz"
            }
        ];
    }
    SmartTableComponent = __decorate([
        Component({
            selector: 'app-smart-table',
            templateUrl: './smart-table.component.html',
            styleUrls: ['./smart-table.component.scss']
        })
    ], SmartTableComponent);
    return SmartTableComponent;
}());
export { SmartTableComponent };
//# sourceMappingURL=smart-table.component.js.map