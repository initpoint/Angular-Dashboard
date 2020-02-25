import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {ForgetpasswordComponent} from './auth/forgetpassword/forgetpassword.component';
import {ContentLayoutComponent} from './shared/components/layout/content-layout/content-layout.component';
import {FullLayoutComponent} from './shared/components/layout/full-layout/full-layout.component';
import {content} from './shared/routes/content-routes';
import {full} from './shared/routes/full.routes';
import {AdminGuard} from './shared/guard/admin.guard';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'customers/show',
        canActivate: [AdminGuard],
        pathMatch: 'full'
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'auth/forgetpassword',
        component: ForgetpasswordComponent
    },
    {
        path: '',
        component: ContentLayoutComponent,
        canActivate: [AdminGuard],
        children: content
    },
    {
        path: '',
        component: FullLayoutComponent,
        canActivate: [AdminGuard],
        children: full
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled'
        }),
        TranslateModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
