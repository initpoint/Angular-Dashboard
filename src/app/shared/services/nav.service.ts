import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { AuthService } from '../services/firebase/auth.service';

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

	public screenWidth: any
	public collapseSidebar: boolean = false
	constructor(public authService:AuthService) {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [

		/*{
			title: 'Tables', icon: 'server', type: 'sub', active: false, children: [
				{
					title: 'Bootstrap Tables', type: 'sub', active: false, children: [
						{ path: '/table/basic', title: 'Basic Table', type: 'link' },
						{ path: '/table/sizing', title: 'Sizing Table', type: 'link' },
						{ path: '/table/border', title: 'Border Table', type: 'link' },
						{ path: '/table/styling', title: 'Styling Table', type: 'link' }
					]
				},
				{
					title: 'Ngx-Datatables', type: 'sub', active: false, children: [
						{ path: '/table/ngx-datatables/basic', title: 'Basic Table', type: 'link' },
						{ path: '/table/ngx-datatables/editing', title: 'Editing Table', type: 'link' },
						{ path: '/table/ngx-datatables/filter', title: 'Filter Table', type: 'link' },
						{ path: '/table/ngx-datatables/fullscreen', title: 'Fullscreen Table', type: 'link' },
						{ path: '/table/ngx-datatables/paging', title: 'Paging Table', type: 'link' },
						{ path: '/table/ngx-datatables/selection', title: 'Selection', type: 'link' }
					]
				},
				{ path: '/table/smart-table', title: 'Smart Table', type: 'link' },
			]
		},*/
		{
			title: 'Users', path:'/user/show',icon: 'users', type: 'link', active: false,
		},
		{
			title: 'Products', path:'/products/show',icon: 'shopping-bag', type: 'link', active: false,
		},
		{
			title: 'Customers', icon: 'user', type: 'link',path:'/customers/show', active: false,
		},
/*
		{
			path: '/support-ticket', title: 'Support Ticket', icon: 'headphones', type: 'link'
		},

		{
			title: 'Ecommerce', icon: 'shopping-bag', type: 'sub', active: false, children: [
				{ path: '/ecommerce/products', title: 'Product', type: 'link' },
				{ path: '/ecommerce/product-details/1', title: 'Product page', type: 'link' },
				{ path: '/ecommerce/product/list', title: 'Product list', type: 'link' },
				{ path: '/ecommerce/payment/detail', title: 'Payment Details', type: 'link' },
				{ path: '/ecommerce/order', title: 'Order History', type: 'link' }
			]
		},

		{
			title: 'Error Page', icon: 'alert-octagon', type: 'sub', active: false, children: [
				{ path: 'error/400', title: 'Error 400', type: 'extTabLink' },
				{ path: 'error/401', title: 'Error 401', type: 'extTabLink' },
				{ path: 'error/403', title: 'Error 403', type: 'extTabLink' },
				{ path: 'error/404', title: 'Error 404', type: 'extTabLink' },
				{ path: 'error/500', title: 'Error 500', type: 'extTabLink' },
				{ path: 'error/503', title: 'Error 503', type: 'extTabLink' }
			]
		},
		{
			title: 'Authentication', icon: 'unlock', type: 'sub', active: false, children: [
				{ path: 'authentication/login', title: 'Login Simple', type: 'extTabLink' },
				{ path: 'authentication/login/image', title: 'Login with Bg Image', type: 'extTabLink' },
				{ path: 'authentication/login/video', title: 'Login with Bg video', type: 'extTabLink' },
				{ path: 'authentication/register', title: 'Register Simple', type: 'extTabLink' },
				{ path: 'authentication/register/image', title: 'Register with Bg Image', type: 'extTabLink' },
				{ path: 'authentication/register/video', title: 'Register with Bg video', type: 'extTabLink' },
				{ path: 'authentication/unlockuser', title: 'Unlock User', type: 'extTabLink' },
				{ path: 'authentication/forgetpassword', title: 'Forget Password', type: 'extTabLink' },
				{ path: 'authentication/resetpassword', title: 'Reset Password', type: 'extTabLink' }
			]
		},
		{
			title: 'Coming Soon', icon: 'briefcase', type: 'sub', active: false, children: [
				{ path: 'comingsoon/page', title: 'Coming Simple', type: 'extTabLink' },
				{ path: 'comingsoon/page/image', title: 'Coming with Bg Image', type: 'extTabLink' },
				{ path: 'comingsoon/page/video', title: 'Coming with Bg video', type: 'extTabLink' }
			]
		},
		{
			path: '/maintenance', title: 'Maintenance', icon: 'settings', type: 'link'
		},*/
	]
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
