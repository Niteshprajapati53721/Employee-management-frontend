import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
constructor(private service:EmployeeService,private route:ActivatedRoute){}
  employee:Employee=new Employee
  id:number
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getempbyid(this.id).subscribe(data =>{
      this.employee=data;
    })
    
  }
  
}
