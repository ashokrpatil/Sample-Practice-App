import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { IEmployee } from "./employee";
 import { ICRMresponse } from "./newData";
import {Route  } from "./nestedArray";
import { Address } from "./nestedArray";

import { Business } from "./employee";

import { Observable, of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private url:string='/assets/data/employees.json';
private url1:string='http://localhost:4000/mastersupplier';
private url2:string='http://dummy.restapiexample.com/api/v1/employees';
private url3:string='/assets/data/newData.json';
private url4:string='/assets/data/route.json';





  constructor(private http: HttpClient) { }

  getEmployee():Observable<Business[]>{
    return this.http.get <Business[]>(this.url1);
  }
  getEmployeeDetails():Observable<Business[]>{
    return this.http.get <Business[]>(this.url);
  }
  getSampleEmployeeDetails():Observable<Business[]>{
    return this.http.get <Business[]>(this.url2);
  }
  getnewData():Observable<ICRMresponse[]>{
    return this.http.get <ICRMresponse[]>(this.url3);
  }

 getNestedAray():Observable<Route>
{
      return this.http.get <Route>(this.url4);     
}

}

