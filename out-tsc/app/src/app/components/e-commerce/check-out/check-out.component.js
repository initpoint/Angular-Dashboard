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
import { ProductsService } from '../../../shared/services/e-commerce/products.service';
import { CartService } from '../../../shared/services/e-commerce/cart.service';
import { of } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { InvoiceService } from '../../../shared/services/e-commerce/invoice.service';
var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(fb, productService, cartService, invoiceService) {
        this.fb = fb;
        this.productService = productService;
        this.cartService = cartService;
        this.invoiceService = invoiceService;
        this.red_border = false;
        this.cartItems = of([]);
        this.checkOutItems = [];
        this.submitted = false;
        this.createForm();
    }
    CheckOutComponent.prototype.createForm = function () {
        this.checkoutForm = this.fb.group({
            firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
            email: ['', [Validators.required, Validators.email]],
            country: ['', Validators.required],
            address: ['', [Validators.required, Validators.maxLength(50)]],
            town: ['', Validators.required],
            state: ['', Validators.required],
            postalcode: ['', Validators.required]
        });
    };
    CheckOutComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.checkoutForm.invalid) {
            this.red_border = true;
            return;
        }
        this.userInfo = this.checkoutForm.value;
        this.invoiceService.createOrder(this.checkOutItems, this.userInfo, this.amount);
    };
    CheckOutComponent.prototype.getTotal = function () {
        return this.cartService.getTotalAmount();
    };
    CheckOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartItems = this.cartService.getAll();
        this.cartItems.subscribe(function (products) { return _this.checkOutItems = products; });
        this.getTotal().subscribe(function (amount) { return _this.amount = amount; });
    };
    CheckOutComponent = __decorate([
        Component({
            selector: 'app-check-out',
            templateUrl: './check-out.component.html',
            styleUrls: ['./check-out.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder, ProductsService, CartService,
            InvoiceService])
    ], CheckOutComponent);
    return CheckOutComponent;
}());
export { CheckOutComponent };
//# sourceMappingURL=check-out.component.js.map