import {Component, OnInit, Output} from '@angular/core';
import {CartService} from '../../../shared/services/e-commerce/cart.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WishListService} from '../../../shared/services/e-commerce/wish-list.service';
import {ProductsService} from 'src/app/shared/services/firebase/products.service';
import {Category} from 'src/app/shared/model/category.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    categories: Category[];

    constructor(
        private productService: ProductsService,
        private cartService: CartService,
        private modalService: NgbModal,
        private wishService: WishListService) {


    }

    ngOnInit() {
        this.productService.getCategories().subscribe(res => {
            this.categories = res;
        });
    }

    cellPrepared(e) {
        let addLink = e.cellElement.querySelector('.dx-link-add');
        //console.log('Event' , e);
    }

    rowInserted(e) {
        console.log('Row', e);
    }

    editorPreparing(e) {
        if (e.dataField === 'headId' && e.row.data.ID === 1) {
            e.cancel = true;
        }
    }

    initNewRow(e) {
        // e.data.Head_ID = 1;
    }

    onRowExpanded(e: any) {
        this.productService.getRanking(e.key).subscribe(x => {
            // let ss = x.payload.data();
            // let rr = ss.children[0].get().then(y => console.log(y.data()));
            // console.log(ss)
            // console.log(rr)
        });
    }

}
