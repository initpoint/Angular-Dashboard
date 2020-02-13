import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartsRoutingModule} from './carts-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CartsService} from '../../shared/services/firebase/carts.service';
import {CartsComponent} from './carts.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {DxDataGridModule,DxFileUploaderModule} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
    declarations: [CartsComponent],

    imports: [
        DxDataGridModule,
        DxFileUploaderModule,
        CommonModule,
        CartsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        ToastrModule.forRoot(),
        TranslateModule,
    ],
    providers: [CartsService]
})
export class CartsModule {
}
