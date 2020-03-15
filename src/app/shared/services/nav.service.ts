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
            title: 'Customers', icon: 'user', type: 'link', path: '/customers', active: false,
        },
        {
            title: 'Items', path: '/items', icon: 'shopping-bag', type: 'link', active: false,
        },{
            title: 'Promotions', path: '/promotions', icon: 'archive', type: 'link', active: false,
        },
        {
            title: 'Price List', path: '/pricelist', icon: 'list', type: 'link', active: false,
        },
        {
            title: 'Carts', path: '/carts', icon: 'shopping-cart', type: 'link', active: false,
        },
        {
            title: 'Bills', path: '/bills', icon: 'dollar-sign', type: 'link', active: false,
        },
        {
            title: 'Invoices', path: '/invoices', icon: 'printer', type: 'link', active: false,
        },
        {
            title: 'Permissions', path: '/permissions', icon: 'git-pull-request', type: 'link', active: false,
        },
        {
            title: 'Settings', path: '/import', icon: 'settings', type: 'link', active: false,
        },
        {
            title: 'Users', path: '/users', icon: 'users', type: 'link', active: false,
        },
        {
            title: 'Users Permissions', path: '/users-permissions', icon: 'user-check', type: 'link', active: false,
        },
        {
            path: '/chat', title: 'Chat', icon: 'message-square', type: 'link', bookmark: true
        },
        {
            path: '/logs', title: 'Logs', icon: 'file', type: 'link', bookmark: true
        },{
            path: '/reports', title: 'Reports', icon: 'file-text', type: 'link', bookmark: true
        },
    ];
    // Array
    items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
