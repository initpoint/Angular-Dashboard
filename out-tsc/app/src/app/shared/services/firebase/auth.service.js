var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
var AuthService = /** @class */ (function () {
    function AuthService(afs, afAuth, router, ngZone, toster, cookieService) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.toster = toster;
        this.cookieService = cookieService;
        this.showLoader = false;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                _this._sessionId = _this.userData;
                cookieService.set('user', JSON.stringify(_this.userData));
                JSON.parse(cookieService.get('user'));
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    AuthService.prototype.ngOnInit = function () { };
    //sign in function
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            if (result.user.emailVerified !== true) {
                _this.SetUserData(result.user);
                _this.SendVerificationMail();
                _this.showLoader = true;
            }
            else {
                _this.showLoader = false;
                _this.ngZone.run(function () {
                    _this.router.navigate(['/auth/login']);
                });
            }
        }).catch(function (error) {
            _this.toster.error('You have enter Wrong Email or Password.');
        });
    };
    //main verification function
    AuthService.prototype.SendVerificationMail = function () {
        var _this = this;
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
            _this.router.navigateByUrl('/dashboard/default');
        });
    };
    //Sign in with Facebook
    AuthService.prototype.signInFacebok = function () {
        return this.AuthLogin(new auth.FacebookAuthProvider());
    };
    //Sign in with Twitter
    AuthService.prototype.signInTwitter = function () {
        return this.AuthLogin(new auth.TwitterAuthProvider());
    };
    //Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    };
    AuthService.prototype.ForgotPassword = function (passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(function () {
            window.alert('Password reset email sent, check your inbox.');
        }).catch(function (error) {
            window.alert(error);
        });
    };
    //Authentication for Login
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['/dashboard/default']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error);
        });
    };
    //Set user
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            photoURL: user.photoURL || 'assets/dashboeard/boy-2.png',
            emailVerified: user.emailVerified
        };
        userRef.delete().then(function () {
        }).catch(function (error) {
        });
        return userRef.set(userData, {
            merge: true
        });
    };
    // Sign out
    AuthService.prototype.SignOut = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        return this.afAuth.auth.signOut().then(function () {
            _this.showLoader = false;
            localStorage.clear();
            _this.cookieService.deleteAll('user', '/auth/login');
            _this.router.navigate(['/auth/login']);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return (user != null && user.emailVerified != false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            AngularFireAuth,
            Router,
            NgZone,
            ToastrService,
            CookieService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map