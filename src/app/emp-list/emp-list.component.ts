import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public employees = [];
  user:any;
  mat='Material';

  users = [
    {id : 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
 
  
  // alert(user.name); // John


  someData = [{ value: "ABC",id:"123"},
  { value: "ABC",id:"12"},
  { value: "DEF",id:"23"},
  { value: "DEF",id:"1233"},
  { value: "ABC",id:"13"},
  { value: "DEF",id:"1"},
  { value: "DEF",id:"34"},
  { value: "ABC",id:"56"},
  { value: "ABC",id:"13"},
  { value: "DEF",id:"123"},
  { value: "HIJ",id:"113"}]

options =['ABC', 'DEF','HIJ']

// selected;
selectedData;

  
  constructor(private es: EmployeeService) {
    this.selectedData = this.someData;
   }

  ngOnInit() {
    this.es.getEmployee()
      .subscribe(data => this.employees = data);
    // console.log(this.employees)
  }

  msg="";

  modo(value: string) {
    switch (value) {
      case "mod1":
        if (value = "mod1") {
        this.msg="Material"
        }
        break;
      case "mod2":
        if (value = "mod2") {
          this.msg="Employee"
        
        }
        break;
      case "mod3":
        if (value = "mod3") {
          console.log("Mod 3 selected")
        }
        break;
    }
  }

   
onSelect(val){
console.log(val);
this.selectedData = this.someData.filter(x => x.value == val)
this.user = this.users.find(item =>
   item.id == 3);
console.log(this.user.name);
}
}
