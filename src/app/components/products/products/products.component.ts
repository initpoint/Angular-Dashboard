import {Component, OnInit, Output} from '@angular/core';
import {CartService} from '../../../shared/services/e-commerce/cart.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WishListService} from '../../../shared/services/e-commerce/wish-list.service';
import {ProductsService} from 'src/app/shared/services/firebase/products.service';
import {Category} from 'src/app/shared/model/category.model';
import DataSource from 'devextreme/data/data_source';
import CustomeStore from 'devextreme/data/custom_store';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    categories: Category[];
    source: DataSource;
    store: CustomeStore;
    ExpandedRow;
    lang;
    canAdd: boolean;

    constructor(
        private productService: ProductsService,
        private cartService: CartService,
        private modalService: NgbModal,
        private wishService: WishListService) {
        this.store = new CustomeStore({
            key: 'id',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    if (opts.parentIds[0].length === 0) {
                        this.productService.getCategories().subscribe(res => {
                            resolve({data: res});
                        });
                    } else {
                        this.productService.getRankings(this.ExpandedRow.id).subscribe(res => {
                            //console.log(res);    //this.canAdd = res. == 'combination';
                            resolve({data: res});
                            this.ExpandedRow = {};
                        });
                    }
                });
            },
            update: (key, values) => {
                return this.productService.updateCategory(key, values);
            },
            remove: (key) => {
                return this.productService.deleteCategory(key);
            },
            insert: (values) => {
                return this.productService.createCategory(values);
            },
            onInserting: (values) => {
                let parent = this.source.items().find(item => item.key == values.headId).data;
                values.type = {'category': 'ranking', 'ranking': 'material', 'material': 'combination'}[parent.type];
                if (values.type == 'combination') {
                    values.hasChildren = false;
                }
            }
        });
        this.source = new DataSource({
            store: this.store,
        });
    }

    RowExpanding(e) {
        this.ExpandedRow = this.source.items().find(item => item.key == e.key).data;
        console.log(this.ExpandedRow)
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') == 'ar';
    }

    cellPrepared(e) {
        let item = e.data;
        if (item && item.type == 'combination') {
            let addLink = e.cellElement.querySelector('.dx-link-add');
            if (addLink) {
                addLink.remove();
            }
        }

    }

}
