import {Component, OnInit} from '@angular/core';
import {ProductlistService} from 'src/app/shared/services/firebase/productlist.service';
import CustomeStore from 'devextreme/data/custom_store';
import {NgForm} from '@angular/forms';
import DevExpress from 'devextreme';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-productlist',
    templateUrl: './productlist.component.html',
    styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
    // popupVisible = false;
    // value: any[] = [];
    source: any;
    lang;

    constructor(private productlistService: ProductlistService) {
        this.source = new DataSource(new CustomeStore({
            key: 'id',
            load: (opts) => this.productlistService.getItems(opts),
            update: (key, newValues) => this.productlistService.updateItem(key, newValues),
            remove: (key) => this.productlistService.updateItem(key, {isActive: false})
        }));
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') === 'ar';
    }

    addRows(number: number) {
        for (let x = 0; x < number; x++) {
            const i = Math.floor(Math.random() * 5).toString();
            const j = Math.floor(Math.random() * 10).toString();
            const k = Math.floor(Math.random() * 20).toString();
            const u = Math.floor(Math.random() * 9999).toString();
            const catCode = 'cat' + i;
            const rankCode = 'rank' + i + '-' + j;
            const matCode = 'mat' + i + '-' + j + '-' + k;
            this.productlistService.insertItem({
                nameAr: 'تركيبة رقم ' + i,
                nameEn: 'Combination #' + i,
                code: 'c-' + u,
                categoryCode: catCode,
                rankingCode: rankCode,
                materialCode: matCode,
                isActive: true,
                isNew: true,
                categoryNameAr: 'Category ' + i,
                rankingNameAr: 'Ranking ' + i + '-' + j,
                materialNameAr: 'Material ' + i + '-' + j + '-' + k
            });
        }
    }

    removeAllItems() {
        this.productlistService.removeAllItems();
    }

    rowExpanding(e) {
        e.component.collapseAll(e.key.length - 1);
    }

    // uploadImages() {
    //     let i = 0;
    //     if (!document.getElementsByClassName('list-group')[0]) {
    //         document.getElementsByClassName('widget-container')[0]
    //         .closest('.dx-template-wrapper').insertAdjacentHTML('afterbegin', '<ul class="list-group"></ul>');
    //         document.getElementsByClassName('list-group')[0]
    //         .insertAdjacentHTML('afterbegin', '<li class="list-group-item list-group-item-action"></li>');
    //     }
    //     this.value.forEach( file => {
    //         file.newName = Math.floor(Math.random()*10000000) + '-' + i + '.' + file.name.split('.').reverse()[0];
    //         this.productlistService.uploadImage(file, this.currentRow);
    //         i++;
    //     });
    // }

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

}
