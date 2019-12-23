import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../../shared/services/firebase/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public editUserForm: FormGroup;
  public errorMessage: any;
  public url: any;
  public item: any;
  public avatar: any;
  public sidebaron: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private userService: UserService,private toastr :ToastrService) {}

  createForm() {
    this.editUserForm = this.fb.group({
      name: [this.item.name, Validators.required],
      email: [this.item.email, [Validators.required,Validators.email]],
      mobile: [this.item.mobile, Validators.required]
    });
  }

  save(value) {
    value.avatar = this.avatar;
    this.userService.updateUser(this.item.id, value)
      .then(
        res => {
          this.router.navigate(['/user/show']);
          this.showEdit();
        }
      )
  }

  showEdit(){
    this.toastr.success('User Updated!');
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
    this.router.navigate(['/user/show']);
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
