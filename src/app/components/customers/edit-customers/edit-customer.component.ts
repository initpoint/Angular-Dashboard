import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../../../shared/services/firebase/customer.service';
import { ToastrService } from 'ngx-toastr';

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
  public avatar: any;
  public sidebaron: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private customerService: CustomerService,private toastr :ToastrService) {}

  createForm() {
    this.editcustomerForm = this.fb.group({
      name: [this.item.name, Validators.required],
      email: [this.item.email, [Validators.required,Validators.email]],
      mobile: [this.item.mobile, Validators.required]
    });
  }

  save(value) {
    value.avatar = this.avatar;
    // if (this.item.email != value.email) {
    //   this.customerService.afAuth.auth.
    // }
    this.customerService.updateCustomer(this.item.id, value)
      .then(
        res => {
          this.router.navigate(['/customers/show']);
          this.showEdit();
        }
      )
  }

  showEdit(){
    this.toastr.success('Customer Updated!');
  }

  //FileUpload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.avatar = reader.result;
    }
  }

  cancel() {
    this.router.navigate(['/customers/show']);
  }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.avatar = data.payload.data().avatar;
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    })
  }

}
