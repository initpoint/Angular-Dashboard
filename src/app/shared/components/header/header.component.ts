import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NavService, Menu} from '../../services/nav.service';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../services/firebase/auth.service';
import {ItemsService} from '../../services/firebase/items.service';

var body = document.getElementsByTagName('body')[0];

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public menuItems;
    public items: any[];
    public searchResult: boolean = false;
    public searchResultEmpty: boolean = false;
    public openNav: boolean = false;
    public text: string;
    public lang: string;
    public direction: string;
    public isOpenMobile: boolean = false;

    constructor(public navServices: NavService,
                private itemsService: ItemsService,
                private translate: TranslateService,
                public authService: AuthService) {
        this.lang = localStorage.getItem('lang') != null ? localStorage.getItem('lang') : 'en';
        translate.setDefaultLang(this.lang);
        if (this.lang == 'ar') {
            this.direction = 'rtl';
        } else {
            this.direction = 'ltr';
        }
        document.body.setAttribute('main-theme-layout', this.direction);
        document.getElementsByTagName('html')[0].setAttribute('dir', this.direction);
    }


    ngOnDestroy() {
        this.removeFix();
    }


    collapseSidebar() {
        this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
    }

    openMobileNav() {
        this.openNav = !this.openNav;
    }

    public changeLanguage(lang) {
        this.translate.use(lang);
        this.authService.cookieService.set('lang', lang);
        localStorage.setItem('lang', lang);
        document.getElementById('lang').innerText = lang.toUpperCase();
        if (lang == 'ar') {
            this.direction = 'rtl';
        } else {
            this.direction = 'ltr';
        }
        document.body.setAttribute('main-theme-layout', this.direction);
        document.getElementsByTagName('html')[0].setAttribute('dir', this.direction);
    }

    searchTerm(term: any) {
        term ? this.addFix() : this.removeFix();
        if (!term) {
            return this.menuItems = [];
        }
        let itemsArray = this.itemsService.itemArray;
        let searchItems = [];
        term = term.toLowerCase();
        itemsArray.filter(items => {
            items.type = 'product';
            if (items.nameArFull.includes(term) || items.barCodeId.includes(term) || items.code.includes(term) || items.materialCode.includes(term) || items.rankingCode.includes(term)) {
                searchItems.push(items);
            }

            // this.checkSearchResultEmpty(items);
        });
        this.items.filter(menuItems => {

            if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
                searchItems.push(menuItems);
            }
            if (!menuItems.children) {
                return false;
            }
            menuItems.children.filter(subItems => {
                if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
                    subItems.icon = menuItems.icon;
                    searchItems.push(subItems);
                }
                if (!subItems.children) {
                    return false;
                }
                subItems.children.filter(suSubItems => {
                    if (suSubItems.title.toLowerCase().includes(term)) {
                        suSubItems.icon = menuItems.icon;
                        searchItems.push(suSubItems);
                    }
                });
            });

            this.checkSearchResultEmpty(searchItems);
        });
        this.menuItems = searchItems;
    }

    checkSearchResultEmpty(items) {
        if (!items.length) {
            this.searchResultEmpty = true;
        } else {
            this.searchResultEmpty = false;
        }
    }

    addFix() {
        this.searchResult = true;
        body.classList.add('offcanvas');
    }

    removeFix() {
        this.searchResult = false;
        body.classList.remove('offcanvas');
        this.text = '';
    }
    setBarCodeId(barCodeId) {
        localStorage.setItem('barCodeId', barCodeId);
    }
    ngOnInit() {
        this.navServices.items.subscribe(menuItems => {
            this.items = menuItems;
        });
    }

}
