var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentLayoutComponent } from './components/layout/content-layout/content-layout.component';
import { FullLayoutComponent } from './components/layout/full-layout/full-layout.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { TranslateModule } from '@ngx-translate/core';
import { CustomizerComponent } from './components/customizer/customizer.component';
import { DragulaModule } from 'ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';
// services
import { NavService } from "./services/nav.service";
import { ChatService } from "./services/chat.service";
import { CustomizerService } from "./services/customizer.service";
// Directives
import { ToggleFullscreenDirective } from "./directives/fullscreen.directive";
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        NgModule({
            declarations: [
                LoaderComponent,
                HeaderComponent,
                FooterComponent,
                SidebarComponent,
                BookmarkComponent,
                RightSidebarComponent,
                ContentLayoutComponent,
                FullLayoutComponent,
                FeatherIconsComponent,
                ToggleFullscreenDirective,
                BreadcrumbComponent,
                CustomizerComponent
            ],
            imports: [
                CommonModule,
                RouterModule,
                FormsModule,
                TranslateModule,
                DragulaModule.forRoot(),
                NgbModule,
                GalleryModule.forRoot()
            ],
            exports: [
                LoaderComponent,
                FeatherIconsComponent,
                TranslateModule
            ],
            providers: [
                NavService,
                ChatService,
                CustomizerService
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map