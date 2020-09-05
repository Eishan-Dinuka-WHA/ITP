import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Customers } from '../models/customer.model';

@Injectable()
export class CustomerRegistrationService{
  customerChanged = new Subject<Customers[]>();
  private customerArr: Customers[] = [];

  constructor(private http: HttpClient){}

  getCustomer(){
    this.http.get<{message: string, customers: any}>('http://localhost:3000/api/customers')
      .pipe(map((customerData) => {
          return customerData.customers.map(customer => {
            return{
              uname: customer.uname,
              title: customer.title,
              fname: customer.fname,
              lname: customer.lname,
              country: customer.country,
              state: customer.state,
              city: customer.city,
              street: customer.street,
              ctype: customer.ctype,
              pcode: customer.pcode,
              email: customer.email,
              mnumber: customer.mnumber,
              password: customer.password,
              rpassword: customer.rpassword,
              cid: customer._id,
            };
          });
      }))
      .subscribe((transformedCustomer) => {
        this.customerArr = transformedCustomer;
        this.customerChanged.next(this.customerArr.slice());
      });
    return this.customerArr.slice();
  }

  // getEmployeeByDesignation(employeeDesignation: string){
  //   this.http.get<{message: string, employees: any}>('http://localhost:3000/api/employees/' + employeeDesignation)
  //     .pipe(map((employeeData) => {
  //         return employeeData.employees.map(employee => {
  //           return{
  //             fullName: employee.fullName,
  //             dob: employee.dob,
  //             nic: employee.nic,
  //             gender: employee.gender,
  //             address: employee.address,
  //             cnumber: employee.cnumber,
  //             email: employee.email,
  //             empDes: employee.empDes,
  //             doj: employee.doj,
  //             comment: employee.comment,
  //             id: employee._id
  //           };
  //         });
  //     }))
  //     .subscribe((transformedCustomer) => {
  //       this.customerArr = transformedCustomer;
  //       this.customerChanged.next(this.customerArr.slice());
  //     });
  //   return this.customerArr.slice();
  // }


  addCustomer(customer: Customers){
    const customerArray: Customers = {
      cid: customer.cid,
      uname: customer.uname,
      title: customer.title,
      fname: customer.fname,
      lname: customer.lname,
      country: customer.country,
      state: customer.state,
      city: customer.city,
      street: customer.street,
      ctype: customer.ctype,
      pcode: customer.pcode,
      email: customer.email,
      mnumber: customer.mnumber,
      password: customer.password,
      rpassword: customer.rpassword,
    };
    this.http.post<{message: string}>('http://localhost:3000/api/customers', customerArray)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.customerArr.push(customerArray);
        this.customerChanged.next(this.customerArr.slice());
      });

  }

  deleteCustomer(Customerid: string){
    this.http.delete("http://localhost:3000/api/customers/" + Customerid)
      .subscribe(() => {
        console.log('Deleted');
      })
  }
}
