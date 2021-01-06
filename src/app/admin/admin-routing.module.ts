import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { OrdersComponent } from './main/orders/orders.component';
import { ProductFormComponent } from './main/product-form/product-form.component';
import { ProductTableComponent } from './main/product-table/product-table.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, //router-outlet
    children: [
      {
        path: 'auth',
        component: AuthComponent
      },
      {
        path: 'main',
        component: MainComponent, //router-outlet
        children: [
          { path: 'products', component: ProductTableComponent },
          { path: 'products/:mode', component: ProductFormComponent },
          { path: 'products/:mode/:id', component: ProductFormComponent },
          { path: 'orders', component: OrdersComponent }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
