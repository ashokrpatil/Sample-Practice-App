import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-chapter3-exercize',
  templateUrl: './chapter3-exercize.component.html',
  styleUrls: ['./chapter3-exercize.component.css']
})
export class Chapter3ExercizeComponent implements OnInit {
  stock: any;
  public stockClasses;
  stocks: Stock[];
  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80,'');
    // ngClass
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange,
    // ng style
    "color": this.stock.isPositiveChange() ? "green" : "red",
    "font-size": largeChange ? "1.2em" : "0.8em"
    };
    // ngFor
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80,''),
      new Stock('Second Stock Company', 'SSC', 10, 20,''),
      new Stock('Last Stock Company', 'LSC', 876, 765,'')
    ];
  }
  toggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }
  toggleFavoriteNgFor(event, index) {
    console.log('We are toggling the favorite state for stock', index, event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }
}
