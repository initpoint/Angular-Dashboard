import {Component, OnInit, Output ,TemplateRef, ViewChild} from '@angular/core';
import {CartService} from '../../../shared/services/e-commerce/cart.service';
import {WishListService} from '../../../shared/services/e-commerce/wish-list.service';
import {ProductsService} from 'src/app/shared/services/firebase/products.service';
import {Category} from 'src/app/shared/model/category.model';
import DataSource from 'devextreme/data/data_source';
import CustomeStore from 'devextreme/data/custom_store';
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
    template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, World!</p>
      <p><button class="btn btn-lg btn-outline-primary" (click)="open()">Launch demo modal</button></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModal1Content {
    constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

    open() {
        this.modalService.open(NgbdModal2Content, {
            size: 'lg'
        });
    }
}

@Component({
    template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, World!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModal2Content {
    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    providers: [NgbModal]
})
export class ProductsComponent implements OnInit {
    categories: Category[];
    source: DataSource;
    store: CustomeStore;
    ExpandedRow;
    lang;
    canAdd: boolean = false;
@ViewChild('content',{static: true})
private content: TemplateRef<any>;
    constructor(
        private productService: ProductsService,
        private cartService: CartService,
        private wishService: WishListService,
        private modalService: NgbModal,) {
        this.store = new CustomeStore({
            key: 'id',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    if (!this.ExpandedRow) {
                        this.productService.getCategories().subscribe(res => {
                            resolve({data: res});
                        });
                    } else {
                        this.productService.getItems(this.ExpandedRow.id, {
                            'category': 'ranking',
                            'ranking': 'material',
                            'material': 'combination'
                        }[this.ExpandedRow.type]).subscribe(res => {
                            resolve({data: res});
                            // this.ExpandedRow = {};
                        });
                    }
                });
            },
            update: (key, values) => {
                let item = this.source.items().find(item => item.key == key).data;
                values.type = item.type;
                return this.productService.updateItem(key, values);
            },
            remove: (key) => {
                let item = this.source.items().find(item => item.key == key).data;
                item.active = !item.active;
                return new Promise((resolve, reject) => {
                    return this.productService.setTreeAttr(item, {active: item.active});
                });
            },
            insert: (values) => {
                values.hasChildren = false;
                if (values.headId != '') {
                    let parent = this.source.items().find(item => item.key == values.headId).data;
                    values.type = {'category': 'ranking', 'ranking': 'material', 'material': 'combination'}[parent.type];
                    values.parent_type = parent.type;
                    return this.productService.addChild(values);
                } else {
                    values.type = 'category';
                    return this.productService.createCategory(values);
                }
            },

        });
        this.source = new DataSource({
            store: this.store,
        });
    }

    RowExpanding(e) {
        this.ExpandedRow = this.source.items().find(item => item.key == e.key).data;
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') == 'ar';
    }

    cellPrepared(e) {
        if (e.data) {
            if (e.data.type == 'combination') {
                let addLink = e.cellElement.querySelector('.dx-link-add');
                if (addLink) {
                    addLink.remove();
                }
            } else {
                let imgLink = e.cellElement.querySelector('.image-uploader');
                if (imgLink) {
                    imgLink.remove();
                }
            }
        }
    }
    ImgBtn(e) {
        console.log('Content' , e)
        // this.modalService.open(NgbdModal1Content);
    }
}
