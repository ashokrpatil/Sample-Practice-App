import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-chapter6-exercize',
  templateUrl: './chapter6-exercize.component.html',
  styleUrls: ['./chapter6-exercize.component.css']
})
export class Chapter6ExercizeComponent implements OnInit {
  public stock: Stock;
  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80, 'NYSE');
  }

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
  }
}
