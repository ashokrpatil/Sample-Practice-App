import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
public greeting ="default message";
public hi="";

  onClick(){
    console.log("Welcome to Event binding Page");
    // this.greeting="Welcome to Event binding Page";
    this.greeting=event.type
    
    this.hi=`Hi.. 
    this is event binding`
  }
  constructor() { }

  ngOnInit() {
  }

}
