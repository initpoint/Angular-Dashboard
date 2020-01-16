import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavService, Menu  } from '../../services/nav.service';
import {AngularFirestore} from '@angular/fire/firestore';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  public menuItems: Menu[];
  public url: any;
  public fileurl: any;

  constructor(private router: Router, public navServices: NavService,private db:AngularFirestore) {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url)
              this.setNavActive(items)
            if (!items.children) return false
            items.children.filter(subItems => {
              if (subItems.path === event.url)
                this.setNavActive(subItems)
              if (!subItems.children) return false
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url)
                  this.setNavActive(subSubItems)
              })
            })
          })
        }
      })
    })
  }

  // Active Nave state
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem != item)
        menuItem.active = false
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true
            submenuItems.active = true
          }
        })
      }
    })
  }
  // Click Toggle menu
  toggletNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item))
          a.active = false
        if (!a.children) return false
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false
          }
        })
      });
    }
    item.active = !item.active
  }

  reset($event) {
    if (confirm('Are you sure about this?')) {
      console.log('Deleting Database')
       this.db.collection('item').ref.get().then(res=> {
         res.docs.forEach(doc => {
           doc.ref.delete();
         })
         console.log('item deleted');
       })
      this.db.collection('permission').ref.get().then(res=> {
        res.docs.forEach(doc => {
          doc.ref.delete();
        })
        console.log('permissions deleted');
      })
      this.db.collection('pricelist').ref.get().then(res=> {
        res.docs.forEach(doc => {
          doc.ref.delete();
        })
        console.log('pricelist deleted');
      })
      this.db.collection('carts').ref.get().then(res=> {
        res.docs.forEach(doc => {
          doc.ref.delete();
        })
        console.log('carts deleted');
      })
      this.db.collection('combinations').ref.get().then(res=> {
        res.docs.forEach(doc => {
          doc.ref.delete();
        })
        console.log('combinations deleted');
      })
    }
  }
}
