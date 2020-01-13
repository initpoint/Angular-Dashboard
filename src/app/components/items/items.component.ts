import {Component, OnInit} from '@angular/core';
import {ItemsService} from 'src/app/shared/services/firebase/items.service';
import CustomeStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
    source: any;
    lang;
    materialSelectedRows= {};
    rankingSelectedRows= {};
    applyFilterTypes = {
        key: "auto",
        name: "Immediately"
    };
    constructor(private itemsService: ItemsService) {
        this.source = new DataSource(new CustomeStore({
            key: 'code',
            load: (opts) => this.itemsService.getItems(opts),
            update: (key, newValues) => this.itemsService.updateItem(key, newValues),
            remove: (key) => this.itemsService.updateItem(key, {isActive: false})
        }));
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') === 'ar';
    }

    materialRowSelected(event, key,items,collapsedItems,component) {
        this.materialSelectedRows[key[1]] = event.value;
        component.expandRow(key)
        if (items) {
            items.forEach(item => {
                if (event.value) {
                    component.selectRows(item.code, true);
                } else {
                    component.deselectRows(item.code);
                }
            });
        }
        if (collapsedItems) {
            collapsedItems.forEach(item => {
                if (event.value) {
                    component.selectRows(item.code, true);
                } else {
                    component.deselectRows(item.code);
                }
            });
        }
    }
    rankingRowSelected(event, ranking) {
        this.rankingSelectedRows[ranking.key[0]] = event.value;
        ranking.component.expandRow(ranking.key)
        if (ranking.data.items) {
            ranking.data.items.forEach(item => {
               this.materialRowSelected(event,[ranking.key[0],item.key],item.items,item.collapsedItems,ranking.component)
            });
        }
        if (ranking.data.collapsedItems) {
            ranking.data.collapsedItems.forEach(item => {
            this.materialRowSelected(event,[ranking.key[0],item.key],item.items,item.collapsedItems,ranking.component)
             });
        }
    }
    getMaterialSelectValue(material) {
        return this.materialSelectedRows[material.key[1]];
    }
    getRankingSelectValue(ranking) {
        return this.rankingSelectedRows[ranking.key[0]];
    }
}
