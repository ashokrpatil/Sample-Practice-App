import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

public myName="Ashok";
public message='Hi this is parant comp property';
  constructor() { }

  ngOnInit() {
  }

}
