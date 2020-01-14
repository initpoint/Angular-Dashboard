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
    DxButtonModule,
    DxTemplateModule,
    DxTreeListModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxSwitchModule
} from 'devextreme-angular';
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
        DxSwitchModule,
        CommonModule,
        PermissionsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        TranslateModule,
        ToastrModule.forRoot(),

    ],

    providers: [PermissionService]
})
export class PermissionsModule {
}
