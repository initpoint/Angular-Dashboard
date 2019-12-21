var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../shared/services/firebase/auth.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, afauth, fb, router) {
        this.authService = authService;
        this.afauth = afauth;
        this.fb = fb;
        this.router = router;
        this.newUser = false;
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.loginForm = fb.group({
            email: ['test@gmail.com', [Validators.required, Validators.email]],
            password: ['test123', Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // Login With Google
    LoginComponent.prototype.loginGoogle = function () {
        this.authService.GoogleAuth();
    };
    // Login With Twitter
    LoginComponent.prototype.loginTwitter = function () {
        this.authService.signInTwitter();
    };
    // Login With Facebook
    LoginComponent.prototype.loginFacebook = function () {
        this.authService.signInFacebok();
    };
    // Simple Login
    LoginComponent.prototype.login = function () {
        this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password']);
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [AuthService,
            AngularFireAuth, FormBuilder,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map