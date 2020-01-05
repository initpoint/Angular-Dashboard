import { Routes } from '@angular/router';

export const content: Routes = [

  {
    path: 'products',
    loadChildren: './components/products/products.module#ProductsModule',
    data: {
      breadcrumb: "Products"
    }
  },
  {
    path: 'pricelist',
    loadChildren: './components/pricelist/pricelist.module#PriceListModule',
    data: {
      breadcrumb: "Price List"
    }
  },
  {
    path: 'permissions',
    loadChildren: './components/permissions/permissions.module#PermissionsModule',
    data: {
      breadcrumb: "Permissions"
    }
  },
  {
    path: 'user',
    loadChildren: './components/user/user.module#UserModule',
    data: {
      breadcrumb: "Users"
    }
  },
  {
    path: 'customers',
    loadChildren: './components/customers/customers.module#CustomersModule',
    data: {
      breadcrumb: "Customers"
    }
  },

];
