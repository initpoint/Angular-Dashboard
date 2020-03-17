import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {ForgetpasswordComponent} from './auth/forgetpassword/forgetpassword.component';
import {ToastrModule} from 'ngx-toastr';
import { DragulaModule } from 'ng2-dragula';
import {AuthService} from './shared/services/firebase/auth.service';
import {AdminGuard} from './shared/guard/admin.guard';
import {CookieService} from 'ngx-cookie-service';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {JwtModule} from '@auth0/angular-jwt';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ForgetpasswordComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
        DragulaModule.forRoot(),
        JwtModule.forRoot({
            config: {
                tokenGetter,
            }
        }),
        ToastrModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
        }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule.enablePersistence()
    ],
    providers: [AuthService, AdminGuard, CookieService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
