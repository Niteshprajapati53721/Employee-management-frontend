import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  employee: Employee=new Employee();

  ngOnInit(){

  }
  onsubmit(){
    console.log(this.employee)
    this.addemployee()
    this.toemployeelist()
      }
  constructor(private service:EmployeeService ,private route:Router){}
  addemployee()
  {
    this.service.addemployee(this.employee).subscribe(data =>{
      console.log(data)
    },
    error=> console.log(error)
     )
  }
toemployeelist(){
  this.route.navigate(['/employeelist'])
}
}
