import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PermissionService} from 'src/app/shared/services/firebase/permission.service';
import {PermissionsRoutingModule} from './permissions-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PermissionComponent} from './permissions.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {
    DxPopupModule,
    DxSelectBoxModule,
    DxBoxModule,
    DxButtonModule,
    DxTemplateModule,
    DxTreeListModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxListModule,
    DxSwitchModule,
    DxFileUploaderModule
} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [PermissionComponent],

    imports: [
        DxButtonModule,
        DxFileUploaderModule,
        DxDataGridModule,
        DxBoxModule,
        DxSelectBoxModule,
        DxPopupModule,
        DxTemplateModule,
        DxListModule,
        DxTreeListModule,
        DxCheckBoxModule,
        DxSwitchModule,
        CommonModule,
        PermissionsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        TranslateModule,
        ToastrModule.forRoot(),
        SharedModule,

    ],

    providers: [PermissionService]
})
export class PermissionsModule {
}
