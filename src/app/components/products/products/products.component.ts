import {Component, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {CartService} from '../../../shared/services/e-commerce/cart.service';
import {WishListService} from '../../../shared/services/e-commerce/wish-list.service';
import {ProductsService} from 'src/app/shared/services/firebase/products.service';
import {Category} from 'src/app/shared/model/category.model';
import DataSource from 'devextreme/data/data_source';
import CustomeStore from 'devextreme/data/custom_store';
import {NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {now} from 'd3-timer';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    providers: [NgbModal]
})
export class ProductsComponent implements OnInit {
    @ViewChild('form', {static: false}) form: NgForm;
    popupVisible = false;
    value: any[] = [];
    categories: Category[];
    source: DataSource;
    store: CustomeStore;
    ExpandedRow;
    lang;
    currentRow;

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
                if (values.headId == '') {
                    values.type = 'category';
                    return this.productService.createCategory(values);
                } else {
                    let parent = this.source.items().find(item => item.key == values.headId).data;
                    values.type = {'category': 'ranking', 'ranking': 'material', 'material': 'combination'}[parent.type];
                    values.parent_type = parent.type;
                    return this.productService.addChild(values);
                }
            },

        });
        this.source = new DataSource({
            store: this.store,
        });
    }

    updateClick() {
        let i = 0;
        this.value.forEach(file => {
            console.log(file.name.split('.'));
            file.newName = new Date() + '-' + i + '.' + file.name.split('.')[1];

            this.productService.uploadImage(file, this.currentRow);
            i++;
        });
    }

    RowExpanding(e) {
        this.ExpandedRow = this.source.items().find(item => item.key == e.key).data;
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') == 'ar';
    }

    DeletingImage(pic) {
        pic = pic.split('/').reverse()[0].split('?')[0].replace('%2F','/');
        console.log(pic)
        if (confirm('Are your sure you want to delete this Image') == true) {
            this.productService.removeImage(pic);
        }
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

    RowClicked($event: any) {
        this.currentRow = $event.data;
        if (this.currentRow.type == 'combination') {
            //document.getElementsByClassName('dx-popup-content')[0].setAttribute('style','height:auto');
            this.popupVisible = true;
        }
    }

}
