import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoaderComponent} from './components/loader/loader.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ContentLayoutComponent} from './components/layout/content-layout/content-layout.component';
import {FullLayoutComponent} from './components/layout/full-layout/full-layout.component';
import {FeatherIconsComponent} from './components/feather-icons/feather-icons.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import 'mousetrap';

import {
    DxTreeListModule,
    DxFileUploaderModule,
    DxPopupModule,
    DxButtonModule,
    DxRadioGroupModule,
    DxTemplateModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxCheckBoxModule
} from 'devextreme-angular';

// services
import {NavService} from './services/nav.service';

// Directives
import {ToggleFullscreenDirective} from './directives/fullscreen.directive';
import {ImportViewComponent} from './components/import-view/import-view.component';

@NgModule({
    declarations: [
        LoaderComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        ContentLayoutComponent,
        FullLayoutComponent,
        FeatherIconsComponent,
        ToggleFullscreenDirective,
        BreadcrumbComponent,
        ImportViewComponent,
    ],
    imports: [

        CommonModule,
        RouterModule,
        FormsModule,
        TranslateModule,
        NgbModule,
        DxTextBoxModule,
        DxDataGridModule,
        DxButtonModule,
        DxPopupModule,
        DxTemplateModule, DxRadioGroupModule,
        DxFileUploaderModule,
        DxCheckBoxModule,
        DxTreeListModule,
    ],
    exports: [
        LoaderComponent,
        FeatherIconsComponent,
        TranslateModule,
        ImportViewComponent,
        // NotificationService
    ],
    providers: [
        NavService,
    ]
})
export class SharedModule {
}

