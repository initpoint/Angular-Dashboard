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
    lastLoginAt: number;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService implements OnInit {
    public currentUser = null;
    public showLoader = false;

    constructor(public afs: AngularFirestore,
                public afAuth: AngularFireAuth,
                public router: Router,
                public toastrService: ToastrService) {

        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.afs.doc(`users/${user.uid}`).get().subscribe(userDoc => {
                    this.currentUser = userDoc.data();
                    localStorage.setItem('user', JSON.stringify(this.currentUser));
                    this.showLoader = false;
                    //this.router.navigate(['/customers/show']);
                    this.toastrService.success('Authentication successful.');
                });
            } else {
                this.currentUser = null;
                localStorage.clear();
                this.showLoader = false;
            }
        });
    }

    ngOnInit(): void {
    }

    SignIn(email, password) {
        this.showLoader = true;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password).catch((error) => {
            this.showLoader = false;
            this.toastrService.error('Wrong Email or Password.');
        });
    }

    SignOut() {
        this.showLoader = true;
        this.router.navigate(['/auth/login']);
        return this.afAuth.auth.signOut();
    }

    ForgotPassword(passwordResetEmail) {
        this.showLoader = true;
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail).then(() => {
            this.toastrService.success('Password reset email sent, check your inbox.');
            this.showLoader = false;
        }).catch((error) => {
            this.showLoader = false;
            this.toastrService.error(error);
        });
    }
}
