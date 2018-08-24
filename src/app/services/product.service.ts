import { Injectable } from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts() {
    return [
      new Product('A01', 'The Complete Guide', 10),
      new Product('A02', 'Testing Angular Apps', 20),
      new Product('A03', 'Learn and Understand Angular', 30),
      new Product('A04', '50 Cent', 50),
      new Product('A05', 'Ultra Premium Book', 1000),
    ];
  }

  constructor() { }
}
