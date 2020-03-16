import { Component, OnInit } from '@angular/core';
import { Stock } from '../pro-angular6/model/stock';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
public successClass="text-success";
public hasError= false
public isSpecial=true
public align="align"
public msgClasses={
  "text-success":!this.hasError,
  "text-danger":this.hasError,
  "text-special":this.isSpecial,
  "align":this.align
}
public stock: Stock;
  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80,'');
  }

  toggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
