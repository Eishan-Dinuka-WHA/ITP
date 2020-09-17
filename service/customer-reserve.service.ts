import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Events } from '../models/customerreserve.model';

@Injectable()
export class CustomerReserveService{
  customerreserveChanged = new Subject<Events[]>();
  private customerreserveArr: Events[] = [];

  constructor(private http: HttpClient){}

  getCustomerReserve(){
    this.http.get<{message: string, events: any}>('http://localhost:3000/api/events')
      .pipe(map((customerreserveData) => {
          return customerreserveData.events.map(event => {
            return{
              fname: event.fname,
              lname: event.lname,
              address: event.address,
              email: event.email,
              phoneno: event.phoneno,
              date: event.date,
              time1: event.time1,
              time2: event.time2,
              crid: event._id,

            };
          });
      }))
      .subscribe((transformedCustomerReserve) => {
        this.customerreserveArr = transformedCustomerReserve;
        this.customerreserveChanged.next(this.customerreserveArr.slice());
      });
    return this.customerreserveArr.slice();
  }



  addCustomerReserve(event: Events){
    const customerreserveArray: Events = {
      crid: event.crid,
      fname: event.fname,
      lname: event.lname,
      address: event.address,
      email: event.email,
      phoneno: event.phoneno,
      date: event.date,
      time1: event.time1,
      time2: event.time2,
    };
    this.http.post<{message: string}>('http://localhost:3000/api/events', customerreserveArray)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.customerreserveArr.push(customerreserveArray);
        this.customerreserveChanged.next(this.customerreserveArr.slice());
      });

  }

  deleteCustomerReserve(Customerid: string){
    this.http.delete("http://localhost:3000/api/events/" + Customerid)
      .subscribe(() => {
        console.log('Deleted');
      })
  }
}
