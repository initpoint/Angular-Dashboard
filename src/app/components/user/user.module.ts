import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {UserService} from '../../shared/services/firebase/user.service';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {EditUserResolver} from '../../shared/services/firebase/edit-user.resolver';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Ng5SliderModule } from 'ng5-slider';
import { ToastrModule } from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [NewUserComponent, UsersComponent, EditUserComponent],

  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    Ng5SliderModule,
    Ng2SearchPipeModule,
    NgxDatatableModule,
    ToastrModule.forRoot(),

  ],

  providers: [UserService, EditUserResolver]
})
export class UserModule { }
