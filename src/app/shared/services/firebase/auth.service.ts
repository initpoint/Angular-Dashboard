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
    avatar: string;
    userType: string;
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
                this.userData = user;
                this.SetUserData(user, this);
                this._sessionId = this.userData;
                cookieService.set('user', JSON.stringify(this.userData));
                JSON.parse(cookieService.get('user'));
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });

    }

    ngOnInit(): void {

    }
    /*getLoggedUser = async ()=> {
        try {
            this.currentUser = await JSON.parse(this.cookieService.get('userLogged'));
            console.log(this.currentUser);
        }
        catch(ex) {
            console.error('Set User Error : ',ex);
        }
    }*/

    //sign in function
    SignIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                if (result.user.emailVerified !== true) {
                    this.SetUserData(result.user, this);
                    this.SendVerificationMail();
                    this.showLoader = true;
                } else {
                    this.showLoader = false;
                    this.ngZone.run(() => {
                        this.router.navigate(['/auth/login']);
                    });
                }
            }).catch((error) => {
                this.toster.error('You have enter Wrong Email or Password.');
            })
    }

    //main verification function
    SendVerificationMail() {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(() => {
                this.toster.success('Authentication successful.');
                this.router.navigateByUrl('/dashboard/default');
            })
    }


    ForgotPassword(passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('Password reset email sent, check your inbox.');
            }).catch((error) => {
                window.alert(error);
            });
    }

    //Set user
    SetUserData(user, ref) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        userRef.get().subscribe(function (doc) {
            ref.cookieService.set('userLogged', JSON.stringify(doc.data()));
            JSON.parse(ref.cookieService.get('userLogged'));
            localStorage.setItem('userLogged', JSON.stringify(doc.data()));
            JSON.parse(localStorage.getItem('userLogged'));
            ref.currentUser = JSON.parse(ref.cookieService.get('userLogged'));
            const userData: User = {
                name: doc.data().name,
                email: user.email,
                uid: user.uid,
                emailVerified: user.emailVerified,
                avatar: doc.data().avatar,
                userType: doc.data().userType,
            };
            if (user.displayName == null || user.displayName == undefined) {
                userData.name = doc.data().name;
            }
            userRef.set(userData, {
                merge: true
            });
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
            this.cookieService.deleteAll('user', '/auth/login');
            this.cookieService.deleteAll('userLogged', '/auth/login');
            this.router.navigate(['/auth/login']);
        });
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user != null && user.emailVerified != false) ? true : false;
    }

}