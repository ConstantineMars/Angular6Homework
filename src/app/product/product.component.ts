import { Component, OnInit } from '@angular/core';

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

  name = 'The Angular 6 Book';
  description = 'The best seller of year 2018';
  price = 50;
  category = Category.Books;
  isAvailable = true;
  authors: Authors = [
    {id: 1, text: 'Maximilian Schwarzmüller'},
    {id: 2, text: 'Mosh Hamedani'},
    {id: 3, text: 'Anthony Alicea'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
