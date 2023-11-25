import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit{

  employee:Employee[];
  constructor(private emps:EmployeeService,private routes:Router){}
  ngOnInit(): void {
   this.getemployees();
  }
  getemployees()
  {
    this.emps.getemployees().subscribe((data)=>{
      this.employee=data;
      console.log(data)
    })
  }

  updateemployee(id:number)
  {
    this.routes.navigate(['updateemployee',id]);
  }

  deleteemployee(id:number)
  {
    this.routes.navigate(['deleteemployee',id]);
  }
  employeedetail(id:number){
    this.routes.navigate(['employeedetail',id]);
  }
}
