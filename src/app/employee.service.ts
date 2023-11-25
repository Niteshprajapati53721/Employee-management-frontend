import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee:Employee[]=[];
  setemployee(employee:Employee[])
  {
    this.employee=employee;
  }

  getemployee()
  {
    return this.employee
  }

  toemplname()
  {
    return this.employee;
  }
  private baseurl="http://localhost:8080/getemployee";
  constructor( private httpst:HttpClient) { }
  getemployees():Observable<Employee[]>
  {
    return this.httpst.get<Employee[]>(`${this.baseurl}`);
  }
   private url="http://localhost:8080/addemployee"
addemployee(employee:Employee):Observable<object>
{
  return this.httpst.post(`${this.url}`,employee);
}

private urlu="http://localhost:8080/getempbyid"
getempbyid(id:number):Observable<Employee>
{
  return this.httpst.get<Employee>(`${this.urlu}/${id}`);
}
uurl="http://localhost:8080/update"
updateemployee(id:number,employee:Employee):Observable<object>
{
  return this.httpst.put(`${this.uurl}/${id}`,employee)
}
durl="http://localhost:8080/delete"
deleteemployee(id:number):Observable<object>
{
   return this.httpst.delete(`${this.durl}/${id}`)
}
findurl="http://localhost:8080/findbycity"
findbycityname(city:string):Observable<Employee[]>
{
  return this.httpst.get<Employee[]>(`${this.findurl}/${city}`)
}
}
