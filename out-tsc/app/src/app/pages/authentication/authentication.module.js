var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginWithImageComponent } from './login-with-image/login-with-image.component';
import { RegisterComponent } from './register/register.component';
import { RegisterWithImageComponent } from './register-with-image/register-with-image.component';
import { RegisterWithVideoComponent } from './register-with-video/register-with-video.component';
import { LoginWithVideoComponent } from './login-with-video/login-with-video.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        NgModule({
            declarations: [
                LoginComponent,
                LoginWithImageComponent,
                RegisterComponent,
                RegisterWithImageComponent,
                RegisterWithVideoComponent,
                LoginWithVideoComponent,
                UnlockUserComponent,
                ResetPwdComponent,
                ForgetPwdComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NgxSpinnerModule,
                AuthenticationRoutingModule
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());
export { AuthenticationModule };
//# sourceMappingURL=authentication.module.js.map