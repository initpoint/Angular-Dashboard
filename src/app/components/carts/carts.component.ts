import {Component, OnInit, Output} from '@angular/core';
import {CartsService} from '../../shared/services/firebase/carts.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-carts',
    templateUrl: './carts.component.html',
    styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
    cartSource;
    lang = localStorage.getItem('lang') === 'ar';

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
    }

    calculateActiveDisplay(data) {
        return data.isActive ? 'غير مؤكد' : 'تم التأكيد';
    }
}
