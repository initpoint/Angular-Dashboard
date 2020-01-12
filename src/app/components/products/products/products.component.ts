import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from 'src/app/shared/services/firebase/products.service';
import {Category} from 'src/app/shared/model/category.model';
import DataSource from 'devextreme/data/data_source';
import CustomeStore from 'devextreme/data/custom_store';
import {NgForm} from '@angular/forms';
import {int} from 'flatpickr/dist/utils';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    @ViewChild('form', {static: false}) form: NgForm;
    popupVisible = false;
    value: any[] = [];
    source: DataSource;
    store: CustomeStore;
    ExpandedRow;
    lang;
    canView = false;
    currentRow;
    showTree = true;
    listStore: CustomeStore;
    listSource: DataSource;

    constructor(
        private productService: ProductsService) {
        this.store = new CustomeStore({
            key: 'id',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    if (opts.filter[2] == '') {
                        this.productService.getCategories().subscribe(res => {
                            resolve({data: res});
                        });
                    } else {
                        this.productService.getItems(opts.filter[2], {
                            'category': 'ranking',
                            'ranking': 'material',
                            'material': 'combination'
                        }[this.currentRow.type]).subscribe(res => {
                            resolve({data: res});
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
                item.isActive = !item.isActive;
                return new Promise((resolve, reject) => {
                    return this.productService.setTreeAttr(item, {isActive: item.isActive});
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
            onLoaded: (fun) => {
                this.source.paginate(true)
            }

        });
        this.source = new DataSource({
            store: this.store,
        });
        this.source.paginate(false)
        this.listStore = new CustomeStore({
            key: 'id',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    this.productService.getCombinations().subscribe(res => {
                        resolve({data: res});
                    });
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
            }

        });
        this.listSource = new DataSource({
            store: this.listStore,
        });
    }

    changeView() {
        this.showTree = !this.showTree;
    }

    uploadImages() {
        let i = 0;
        if (!document.getElementsByClassName('list-group')[0]) {
            document.getElementsByClassName('widget-container')[0].closest('.dx-template-wrapper').insertAdjacentHTML('afterbegin', '<ul class="list-group"></ul>');
            document.getElementsByClassName('list-group')[0].insertAdjacentHTML('afterbegin', '<li class="list-group-item list-group-item-action"></li>');
        }
        this.value.forEach( file => {
            file.newName = Math.floor(Math.random()*10000000) + '-' + i + '.' + file.name.split('.').reverse()[0];
            this.productService.uploadImage(file, this.currentRow);
            i++;
        });
        //this.popupVisible = false;
    }


    ngOnInit() {
        this.lang = localStorage.getItem('lang') == 'ar';
    }

    deleteImage(pic) {
        let path = pic.split('/').reverse()[0].split('?')[0].replace('%2F', '/');
        if (confirm('Are your sure you want to delete this Image') == true) {
            this.productService.removeImage(this.currentRow, path, pic).then(res => {
                document.getElementById(path.split('/')[1]).remove();
            });
        }
    }


    cellPrepared(e) {
        if (e.data) {
            if (e.data.type == 'combination') {
                let addLink = e.cellElement.querySelector('.dx-link-add');
                if (addLink) {
                    addLink.remove();
                }
            }
        }
    }

    rowPrepared(e) {
        if (e.data) {
            if (e.data.type == 'category') {
                e.rowElement.style.backgroundColor = '#9a9ccc';
            } else if (e.data.type == 'ranking') {
                e.rowElement.style.backgroundColor = '#b2b4dc';
            } else if (e.data.type == 'material') {
                e.rowElement.style.backgroundColor = '#d4d5ea';
            } else {
                e.rowElement.style.backgroundColor = '#e3e7f1';
            }
        }
    }

    RowClicked($event: any) {
        this.currentRow = $event.data;
        if (this.currentRow.type == 'combination') {
            this.popupVisible = true;
            if (document.getElementsByClassName('new-photos').length != 0) {
                for (var i = 0; i <= document.getElementsByClassName('new-photos').length; i++) {
                    document.getElementsByClassName('new-photos')[i].remove();
                }
            }
        }
    }

}
