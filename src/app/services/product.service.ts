import { Injectable } from '@angular/core';

interface Product { sku: string; name: string; price: number; }

class Product implements Product {
  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts() {
    return [
      new Product('A01', 'The Complete Guide', 10),
      new Product('A02', 'Testing Angular Apps', 20),
      new Product('A03', 'Learn and Understand Angular', 30),
    ];
  }

  constructor() { }
}
