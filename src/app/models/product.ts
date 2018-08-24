export interface Product { sku: string; name: string; price: number; }

export class Product implements Product {
  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
}
