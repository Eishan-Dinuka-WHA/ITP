import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Spas } from '../models/spa.model';

@Injectable()
export class SpaManagementService{
  spaChanged = new Subject<Spas[]>();
  private spaArr: Spas[] = [];

  constructor(private http: HttpClient){}

  getspa(){
    this.http.get<{message: string, spas: any}>('http://localhost:3000/api/spas')
      .pipe(map((spaData) => {
          return spaData.spas.map(spa => {
            return{
              fname: spa.fname,
              lname: spa.lname,
              age: spa.age,
              gender: spa.gender,
              pnumber: spa.pnumber,
              condition: spa.condition,
              cpackage: spa.cpackage,
              sid: spa._id
            };
          });
      }))
      .subscribe((transformedSpa) => {
        this.spaArr = transformedSpa;
        this.spaChanged.next(this.spaArr.slice());
      });
    return this.spaArr.slice();
  }




  addSpa(spa: Spas){
    const spaArr: Spas= {
      sid: spa.sid,
      fname: spa.fname,
      lname: spa.lname,
      age: spa.age,
      gender: spa.gender,
      pnumber: spa.pnumber,
      condition: spa.condition,
      cpackage: spa.cpackage,
    };
    this.http.post<{message: string}>('http://localhost:3000/api/spas', spaArr)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.spaArr.push(spaArr);
        this.spaChanged.next(this.spaArr.slice());
      });

  }

  deleteSpa(Spaid: string){
    this.http.delete("http://localhost:3000/api/spas/" + Spaid)
      .subscribe(() => {
        console.log('Deleted');
      })
  }
}
