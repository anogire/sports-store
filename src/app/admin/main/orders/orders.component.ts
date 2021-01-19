import { Component, OnInit } from '@angular/core';
import { OrderRestService } from 'src/app/model/order-rest.service';

import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orderList: Order[] = [];
  public isVisibleShipped: boolean = true;

  constructor(private orderRestService: OrderRestService) { }

  ngOnInit(): void {
    this.getData();
  }

  public filteredOrders(): Order[] {
    return this.orderList.filter((order: Order) => this.isVisibleShipped || order.shipped === false);
  }

  public ship(order: Order): void {
    order.shipped = true;
    this.orderRestService.updateOrder(order).subscribe(() => {
      this.getData();
    });
  }

  public remove(id: number): void {
    this.orderRestService.remove(id).subscribe(() => {
      this.getData();
    });
  }

  private getData(): void {
    this.orderRestService.getOrders().subscribe((orders: Order[]) => {
      this.orderList = orders;
    })
  }
}
