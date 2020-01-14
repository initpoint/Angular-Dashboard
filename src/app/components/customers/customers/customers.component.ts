import {Component, OnInit, Output} from '@angular/core';
import {CustomerService} from '../../../shared/services/firebase/customer.service';
import {PriceListService} from '../../../shared/services/firebase/pricelist.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import CustomeStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-customer',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
    private priceList;
    customerSource: DataSource;
    customerData: CustomeStore;
    lang = localStorage.getItem('lang') == 'ar';
    priceLists: any[];
    fieldView: boolean = true;

    constructor(private priceListService: PriceListService, private customerService: CustomerService, private router: Router, private toastr: ToastrService) {
        this.priceListService.getPriceLists().subscribe(res => {
            this.priceLists = res;
        });
        this.customerData = new CustomeStore({
            key: 'uid',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    this.customerService.getCustomers().subscribe(res => {
                        resolve({data: res});
                    });
                });
            },
            update: (key, values) => {
                return this.customerService.updateCustomer(key, values);
            },
            remove: (key) => {
                return this.customerService.deleteCustomer(key);
            },
            insert: (values) => {
                return this.customerService.createCustomer(values);
            },

        });
        this.customerSource = new DataSource({
            store: this.customerData,
        });
    }


    onEditorPreparing(e) {
        if (e.parentType === 'dataRow' && e.dataField === 'password' && e.row.data.uid) {
            e.editorOptions.disabled = true;
            e.editorOptions.visible = false;
            e.cancel = true;
            this.fieldView = false;
        }

    }


    activeCustomer(data) {
        this.customerService.setCustomer(data.data.uid, {isActive: data.value}).then(res => {
            this.toastr.success('Customer is active');
        }).catch(err => {
            console.error(err);
        });
    }

    ngOnInit() {
    }
}
