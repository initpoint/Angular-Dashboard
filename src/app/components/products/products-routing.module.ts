import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditProductResolver } from '../../shared/services/firebase/edit-product.resolver';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'new-product',
        component: NewProductComponent,
        data: {
          title: "New Product",
          breadcrumb: "New Product"
        }
      },
      {
        path: 'show',
        component: ProductsComponent,
        data: {
          title: "Products",
          breadcrumb: "Products"
        }
      },
      {
        path: 'edit-product/:id',
        component: EditProductComponent,
        resolve: {
          data: EditProductResolver
        },
        data: {
          title: "Edit Product",
          breadcrumb: "Edit Product"
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
