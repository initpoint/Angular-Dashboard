import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../shared/services/firebase/auth.service';

type UserFields = 'email';
type FormErrors = { [u in UserFields]: string };

@Component({
    selector: 'app-forgetpassword',
    templateUrl: './forgetpassword.component.html',
    styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

    public newUser = false;
    public user: firebase.User;
    public forgetpasswordForm: FormGroup;
    public formErrors: FormErrors = {
        'email': ''
    };
    public errorMessage: any;

    constructor(public authService: AuthService,
                private afauth: AngularFireAuth, private fb: FormBuilder,
                private router: Router) {
        this.forgetpasswordForm = fb.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    ngOnInit() {
    }

    // Simple forgetpassword
    ResetPassword(form) {
        this.authService.ForgotPassword(this.forgetpasswordForm.value['email']);
    }

}
