import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {CustomerService} from '../../../shared/services/firebase/customer.service';
import {ToastrService} from 'ngx-toastr';
import {PriceListService} from 'src/app/shared/services/firebase/pricelist.service';
type UserFields = 'name' | 'email' | 'mobile' | 'password' | 'code';
type FormErrors = { [u in UserFields]: string };

@Component({
    selector: 'app-new-customer',
    templateUrl: './new-customer.component.html',
    styleUrls: ['./new-customer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewCustomerComponent implements OnInit {
    private priceLists;
    public registerForm: FormGroup;
    public sidebaron: any;
    public formErrors: FormErrors = {
        'name': '',
        'email': '',
        'mobile': '',
        'password': '',
        'code': ''
    };
    public errorMessage: any;
    public url: any;
    public avatraLink: any;

    constructor(private priceListService:PriceListService,private fb: FormBuilder, private router: Router, private customerService: CustomerService, private toastr: ToastrService) {
        this.registerForm = new FormGroup({
            name: new FormControl(''),
            password: new FormControl(''),
            email: new FormControl(''),
            mobile: new FormControl(''),
            code: new FormControl(''),
            pricelist: new FormControl(''),
        });
    }

    resetFields() {
        this.registerForm = this.fb.group({
            name: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            mobile: new FormControl('', Validators.required),
            code: new FormControl('', Validators.required),
            pricelist: new FormControl('', Validators.required),
        });
    }

    showSuccess() {
        this.toastr.success('Customer Created!');
    }
    async submit(value) {
        if (await this.customerService.createCustomer(value)) {
             this.resetFields();
             this.router.navigate(['/customers/show']);
             this.showSuccess();
        }
    }


    cancel() {
        this.router.navigate(['/customers/show']);
    }

    ngOnInit() {
        this.priceListService.getPriceLists().subscribe(res=> {
            this.priceLists = res;
        })
    }

}
