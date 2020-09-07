import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employees } from '../models/employee.model';
import employee from '../backend/models/employee';

@Injectable()
export class EmployeeService{
  employeeChanged = new Subject<Employees[]>();
  private employeeArr: Employees[] = [];

  constructor(private http: HttpClient){}

  getCustomer(){
    this.http.get<{message: string, employees: any}>('http://localhost:3000/api/employees')
      .pipe(map((employeeData) => {
          return employeeData.employees.map(employee => {
            return{
              uname: employee.uname,
              fname: employee.fname,
              lname: employee.lname,
              address: employee.address,
              nic: employee.nic,
              dob: employee.dob,
              gender: employee.gender,
              mno: employee.mno,
              edd: employee.edd,
              apn: employee.apn,
              joind: employee.joind,
              dept: employee.dept,
              dcs: employee.dcs,
              empty: employee.empty,
              sal: employee.sal,
              password: employee.password,
              rpassword: employee.rpassword,
              eid: employee._id,
            };
          });
      }))
      .subscribe((transformedEmployee) => {
        this.employeeArr = transformedEmployee;
        this.employeeChanged.next(this.employeeArr.slice());
      });
    return this.employeeArr.slice();
  }


  addEmployee(employee: Employees){
    const employeeArray: Employees = {
      eid: employee.eid,
      uname: employee.uname,
      fname: employee.fname,
      lname: employee.lname,
      address: employee.address,
      nic: employee.nic,
      dob: employee.dob,
      gender: employee.gender,
      mno: employee.mno,
      edd: employee.edd,
      apn: employee.apn,
      joind: employee.joind,
      dept: employee.dept,
      dcs: employee.dcs,
      empty: employee.empty,
      sal: employee.sal,
      password: employee.password,
      rpassword: employee.rpassword,
    };
    this.http.post<{message: string}>('http://localhost:3000/api/employees', employeeArray)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.employeeArr.push(employeeArray);
        this.employeeChanged.next(this.employeeArr.slice());
      });

  }

  deleteEmployee(Employeeid: string){
    this.http.delete("http://localhost:3000/api/employees/" + Employeeid)
      .subscribe(() => {
        console.log('Deleted');
      })
  }
}
