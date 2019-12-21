var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef } from '@angular/core';
import { InvoiceService } from "../../../shared/services/e-commerce/invoice.service";
var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(invoiceService, elRef) {
        this.invoiceService = invoiceService;
        this.elRef = elRef;
        this.date = new Date();
        this.orderDetails = {};
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        this.orderDetails = this.invoiceService.getOrderItems();
    };
    InvoiceComponent = __decorate([
        Component({
            selector: 'app-invoice',
            templateUrl: './invoice.component.html',
            styleUrls: ['./invoice.component.scss']
        }),
        __metadata("design:paramtypes", [InvoiceService, ElementRef])
    ], InvoiceComponent);
    return InvoiceComponent;
}());
export { InvoiceComponent };
//# sourceMappingURL=invoice.component.js.map