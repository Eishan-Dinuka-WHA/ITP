import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Suppliers } from '../models/supplier.model';
//conect back e and front end
@Injectable()
export class SupplierRegistrationService{
  supplierChanged = new Subject<Suppliers[]>();
  private supplierArr: Suppliers[] = [];

  constructor(private http: HttpClient){}

  getSupplier(){
    this.http.get<{message: string, suppliers: any}>('http://localhost:3000/api/suppliers')
      .pipe(map((supplierData) => {
          return supplierData.suppliers.map(supplier => {
            return{
              sname: supplier.sname,
              cname: supplier.cname,
              badd: supplier.badd,
              btele: supplier.btele,
              web: supplier.web,
              email: supplier.email,
              pcode: supplier.pcode,
              stype: supplier.stype,
              pdes: supplier.pdes,
              semail: supplier.semail,
              smnumber: supplier.smnumber,
              sid: supplier._id,
            };
          });
      }))
      .subscribe((transformedSupplier) => {
        this.supplierArr = transformedSupplier;
        this.supplierChanged.next(this.supplierArr.slice());
      });
    return this.supplierArr.slice();
  }


  addSupplier(supplier: Suppliers){
    const supplierArray: Suppliers = {
      sid: supplier.sid,
      sname: supplier.sname,
      cname: supplier.cname,
      badd: supplier.badd,
      btele: supplier.btele,
      web: supplier.web,
      email: supplier.email,
      pcode: supplier.pcode,
      stype: supplier.stype,
      pdes: supplier.pdes,
      semail: supplier.semail,
      smnumber: supplier.smnumber,

    };
    this.http.post<{message: string}>('http://localhost:3000/api/suppliers', supplierArray)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.supplierArr.push(supplierArray);
        this.supplierChanged.next(this.supplierArr.slice());
      });

  }

  deleteSupplier(Supplierid: string){
    this.http.delete("http://localhost:3000/api/suppliers/" + Supplierid)
      .subscribe(() => {
        console.log('Deleted');
      })
  }
}
