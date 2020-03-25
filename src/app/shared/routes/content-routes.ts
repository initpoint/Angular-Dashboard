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
    path: 'users-permissions',
    loadChildren: './components/users-permissions/users-permissions.module#UsersPermissionsModule',
    data: {
      breadcrumb: "Users Permissions"
    }
  },
  {
    path: 'bills',
    loadChildren: './components/bills/bills.module#BillsModule',
    data: {
      breadcrumb: "Bills"
    }
  },
  {
    path: 'promotions',
    loadChildren: './components/promotions/promotions.module#PromotionsModule',
    data: {
      breadcrumb: "Promotions"
    }
  },
  {
    path: 'invoices',
    loadChildren: './components/invoices/invoices.module#InvoicesModule',
    data: {
      breadcrumb: "Invoices"
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
    path: 'reports',
    loadChildren: './components/reports/reports.module#ReportsModule',
    data: {
      breadcrumb: "Reports"
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
  {
    path: 'chat',
    loadChildren: './components/chat/chat.module#ChatModule',
    data: {
      breadcrumb: "Chat"
    }
  },
  {
    path: 'logs',
    loadChildren: './components/logs/logs.module#LogsModule',
    data: {
      breadcrumb: "Logs"
    }
  },
];
