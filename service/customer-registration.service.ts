import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Customers } from '../models/customer.model';
import { Router } from "@angular/router";

@Injectable()
export class CustomerRegistrationService{
  customerChanged = new Subject<Customers[]>();
  private customerArr: Customers[] = [];
  private CustomersUpdated = new Subject<Customers[]>();


  constructor(private http: HttpClient , private router: Router){}

  getCustomerByID(id: string){
    return {...this.customerArr.find(cust => cust.cid === id)};

  }

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

  getPostUpdateListener() {
    return this.CustomersUpdated.asObservable();
  }

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

  updateCustomer(customer: Customers){
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
    this.http.put("http://localhost:3000/api/customers/" + customer.cid, customerArray)
      .subscribe(response => {
        const CustomersUpdated = [...this.customerArr];
        const oldCustomersIndex = CustomersUpdated.findIndex(p => p.cid === customerArray.cid);
        CustomersUpdated[oldCustomersIndex] = customerArray;
        this.customerArr = CustomersUpdated;
        this.CustomersUpdated.next([...this.customerArr]);

      });
  }

  deleteCustomer(Customerid: string){
    this.http.delete("http://localhost:3000/api/customers/" + Customerid)
      .subscribe(() => {
        const CustomersUpdated = this.customerArr.filter(customer => customer.cid !== Customerid);
        this.customerArr = CustomersUpdated;
        this.CustomersUpdated.next([...this.customerArr]);
      })
  }
}
