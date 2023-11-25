import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
employee:Employee;
constructor(private service:EmployeeService,private route:ActivatedRoute,
  private routes:Router){}
id:number
ngOnInit(): void {
  this.employee=new Employee();
  this.id=this.route.snapshot.params['id']
  this.service.getempbyid(this.id).subscribe(data =>{
    this.employee=data
  },
  error=>console.log(error)
  )
}
onsubmit()
{
  this.service.updateemployee(this.id,this.employee).subscribe(data =>{
this.toemployeelist();
  })
}
toemployeelist(){
  this.routes.navigate(['/employeelist'])
}

}
