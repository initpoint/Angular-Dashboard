import { Routes } from '@angular/router';

export const content: Routes = [

  {
    path: 'carts',
    loadChildren: './components/carts/carts.module#CartsModule',
    data: {
      breadcrumb: "Carts"
    }
  },
  {
    path: 'items',
    loadChildren: './components/items/items.module#ItemsModule',
    data: {
      breadcrumb: "Items"
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
    path: 'users',
    loadChildren: './components/users/users.module#UsersModule',
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
  {
    path: 'import',
    loadChildren: './components/import/import.module#ImportModule',
    data: {
      breadcrumb: "Import"
    }
  },
];
