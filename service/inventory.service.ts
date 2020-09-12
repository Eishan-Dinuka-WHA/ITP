import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Inventory } from 'models/inventory.model';


@Injectable()
export class InventoryService{
  inventoryChanged = new Subject<Inventory[]>();
  private inventoryarr: Inventory[] = [];

  constructor(private http: HttpClient){}

  getInventory(){
    this.http.get<{message: string, inventory: any}>('http://localhost:3000/api/inventories')
      .pipe(map((inventoryData) => {
          return inventoryData.inventory.map(inventory => {
            return{
              iid: inventory._id,
              IT01: inventory.IT01,
              AV01: inventory.AV01,
              AV02: inventory.AV02,
              U1: inventory.U1,
              Date1: inventory.Date1,
              Sup: inventory.Sup,
            };
          });
      }))
      .subscribe((transformedCustomer) => {
        this.inventoryarr = transformedCustomer;
        this.inventoryChanged.next(this.inventoryarr.slice());
      });
    return this.inventoryarr.slice();
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


  addInventory(inventory: Inventory){
    const inventoryArray: Inventory = {
      iid: inventory.iid,
      IT01: inventory.IT01,
      AV01: inventory.AV01,
      AV02: inventory.AV02,
      U1: inventory.U1,
      Date1: inventory.Date1,
      Sup: inventory.Sup
    };
    this.http.post<{message: string}>('http://localhost:3000/api/inventories', inventoryArray)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.inventoryarr.push(inventoryArray);
        this.inventoryChanged.next(this.inventoryarr.slice());
      });

  }

  deleteInventory(InventoryID: string){
    this.http.delete("http://localhost:3000/api/inventories/" + InventoryID)
      .subscribe(() => {
        console.log('Deleted');
      })
  }
}
