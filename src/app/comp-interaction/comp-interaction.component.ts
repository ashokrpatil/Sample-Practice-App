import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-comp-interaction',
  templateUrl: './comp-interaction.component.html',
  styleUrls: ['./comp-interaction.component.css']
})
export class CompInteractionComponent implements OnInit {

  @Input('parentData') public name
  @Output() public childEvent = new EventEmitter()

  fireEvent(){
    this.childEvent.emit('Hey Ashok i m from child Component');
  }
  constructor() { }

  ngOnInit() {

  }

}
