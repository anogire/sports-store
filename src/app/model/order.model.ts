import { CartLine } from "./cart-line.model";

export type User = {
  name: string,
  address: string
};

export class Order {
  public shipped: boolean = false;
  public id?: number;

  constructor(
    public user: User,
    public cartList: CartLine[]
  ) {
  }
}