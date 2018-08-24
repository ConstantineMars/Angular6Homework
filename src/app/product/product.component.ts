import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';
import {Product} from '../models/product';

enum Category {
  Electronics,
  Kitchen,
  Books
}

type Authors = Array<{id: number, text: string}>;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private product = new Product('X1', 'The Angular 6 Book', 20);

  name = this.product.name
  price = this.product.price;
  description = 'The best seller of year 2018';
  category = Category.Books;
  isAvailable = true;
  authors: Authors = [
    {id: 1, text: 'Maximilian Schwarzmüller'},
    {id: 2, text: 'Mosh Hamedani'},
    {id: 3, text: 'Anthony Alicea'}
  ];

  private service: CartService;
  constructor(service: CartService) {
    this.service = service;
  }

  ngOnInit() {
  }
  onBuy() {
    console.log('\"' + this.name + '\" was bought');
    this.service.addPurchase(this.product);
  }
}
