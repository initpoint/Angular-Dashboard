import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemsService} from 'src/app/shared/services/firebase/items.service';
import {DxDataGridComponent} from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import {ImportService} from 'src/app/shared/services/firebase/import.service';
import {LogsService} from 'src/app/shared/services/firebase/logs.service';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
    @ViewChild('items', {static: true}) dataGrid: DxDataGridComponent;
    source: any;
    lang;
    materialSelectedRows = {};
    rankingSelectedRows = {};
    currentRow: any;
    imageUploaderpopup: boolean;
    value: any[] = [];
    doneSaving = false;

    constructor(public itemsService: ItemsService, public importService: ImportService, public logsService: LogsService) {
        this.itemsService.lastItem = null;
        this.source = new CustomStore({
            key: 'code',
            totalCount: () => new Promise(resolve => {
                this.itemsService.getItemsTotalCount().subscribe(metaDoc => {
                    resolve(metaDoc.data() ? metaDoc.data()['count'] || 0 : 0);
                });
            }),
            load: (opts) => {
                if (opts.filter) {
                    return new Promise((resolve) => {
                        this.itemsService.searchByCode(opts.filter[2].filterValue).subscribe(item => {
                            resolve(item);
                        });
                    });
                } else {
                    return new Promise((resolve) => {
                        this.itemsService.getItemsForPagination().subscribe(items => {
                            resolve(items);
                        });
                    });
                }
            },
            insert: (data) => {
                const logData = 'Created new item [' + data.code + ']';
                this.logsService.createLog(logData);
                return this.itemsService.addItem(data);
            },
            update: (key, values) => {
                const logData = 'Updated item [' + key + '] data [' + Object.keys(values) + '] to [' + Object.values(values) + ']';
                this.logsService.createLog(logData);
                return this.itemsService.updateItem(key, values);
            }
        });
    }

    saveImportedData(dataFromFile, columnToShow) {
        const formatedData = dataFromFile.map(fileRow => {
            Object.keys(fileRow).forEach(oldKey => {
                const newColumn = columnToShow.find(column => column.valueField === oldKey);
                if (newColumn) {
                    fileRow[newColumn.field] = fileRow[oldKey]; // replace old keys (A,B,C,....) with the fields names
                }
                delete fileRow[oldKey];
            });
            return fileRow;
        });
        this.itemsService.addItems(formatedData).then(() => {
            this.logsService.createLog(`Imported ${formatedData.length} Combinations`);
            this.doneSaving = true;
        });
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') === 'ar';
        setTimeout(() => {
            if (this.dataGrid && localStorage.getItem('barCodeId')) {
                this.dataGrid.instance.searchByText(localStorage.getItem('barCodeId'));
                localStorage.removeItem('barCodeId');
            }
        }, 200);
    }

    deleteImage(pic) {
        const path = pic.split('/').reverse()[0].split('?')[0].replace('%2F', '/');
        if (confirm('Are your sure you want to delete this Image') === true) {
            this.itemsService.removeImage(this.currentRow, path, pic).then(res => {
                document.getElementById(path.split('/')[1]).remove();
            });
        }
    }

    uploadImages() {
        let i = 0;
        if (!document.getElementsByClassName('list-group')[0]) {
            document.getElementsByClassName('widget-container')[0]
                .closest('.dx-template-wrapper').insertAdjacentHTML('afterbegin', '<ul class="list-group"></ul>');
            document.getElementsByClassName('list-group')[0]
                .insertAdjacentHTML('afterbegin', '<li class="list-group-item avatars list-group-item-action"></li>');
        }
        this.value.forEach(file => {
            file.newName = Math.floor(Math.random() * 10000000) + '-' + i + '.' + file.name.split('.').reverse()[0];
            this.itemsService.uploadImage(file, this.currentRow).then(downloadURL => {
                this.currentRow.pics.push(downloadURL);
            });
            i++;
        });
        this.value = [];
    }

    materialRowSelected(event, key, items, collapsedItems, component) {
        this.materialSelectedRows[key[1]] = event.value;
        component.expandRow(key);
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
        ranking.component.expandRow(ranking.key);
        if (ranking.data.items) {
            ranking.data.items.forEach(item => {
                this.materialRowSelected(event, [ranking.key[0], item.key], item.items, item.collapsedItems, ranking.component);
            });
        }
        if (ranking.data.collapsedItems) {
            ranking.data.collapsedItems.forEach(item => {
                this.materialRowSelected(event, [ranking.key[0], item.key], item.items, item.collapsedItems, ranking.component);
            });
        }
    }

    getMaterialSelectValue(material) {
        return this.materialSelectedRows[material.key[1]];
    }

    getRankingSelectValue(ranking) {
        return this.rankingSelectedRows[ranking.key[0]];
    }

    pics(data) {
        this.currentRow = data.data;
        this.currentRow.pics = this.currentRow.pics || [];
        this.imageUploaderpopup = true;
        if (document.getElementsByClassName('newPhotos').length != 0) {
            for (let i = 0; i < document.getElementsByClassName('newPhotos').length; i++) {
                document.getElementsByClassName('newPhotos')[i].remove();
            }
            document.getElementsByClassName('dx-fileuploader-files-container')[0].remove();
        }
    }
}
