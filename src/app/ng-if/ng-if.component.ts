import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  displayName=true;
  elseProperty=false;
  show=true;

  constructor() { }

  ngOnInit() {
  }

}
