import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FindComponent } from '../find/find.component';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeebyname',
  templateUrl: './employeebyname.component.html',
  styleUrls: ['./employeebyname.component.css']
})
export class EmployeebynameComponent implements OnInit{
  constructor(public service:EmployeeService){}

public employee:Employee[]
  
  ngOnInit(): void {
// this.toemp()
this.employee = history.state.employee;
console.log("get", this.employee);
    
  }
  toemp()
  {
    this.employee=this.service.getemployee()
    console.log("get",this.employee)

  }

}
