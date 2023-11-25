import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit{

  constructor(private service:EmployeeService, private route:ActivatedRoute,
    private routes:Router){}
  id:number
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.service.deleteemployee(this.id).subscribe(data =>{
      this.toemployeelist();
    })
    
  }
  toemployeelist(){
     this.routes.navigate(['/employeelist']);
  }
}
