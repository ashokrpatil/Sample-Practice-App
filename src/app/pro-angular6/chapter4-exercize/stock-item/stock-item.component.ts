import { Component, OnInit,Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class StockItemComponent implements OnInit {
  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() { 
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit() {
    
    // this is for  componenet style
    // this.stock = new Stock('Test Stock Company', 'TSC', 85, 80,'');
  }

  onToggleFavorite(event) {
    console.log(event);
    
    this.toggleFavorite.emit(this.stock);

     // this is for  componenet style
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockPrice() {
    this.stock.price += 5;
  }
}
