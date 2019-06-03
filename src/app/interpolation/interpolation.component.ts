import { Component, OnInit } from '@angular/core';
import { Interpolation } from '@angular/compiler';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
 name="Interpolation"
  constructor() { }
  greetUser(){
    return `hello ${this.name}`
  }

  ngOnInit() {
  }


}
