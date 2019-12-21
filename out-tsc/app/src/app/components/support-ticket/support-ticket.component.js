var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { supportDB } from '../../shared/data/tables/support-ticket';
var SupportTicketComponent = /** @class */ (function () {
    function SupportTicketComponent() {
        this.support = [];
        this.settings = {
            columns: {
                img: {
                    title: 'Image',
                    type: 'html',
                },
                position: {
                    title: 'Position'
                },
                salary: {
                    title: 'Salary'
                },
                office: {
                    title: 'Office'
                },
                skill: {
                    title: 'Skill',
                    type: 'html',
                },
                extn: {
                    title: 'Extn'
                },
                email: {
                    title: 'Email'
                }
            },
        };
        this.support = supportDB.ticket;
    }
    SupportTicketComponent.prototype.ngOnInit = function () { };
    SupportTicketComponent = __decorate([
        Component({
            selector: 'app-support-ticket',
            templateUrl: './support-ticket.component.html',
            styleUrls: ['./support-ticket.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], SupportTicketComponent);
    return SupportTicketComponent;
}());
export { SupportTicketComponent };
//# sourceMappingURL=support-ticket.component.js.map