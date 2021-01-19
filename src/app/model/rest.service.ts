import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ProductJSON } from "./product-json.interface";
import { Product } from "./product.model";

@Injectable()

export class RestService {
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductJSON[]> {
    return this.http.get<ProductJSON[]>('http://localhost:3500/products');
  }

  public remove(id: number): Observable<Product> {
    return this.http.delete<Product>('http://localhost:3500/products/' + id);
  }

  public update(product: Product): Observable<Product> {
    return this.http.put<Product>('http://localhost:3500/products/' + product.id, product);
  }

  public add(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3500/products', product);
  }
}