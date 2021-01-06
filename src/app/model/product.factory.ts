import { Injectable } from "@angular/core";

import { ProductJSON } from "./product-json.interface";
import { Product } from "./product.model";

@Injectable()

export class ProductFactory {
  public createAll(json: ProductJSON[]): Product[] {
    return json.map((cnt: ProductJSON) => new Product(cnt));
  }
}