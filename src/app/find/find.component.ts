import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
constructor(private service:EmployeeService,private route:Router){}
employee:Employee[]
  city:string
  submit(city:string)
  {
    this.city=city
    this.getbycityname()
    // this.Setemp()
    console.log(this.employee)
    console.log(this.city)

    // this.route.navigate(['employeebyname'])
  
  }
  ngOnInit(): void {
  
  }

getbycityname(){
  this.service.findbycityname(this.city).subscribe(data =>{
    this.employee=data;
    this.Setemp();
    console.log(this.employee)
    this.route.navigate(['employeebyname'], { state: { employee: this.employee } });

    
  })
  console.log(this.employee)
}
Setemp()
{
  this.service.setemployee(this.employee);
  console.log("set" , this.employee)
}

}
