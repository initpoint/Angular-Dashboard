import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {UserService} from '../../../shared/services/firebase/user.service';
import {ToastrService} from 'ngx-toastr';

type UserFields = 'name' | 'email' | 'mobile' | 'profileImg' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewUserComponent implements OnInit {
    userDetail: any;
    public registerForm: FormGroup;
    public sidebaron: any;
    public formErrors: FormErrors = {
        'name': '',
        'email': '',
        'mobile': '',
        'profileImg': '',
        'password': ''
    };
    public errorMessage: any;
    public url: any;
    public avatraLink: any;

    constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private toastr: ToastrService) {
        this.registerForm = new FormGroup({
            name: new FormControl(''),
            password: new FormControl(''),
            email: new FormControl(''),
            mobile: new FormControl(''),
        });
    }

    resetFields() {
        this.registerForm = this.fb.group({
            name: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            mobile: new FormControl('', Validators.required),
        });
    }

    showSuccess() {
        this.toastr.success('User Created!');
    }
    async submit(value) {
        if (await this.userService.createUser(value, this.url)) {
             this.resetFields();
             this.router.navigate(['/user/show']);
             this.showSuccess();
        }
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
            this.url = reader.result;
        }
    }

    cancel() {
        this.router.navigate(['/user/show']);
    }

    ngOnInit() {
    }

}
