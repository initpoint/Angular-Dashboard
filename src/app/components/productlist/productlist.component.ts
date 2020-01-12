import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductlistService} from 'src/app/shared/services/firebase/productlist.service';
import DataSource from 'devextreme/data/data_source';
import CustomeStore from 'devextreme/data/custom_store';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-productlist',
    templateUrl: './productlist.component.html',
    styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
    @ViewChild('form', {static: false}) form: NgForm;
    popupVisible = false;
    value: any[] = [];
    source: DataSource;
    store: CustomeStore;
    lang;
    currentRow;

    constructor(
        private productlistService: ProductlistService) {
        this.store = new CustomeStore({
            key: 'id',
            load: (opts) => {
                console.log(opts);
                const take = 'take' in opts ? opts.take : null;
                const filter = !opts.filter === undefined ? opts.filter[2] : null;
                return this.productlistService.getItems(take, filter);
                // this.lang = localStorage.getItem('lang') == 'ar';
                // if (opts.filter[2] == '') {
                //     this.productlistService.getCategories().subscribe(res => {
                //         resolve({data: res});
                //     });
                // } else {
                //     this.productlistService.getItems(opts.filter[2], {
                //         'category': 'ranking',
                //         'ranking': 'material',
                //         'material': 'combination'
                //     }[this.currentRow.type]).subscribe(res => {
                //         resolve({data: res});
                //     });
                // }

            },
            update: (key, values) => {
                let item = this.source.items().find(item => item.key == key).data;
                values.type = item.type;
                return this.productlistService.updateItem(key, values);
            },
            remove: (key) => {
                let item = this.source.items().find(item => item.key == key).data;
                item.isActive = !item.isActive;
                return new Promise((resolve, reject) => {
                    return this.productlistService.setTreeAttr(item, {isActive: item.isActive});
                });
            },
            insert: (values) => {
                return this.productlistService.insertItem(values);
            }
        });
        this.source = new DataSource(this.store);
    }


    // uploadImages() {
    //     let i = 0;
    //     if (!document.getElementsByClassName('list-group')[0]) {
    //         document.getElementsByClassName('widget-container')[0].closest('.dx-template-wrapper').insertAdjacentHTML('afterbegin', '<ul class="list-group"></ul>');
    //         document.getElementsByClassName('list-group')[0].insertAdjacentHTML('afterbegin', '<li class="list-group-item list-group-item-action"></li>');
    //     }
    //     this.value.forEach( file => {
    //         file.newName = Math.floor(Math.random()*10000000) + '-' + i + '.' + file.name.split('.').reverse()[0];
    //         this.productlistService.uploadImage(file, this.currentRow);
    //         i++;
    //     });
    // }


    ngOnInit() {
        this.lang = localStorage.getItem('lang') === 'ar';
    }

    // deleteImage(pic) {
    //     let path = pic.split('/').reverse()[0].split('?')[0].replace('%2F', '/');
    //     if (confirm('Are your sure you want to delete this Image') == true) {
    //         this.productlistService.removeImage(this.currentRow, path, pic).then(res => {
    //             document.getElementById(path.split('/')[1]).remove();
    //         });
    //     }
    // }


    // cellPrepared(e) {
    //     if (e.data) {
    //         if (e.data.type == 'combination') {
    //             let addLink = e.cellElement.querySelector('.dx-link-add');
    //             if (addLink) {
    //                 addLink.remove();
    //             }
    //         }
    //     }
    // }

    // rowPrepared(e) {
    //     if (e.data) {
    //         if (e.data.type == 'category') {
    //             e.rowElement.style.backgroundColor = '#9a9ccc';
    //         } else if (e.data.type == 'ranking') {
    //             e.rowElement.style.backgroundColor = '#b2b4dc';
    //         } else if (e.data.type == 'material') {
    //             e.rowElement.style.backgroundColor = '#d4d5ea';
    //         } else {
    //             e.rowElement.style.backgroundColor = '#e3e7f1';
    //         }
    //     }
    // }

    // RowClicked($event: any) {
    //     this.currentRow = $event.data;
    //     if (this.currentRow.type == 'combination') {
    //         this.popupVisible = true;
    //         if (document.getElementsByClassName('new-photos').length != 0) {
    //             for (var i = 0; i <= document.getElementsByClassName('new-photos').length; i++) {
    //                 document.getElementsByClassName('new-photos')[i].remove();
    //             }
    //         }
    //     }
    // }

    addRows(number: number) {
        for (let x = 0; x < number; x++) {
            const i = Math.floor(Math.random() * 15).toString();
            const j = Math.floor(Math.random() * 15).toString();
            this.productlistService.insertItem({
                nameAr: 'تركيبة رقم ' + i,
                nameEn: 'Combination #' + i,
                code: 'c-' + i,
                categoryCode: 'cat' + i,
                rankingCode: 'rank' + j,
                categoryNameAr: 'Category ' + i,
                rankingNameAr: 'Ranking ' + j
            });
        }
    }

    removeAllItems() {
        this.productlistService.removeAllItems();
    }
}
