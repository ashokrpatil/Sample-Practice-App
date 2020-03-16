import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-chapter5-exercize',
  templateUrl: './chapter5-exercize.component.html',
  styleUrls: ['./chapter5-exercize.component.css']
})
export class Chapter5ExercizeComponent implements OnInit {

  constructor() { }

  public stock: Stock;

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80,'');
  }

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
  }

}
