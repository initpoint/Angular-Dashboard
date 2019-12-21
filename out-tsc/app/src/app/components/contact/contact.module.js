var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../shared/services/firebase/contact.service';
import { ContactsComponent } from './contacts/contacts.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from '../../shared/services/firebase/edit-user.resolver';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Ng5SliderModule } from 'ng5-slider';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        NgModule({
            declarations: [NewUserComponent, ContactsComponent, EditUserComponent],
            imports: [
                CommonModule,
                ContactRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                HttpModule,
                Ng5SliderModule,
                Ng2SearchPipeModule,
                ToastrModule.forRoot()
            ],
            providers: [ContactService, EditUserResolver]
        })
    ], ContactModule);
    return ContactModule;
}());
export { ContactModule };
//# sourceMappingURL=contact.module.js.map