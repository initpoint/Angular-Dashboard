import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {CustomerService} from '../../../shared/services/firebase/customer.service';
import {ToastrService} from 'ngx-toastr';
import {PriceListService} from 'src/app/shared/services/firebase/pricelist.service';
@Component({
    selector: 'app-edit-customer',
    templateUrl: './edit-customer.component.html',
    styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
    public editcustomerForm: FormGroup;
    public errorMessage: any;
    public url: any;
    public item: any;
    public btn: boolean;
    private priceLists;
    public sidebaron: any;

    constructor(private priceListService: PriceListService,private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private customerService: CustomerService, private toastr: ToastrService) {
    }

    createForm() {
        this.editcustomerForm = this.fb.group({
            name: [this.item.name, Validators.required],
            email: [this.item.email, [Validators.required, Validators.email]],
            mobile: [this.item.mobile, Validators.required],
            code: [this.item.code, Validators.required],
            pricelist: [this.item.pricelist]
        });
    }
    resetPassword(userEmail) {
        this.btn = true;
        this.customerService.afAuth.auth.sendPasswordResetEmail(userEmail).then(res => {
                this.toastr.success('Password reset success!');
                this.btn = false;
                this.router.navigate(['/customers/show']);
            },
            err => {
                this.toastr.error(err);
            }
        );
    }
    delete(userId) {
        this.customerService.deleteCustomer(userId)
            .then(
                res => {
                    this.router.navigate(['/customers/show']);
                    this.toastr.error('Customer Deleted!');
                },
                err => {
                }
            );
    }
    save(value) {

        this.customerService.updateCustomer(this.item.id, value)
            .then(
                res => {
                    this.router.navigate(['/customers/show']);
                    this.showEdit();
                }
            );
    }

    showEdit() {
        this.toastr.success('Customer Updated!');
    }

    cancel() {
        this.router.navigate(['/customers/show']);
    }

    ngOnInit() {
        this.route.data.subscribe(routeData => {
            let data = routeData['data'];
            if (data) {
                this.item = data.payload.data();
                this.priceListService.getPriceLists().subscribe(res=> {
                    this.priceLists = res;

                })
                this.item.id = data.payload.id;
                this.createForm();
            }
        });
    }

}
