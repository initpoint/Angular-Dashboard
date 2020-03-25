import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PromotionsComponent} from './promotions.component';
import {CreatePromotionsComponent} from './create/create-promotions.component';
import {CreateGuard} from '../../shared/guard/create.guard';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: PromotionsComponent,
                data: {
                    title: 'Promotions',
                    breadcrumb: 'Promotions'
                }
            },
            {
                path: 'create',
                component: CreatePromotionsComponent,
                canActivate: [CreateGuard],
                data: {
                    title: 'Create Promotions',
                    breadcrumb: 'Create Promotions'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PromotionsRoutingModule {
}
