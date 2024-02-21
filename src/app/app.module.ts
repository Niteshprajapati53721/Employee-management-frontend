import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import {HttpClientModule} from '@angular/common/http';

import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import {FormsModule} from '@angular/forms';
import { SaveemployeeComponent } from './saveemployee/saveemployee.component';
import { FindComponent } from './find/find.component';
import { EmployeebynameComponent } from './employeebyname/employeebyname.component';
import { EmployeeService } from './employee.service';
import { ErrorpageComponent } from './errorpage/errorpage.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
   AddemployeeComponent,
   UpdateemployeeComponent,
   EmployeedetailsComponent,
   DeleteemployeeComponent,
   SaveemployeeComponent,
   FindComponent,
   EmployeebynameComponent,
   ErrorpageComponent,
  

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
