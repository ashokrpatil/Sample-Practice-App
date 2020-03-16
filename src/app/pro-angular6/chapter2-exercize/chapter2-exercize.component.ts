import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-chapter2-exercize',
  templateUrl: './chapter2-exercize.component.html',
  styleUrls: ['./chapter2-exercize.component.css']
})
export class Chapter2ExercizeComponent implements OnInit {

  // public product: Product;

  // constructor() { }

  // ngOnInit() {
  //   this.product = {
  //     name: 'My Test Product',
  //     imageUrl: 'http://via.placeholder.com/150x150',
  //     price: 50,
  //     isOnSale: true,
  //     quantityInCart: 0
  //   };
  // }

  // incrementInCart() {
  //   this.product.quantityInCart++;
  // }

  // decrementInCart() {
  //   if (this.product.quantityInCart > 0) {
  //     this.product.quantityInCart--;
  //   }
  // }
  public product: Product;
  private quantities: Array<number>;
  public stock: Stock;
  constructor() { }

  ngOnInit() {
    this.product = {
      name: 'My Test Product',
      imageUrl: 'http://via.placeholder.com/150x150',
      price: 50,
      isOnSale: true,
      quantityInCart: 0
    };
    this.quantities = [];
    for (let i = 0; i < 20; i++) {
      this.quantities.push(i);
    }
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80,'');

  }

  incrementInCart() {
    this.product.quantityInCart++;
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      this.product.quantityInCart--;
    }
  }

  onQtyChange(qty) {
    console.log('Quantity change ', qty);
  }
  toggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
