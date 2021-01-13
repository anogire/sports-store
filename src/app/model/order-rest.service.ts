import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Order } from "./order.model";

@Injectable()

export class OrderRestService {
  constructor(private http: HttpClient) { }

  public addOrder(order: Order): Observable<any> {
    return this.http.post<any>('http://localhost:3500/orders', order);
  }
}