import { Injectable } from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  purchases = [
    new Product('A03', 'Learn and Understand Angular', 30),
    new Product('A04', '50 Cent', 50)
  ];
  constructor() {}
  getPurchases() {
    return this.purchases;
  }
  addPurchase(purchase: Product) {
    this.purchases.push(purchase);
  }
}
