import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserService} from '../../shared/services/firebase/user.service';
import {UsersComponent} from './users/users.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {DxDataGridModule} from 'devextreme-angular';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
    declarations: [UsersComponent],

    imports: [
        DxDataGridModule,
        CommonModule,
        UsersRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        ToastrModule.forRoot(),
        TranslateModule,
    ],
    providers: [UserService]
})
export class UsersModule {
}
