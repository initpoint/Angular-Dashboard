var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginWithImageComponent } from './login-with-image/login-with-image.component';
import { LoginWithVideoComponent } from './login-with-video/login-with-video.component';
import { RegisterComponent } from './register/register.component';
import { RegisterWithImageComponent } from './register-with-image/register-with-image.component';
import { RegisterWithVideoComponent } from './register-with-video/register-with-video.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { AuthService } from '../../shared/services/firebase/auth.service';
import { SecureInnerPagesGuard } from '../../shared/guard/SecureInnerPagesGuard.guard';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [SecureInnerPagesGuard]
            },
            {
                path: 'login/image',
                component: LoginWithImageComponent,
            },
            {
                path: 'login/video',
                component: LoginWithVideoComponent
            },
            {
                path: 'register',
                component: RegisterComponent,
            },
            {
                path: 'register/image',
                component: RegisterWithImageComponent
            },
            {
                path: 'register/video',
                component: RegisterWithVideoComponent
            },
            {
                path: 'unlockuser',
                component: UnlockUserComponent
            },
            {
                path: 'forgetpassword',
                component: ForgetPwdComponent
            },
            {
                path: 'resetpassword',
                component: ResetPwdComponent
            }
        ]
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: [AuthService, SecureInnerPagesGuard]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());
export { AuthenticationRoutingModule };
//# sourceMappingURL=authentication-routing.module.js.map