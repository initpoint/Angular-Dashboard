import {Component, OnInit, Output} from '@angular/core';
import {CustomerService} from '../../../shared/services/firebase/customer.service';
import {Router} from '@angular/router';
import {Options, ChangeContext, PointerType, LabelType} from 'ng5-slider';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-customer',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

    public searchValue: string = '';
    public items = [];
    public name_filtered_items: Array<any>;
    public user: any;
    public btn: boolean;
    public sidebaron: any;
    public selected = [];
    public listView: any;
    constructor(private customerService: CustomerService, private router: Router, private toastr: ToastrService) {
        this.getData();
    }
    public logText: string = '';
    public min: number;
    public value: number = 10;
    public highValue: number = 50;
    public options: Options = {
        floor: 0,
        ceil: 100,
    };



    searchByName() {
        let value = this.searchValue.toLowerCase();
        this.customerService.searchCustomers(value)
            .subscribe(result => {
                this.name_filtered_items = result;
                this.items = this.combineLists(result, this.name_filtered_items);
            });
    }


    combineLists(a, b) {
        let result = [];

        a.filter(x => {
            return b.filter(x2 => {
                if (x2.payload.doc.id == x.payload.doc.id) {
                    result.push(x2);
                }
            });
        });
        return result;
    }

    onSelect({selected}) {
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
     getData() {
        this.customerService.getCustomers()
            .subscribe(result => {
                this.items = result;
                this.name_filtered_items = result;
            });
    }

    ngOnInit() {
        this.getData();

    }
}
