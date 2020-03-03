import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";
import { IContactRecord } from "../newData";



@Component({
  selector: 'app-new-data',
  templateUrl: './new-data.component.html',
  styleUrls: ['./new-data.component.css']
})

export class NewDataComponent implements OnInit {

  data = null;

  constructor(private es:EmployeeService) { }

  ngOnInit() {

    // this.es.getnewData().subscribe(
    //   data => {
    //     console.log("data retrieved:\n" + data);
    //     // this.data = new employees <IContactRecord>(data.value);
    //   }
  }

}
