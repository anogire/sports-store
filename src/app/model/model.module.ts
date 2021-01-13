import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { ProductRepository } from './product.repository';
import { ProductFactory } from './product.factory';
import { RestService } from './rest.service';
import { OrderRestService } from './order-rest.service';

@NgModule({
  declarations: [],
  providers: [
    ProductRepository,
    ProductFactory,
    RestService,
    OrderRestService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class ModelModule { }
