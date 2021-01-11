import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
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
      map((response: ProductJSON[]) => this.productFactory.createAll(response)));
  }

  public getByCategory(condition?: string): Observable<Product[]> {
    if (!condition) {
      return this.getAll();
    } else {
      return this.getAll().pipe(
        map((products: Product[]) => products.
          filter((product: Product) => product.category === condition)));
    }
  }

  public getCategories(): Observable<any> {
    return this.getAll().pipe(
      map((products: Product[]) => new Set(products.map((product) => product.category))));
  }
}