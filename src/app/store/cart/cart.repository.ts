import { Injectable } from "@angular/core";

import { CartLine } from "src/app/model/cart-line.model";
import { Product } from "src/app/model/product.model";

@Injectable()
export class CartRepository {
  private cartLineList: CartLine[] = [];

  constructor() {
  }

  get isEmpty(): boolean {
    return this.cartLineList.length === 0;
  }

  public addCartLine(product: Product): void {
    const newLine = this.cartLineList.find(item => item.product.id === product.id);
    if (!newLine) {
      const cartLine = new CartLine(product);
      this.cartLineList.push(cartLine);
    } else {
      newLine.plus();
    }
  }

  public removeCartLine(id: number): void {
    this.cartLineList = this.cartLineList.filter((line: CartLine) => line.id !== id);
  }

  public getCartLineList(): CartLine[] {
    return [...this.cartLineList];
  }

  public clear(): void {
    this.cartLineList = [];
  }

  public getTotal(): number {
    let total: number = 0;
    this.cartLineList.map((item) => { total += item.quantity * item.product.price });

    return total;
  }
}