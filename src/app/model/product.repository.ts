import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ProductJSON } from "./product-json.interface";
import { ProductFactory } from "./product.factory";

import { Product } from "./product.model";
import { RestService } from "./rest.service";

@Injectable()

export class ProductRepository { // работа с данными

  constructor(
    private restService: RestService, // предоставление источника данных, внешний сервер
    private productFactory: ProductFactory // 
  ) {
  }

  public getAll(): Observable<Product[]> {
    return this.restService.getProducts().pipe(
      map((response: ProductJSON[]) => this.productFactory.createAll(response))
    );
  }
}