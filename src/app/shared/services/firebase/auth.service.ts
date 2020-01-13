import {Injectable, OnInit, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import {ToastrService} from 'ngx-toastr';
import {CookieService} from 'ngx-cookie-service';

export interface User {
    uid: string;
    email: string;
    emailVerified: boolean;
    name: string;
    code: string;
    lastLoginAt: string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService implements OnInit {
    public currentUser: any = {};
    public userData: any;
    public user: firebase.User;
    private _sessionId: string;
    public showLoader: boolean = false;

    constructor(public afs: AngularFirestore,
                public afAuth: AngularFireAuth,
                public router: Router,
                public ngZone: NgZone,
                public toster: ToastrService,
                public cookieService: CookieService) {

        this.afAuth.authState.subscribe(user => {
            if (user) {
                const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
                userRef.get().subscribe((doc) => {
                        this.userData = user;
                        this.SetUserData(user, this);
                        this._sessionId = this.userData;
                        cookieService.set('user', JSON.stringify(this.userData));
                        JSON.parse(cookieService.get('user'));
                        localStorage.setItem('user', JSON.stringify(this.userData));
                        JSON.parse(localStorage.getItem('user'));

                });
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
                this.currentUser = null;
                this.toster.error('Permission denied.');
            }
        });

    }

    ngOnInit(): void {

    }
    // sign in function
    SignIn(email, password) {
        this.showLoader = true;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${result.user.uid}`);
                userRef.get().subscribe((doc) => {
                        if (result.user.emailVerified == true) {
                            this.SetUserData(result.user, this);
                            this.SendVerificationMail();
                        } else if (result.user.emailVerified == false) {
                            this.toster.success('Authentication successful.');
                            this.router.navigateByUrl('/user/show');
                        } else {
                            this.showLoader = false;
                            this.ngZone.run(() => {
                                this.router.navigate(['/auth/login']);
                            });
                        }
                });
            }).catch((error) => {
                this.showLoader = false;
                this.toster.error('You have enter Wrong Email or Password.');
            });
    }

    // main verification function
    SendVerificationMail() {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(() => {
                this.toster.warning('Please check your email.');
                this.toster.success('Authentication successful.');
                this.router.navigateByUrl('/user/show');
            });
    }


    ForgotPassword(passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                this.showLoader = true;
                this.toster.success('Password reset email sent, check your inbox.');
                this.router.navigateByUrl('auth/login');
                this.showLoader = false;
            }).catch((error) => {
                this.showLoader = false;
                this.toster.error(error);
            });
    }

    // Set user
    SetUserData(user, ref) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        return userRef.get().subscribe((doc) => {
            if (doc) {
                ref.currentUser = doc.data();
                //console.log('User: ' + user.uid, ref.currentUser);
                const userData: User = {
                    name: doc.data().name,
                    email: user.email,
                    uid: user.uid,
                    emailVerified: user.emailVerified,
                    code: doc.data().code,
                    lastLoginAt: user.metadata.b.toInt()
                };
                if (user.displayName == null || user.displayName === undefined) {
                    userData.name = doc.data().name;
                }
                userRef.set(userData, {
                    merge: true
                });
            }
        });
    }

    // Sign out
    SignOut() {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        return this.afAuth.auth.signOut().then(() => {
            this.showLoader = false;
            localStorage.clear();
            this.currentUser = null;
            this.cookieService.deleteAll('user', '/auth/login');
            this.router.navigate(['/auth/login']);
        });
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user != null && user.emailVerified !== false) ? true : false;
    }

}
