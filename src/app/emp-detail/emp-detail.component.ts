import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  public employees=[];

  public totalEmp=this.employees.length;
  

  constructor(private es:EmployeeService) { }

  ngOnInit() {
    this.es.getEmployee()
           .subscribe(data=>this.employees=data);
  }

}
