import { ProductJSON } from "./product-json.interface"

export class Product { //внутренние данные, можно гибко создавать продукт, передавая в конструктор не только контент, но можно добавить дополнительные данные и переписать конструктор
  public id?: number;
  public name?: string;
  public category?: string;
  public description?: string;
  public price?: number;

  constructor(cnt: ProductJSON) {
    this.id = cnt.id || null;
    this.name = cnt.name || 'No name';
    this.category = cnt.category || null;
    this.description = cnt.description || '';
    this.price = cnt.price || 0;
  }
}