import { Product } from "./product.model";

export class CartLine {
  public id: number;
  public quantity: number;

  constructor(public product: Product) {
    this.id = this.product.id;
    this.quantity = 1;
  }

  public getSubTotal(): number {
    return this.quantity * this.product.price;
  }

  public plus(): void {
    this.quantity += 1;
  }

  public minus(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }
}