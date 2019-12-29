import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: './../components/dashboard/dashboard.module#DashboardModule',
    data: {
      breadcrumb: "Dashboard"
    }
  },
  {
    path: 'products/show',
    loadChildren: './../../components/e-commerce/e-commerce.module#ECommerceModule',
    data: {
      breadcrumb: "Products"
    }
  },
  {
    path: 'icons',
    loadChildren: './../../components/icons/icons.module#IconsModule',
    data: {
      breadcrumb: "Icons"
    }
  },
  {
    path: 'buttons',
    loadChildren: './../../components/buttons/buttons.module#ButtonsModule',
    data: {
      breadcrumb: "Buttons"
    }
  },

  {
    path: 'table',
    loadChildren: './../../components/tables/tables.module#TablesModule',
    data: {
      breadcrumb: "Table"
    }
  },


  {
    path: 'email',
    loadChildren: './../../components/email/email.module#EmailModule',
    data: {
      breadcrumb: "Email"
    }
  },
  {
    path: 'support-ticket',
    loadChildren: './../../components/support-ticket/support-ticket.module#SupportTicketModule',
    data: {
      breadcrumb: "Support-Ticket"
    }
  },

  {
    path: 'ecommerce',
    loadChildren: './../../components/e-commerce/e-commerce.module#ECommerceModule',
    data: {
      breadcrumb: "Ecommerce"
    }
  },
  {
    path: 'chat',
    loadChildren: './../../components/chat/chat.module#ChatModule',
    data: {
      breadcrumb: "Chat"
    }
  },

  {
    path: 'user',
    loadChildren: './../../components/user/user.module#UserModule',
    data: {
      breadcrumb: "Users"
    }
  },
  {
    path: 'customers',
    loadChildren: './../../components/customers/customers.module#CustomersModule',
    data: {
      breadcrumb: "Customers"
    }
  },

];
