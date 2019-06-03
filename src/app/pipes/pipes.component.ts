import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
public pipeSample ="Angular Tutorial";
public person={
"first name":"Ashok",
"last name":"Patil"
}
public date=new Date();

  constructor() { }

  ngOnInit() {
  }

}
