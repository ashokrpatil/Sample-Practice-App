import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-chapter8-exercize',
  templateUrl: './chapter8-exercize.component.html',
  styleUrls: ['./chapter8-exercize.component.css']
})
export class Chapter8ExercizeComponent implements OnInit {

  constructor(public messageService:ServiceService) { }

  ngOnInit() {
    this.messageService.message = 'Hello Message Service!';
  }

}
