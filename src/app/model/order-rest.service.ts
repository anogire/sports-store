import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Order } from "./order.model";

@Injectable()

export class OrderRestService {
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3500/orders');
  }

  public addOrder(order: Order): Observable<any> {
    return this.http.post<any>('http://localhost:3500/orders', order);
  }

  public updateOrder(order: Order): Observable<any> {
    return this.http.put<any>('http://localhost:3500/orders/' + order.id, order);
  }

  public remove(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3500/orders/' + id);
  }
}