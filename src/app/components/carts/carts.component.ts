import {Component, OnInit, Output} from '@angular/core';
import {CartsService} from '../../shared/services/firebase/carts.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import CustomeStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-carts',
    templateUrl: './carts.component.html',
    styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
    cartsSource: DataSource;
    cartsData: CustomeStore;
    lang = localStorage.getItem('lang') == 'ar';

    constructor(private cartService: CartsService, private router: Router, private toastr: ToastrService) {

        this.cartsData = new CustomeStore({
            key: 'id',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    this.cartService.getCarts().subscribe(res => {
                        resolve({data: res});
                    });
                });
            },
            update: (key, values) => {
                return this.cartService.updateCart(key, values);
            },
            remove: (key) => {
                return this.cartService.deleteCart(key);
            },

        });
        this.cartsSource = new DataSource({
            store: this.cartsData,
        });
    }


    activeCart(data) {
        this.cartService.setCart(data.data.id, {isActive: data.value}).then(res => {
        }).catch(err => {
            console.error(err);
        });
    }

    ngOnInit() {
    }
}
