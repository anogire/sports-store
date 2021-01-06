import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ProductJSON } from "./product-json.interface";

@Injectable()

export class RestService {
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductJSON[]> {
    return this.http.get<ProductJSON[]>('http://localhost:3500/products');
  }
}