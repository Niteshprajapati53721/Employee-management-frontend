import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { Employee } from './employee';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { FindComponent } from './find/find.component';
import { EmployeebynameComponent } from './employeebyname/employeebyname.component';



const routes: Routes = [
  {
    path:"employeelist",component:EmployeelistComponent},
    {path:"addemployee",component:AddemployeeComponent},
    {path:"updateemployee/:id",component:UpdateemployeeComponent},
    { path:"deleteemployee/:id",component:DeleteemployeeComponent},
    {path:"employeedetail/:id",component:EmployeedetailsComponent},
    {path:"find",component:FindComponent},
    {path:"employeebyname",component:EmployeebynameComponent},
    {path:"",redirectTo:"employeelist",pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
