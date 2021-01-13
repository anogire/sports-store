import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartRepository } from './cart/cart.repository';


@NgModule({
  declarations: [StoreComponent, CartComponent, CheckoutComponent],
  providers: [CartRepository],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StoreModule { }
