import {Component, OnInit, Output} from '@angular/core';
import {CartsService} from '../../shared/services/firebase/carts.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
    selector: 'app-carts',
    templateUrl: './carts.component.html',
    styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
    cartSource;
    lang = localStorage.getItem('lang') === 'ar';
    currentUser = JSON.parse(localStorage.getItem('user'));
    constructor(private cartService: CartsService, private router: Router, private toastr: ToastrService) {
        this.cartService.getCarts().subscribe(res => {
            res.map(cartRaw => {
                const cart: any = cartRaw;
                cart.itemsArray = Object.keys(cart.items).map(code => {
                    return {code: code, qty: cart.items[code]};
                });
            });
            this.cartSource = res;
        });
    }

    ngOnInit() {
        this.currentUser.permissions.canUpdate = this.currentUser.permissions.update.includes(this.router.url);
        this.currentUser.permissions.canCreate = this.currentUser.permissions.create.includes(this.router.url);
        this.currentUser.permissions.canRemove = this.currentUser.permissions.delete.includes(this.router.url);
        this.currentUser.permissions.canExport = this.currentUser.permissions.export.includes(this.router.url);
        this.currentUser.permissions.canImport = this.currentUser.permissions.import.includes(this.router.url);
        this.currentUser.permissions.canView = this.currentUser.permissions.view.includes(this.router.url);
    }

    calculateActiveDisplay(data) {
        return data.isActive ? 'غير مؤكد' : 'تم التأكيد';
    }
}
