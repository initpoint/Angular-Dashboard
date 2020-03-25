import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class CreateGuard implements CanActivate {
    public constructor(private router: Router, private toastrService: ToastrService, private translateService: TranslateService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        if (!currentUser.permissions.create.includes(this.router.url)) {
            this.router.navigate(['/']);
            this.translateService.get(['Permission required','Add']).subscribe(msg => {
                this.toastrService.error(msg['Permission required'] + ': '+msg['Add']);
            });
        }
        return currentUser.permissions.create.includes(this.router.url);
    }
}


