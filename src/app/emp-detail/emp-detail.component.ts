import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  public employees = [];
  public newEmpDetails = [];
  
  public routes=[] ;
  public adrs=[];
  // public newArray=[];






  // public totalEmp=this.employees.length;
  //   var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

  // const result = words.filter(word => word.length < 6);

  // console.log(result);

  constructor(private es: EmployeeService) { }

  ngOnInit() {
    this.es.getEmployeeDetails()
      .subscribe(data =>{ this.employees = data
        console.log(this.employees);
        console.table(this.employees);
      
      })
   

    this.es.getSampleEmployeeDetails()
      .subscribe(data => this.newEmpDetails = data);
      

    this.es.getNestedAray().
      subscribe(
        routes => {
          for (let route of routes.address) {
            this.routes.push(route);
          }
          console.log("Routes filled");
          console.log(routes);
          let adrs=routes.address;
          console.log(adrs);
          
        });
        
    // this.es.getNestedAray().
    //         subscribe(data=> this.route=data);
    //     console.log("Routes filled");
    //     console.log(this.route);
      
  }

  //  newArray = this.newEmpDetails.filter(el=> el.employee_salary= 123);
  // console.log(newArray); 

  // this.booksByStoreID = this.books.filter(
  //   book => book.store_id === this.store.id);




  msg = "";

  modo(value: string) {
    switch (value) {
      case "mod1":
        if (value = "mod1") {
          this.msg = "Mod 1 selected"
        }
        break;
      case "mod2":
        if (value = "mod2") {
          this.msg = "Mod 2 selected"

        }
        break;
      case "mod3":
        if (value = "mod3") {
          console.log("Mod 3 selected")
        }
        break;
    }
  }



}
