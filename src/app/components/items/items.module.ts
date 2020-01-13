import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemsRoutingModule} from './items-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemsService} from '../../shared/services/firebase/items.service';
import {ItemsComponent} from './items.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {
    DxTreeListModule,
    DxFileUploaderModule,
    DxPopupModule,
    DxRadioGroupModule,
    DxTemplateModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxCheckBoxModule
} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [ItemsComponent],

    imports: [
        DxTextBoxModule,
        DxDataGridModule,
        DxPopupModule,
        DxTemplateModule,DxRadioGroupModule,
        DxFileUploaderModule,
        DxCheckBoxModule,
        CommonModule,
        DxTreeListModule,
        ItemsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        TranslateModule,
        ToastrModule.forRoot(),

    ],

    providers: [ItemsService]
})
export class ItemsModule {
}
