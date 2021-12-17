import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/firebase/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    public constructor(private router: Router, public jwtHelper: JwtHelperService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const token = localStorage.getItem('token');
        //if (this.jwtHelper.isTokenExpired(token)) {
         //   this.router.navigate(['/auth/login']);
         //   return false;
       // }
        return true;
    }
}


