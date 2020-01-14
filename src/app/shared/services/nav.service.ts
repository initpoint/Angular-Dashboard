import {Injectable, HostListener} from '@angular/core';
import {BehaviorSubject, Observable, Subscriber} from 'rxjs';
import {AuthService} from '../services/firebase/auth.service';

// Menu
export interface Menu {
    path?: string;
    title?: string;
    icon?: string;
    type?: string;
    badgeType?: string;
    badgeValue?: string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
}

@Injectable({
    providedIn: 'root'
})

export class NavService {

    public screenWidth: any;
    public collapseSidebar: boolean = false;

    constructor(public authService: AuthService) {
        this.onResize();
        if (this.screenWidth < 991) {
            this.collapseSidebar = true;
        }
    }

    // Windows width
    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.screenWidth = window.innerWidth;

    }

    MENUITEMS: Menu[] = [
        {
            title: 'Customers', icon: 'user', type: 'link', path: '/customers/show', active: false,
        },
        {
            title: 'Items', path: '/items', icon: 'shopping-bag', type: 'link', active: false,
        },
        {
            title: 'Price List', path: '/pricelist/show', icon: 'list', type: 'link', active: false,
        },
        {
            title: 'Carts', path: '/carts', icon: 'shopping-cart', type: 'link', active: false,
        },
        {
            title: 'Permissions', path: '/permissions/show', icon: 'git-pull-request', type: 'link', active: false,
        },
        {
            title: 'Import', path: '/import', icon: 'share', type: 'link', active: false,
        },
        {
            title: 'Users', path: '/users/show', icon: 'users', type: 'link', active: false,
        },
    ];
    // Array
    items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
