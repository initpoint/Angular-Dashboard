import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PermissionService} from 'src/app/shared/services/firebase/permission.service';
import {PermissionsRoutingModule} from './permissions-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PermissionComponent} from './permissions.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Ng5SliderModule} from 'ng5-slider';
import {ToastrModule} from 'ngx-toastr';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {DxPopupModule,DxButtonModule ,DxTemplateModule,DxTreeListModule, DxDataGridModule,DxCheckBoxModule} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
    declarations: [PermissionComponent],

    imports: [
        DxButtonModule,
        DxDataGridModule,
        DxPopupModule,
        DxTemplateModule,
        DxTreeListModule,
        DxCheckBoxModule,
        CommonModule,
        PermissionsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        Ng5SliderModule,
        Ng2SearchPipeModule,
        TranslateModule,
        ToastrModule.forRoot(),

    ],

    providers: [PermissionService]
})
export class PermissionsModule {
}
