import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {
  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  
  constructor() {
    this.stock =  new Stock('test', '', 0, 0, 'NASDAQ');
  }

  ngOnInit() {
  }
 
 

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock() {
    console.log('Creating stock ', this.stock);
  }
  createStockCV(stockForm) {
    console.log('Stock form', stockForm);
    if (stockForm.valid) {
      console.log('Creating stock ', this.stock);
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
  createStockFG(stockForm) {
    console.log('Stock form', stockForm.value);
    if (stockForm.valid) {
      this.stock = stockForm.value.stock;
      console.log('Creating stock ', this.stock);
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
  
}
