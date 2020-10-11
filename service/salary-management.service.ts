import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Salarys } from '../models/salary.model';
import { Router } from '@angular/router';

@Injectable()
export class SalaryService{
  salaryChanged = new Subject<Salarys[]>();
  private salaryArr: Salarys[] = [];
  private SalarysUpdated = new Subject<Salarys[]>();

  constructor(private http: HttpClient , private router:Router){}

  getSalaryByID(id: string){
    return {...this.salaryArr.find(cust => cust.sid === id)};
  }

  getSalary(){
    this.http.get<{message: string, salarys: any}>('http://localhost:3000/api/salarys')
      .pipe(map((salaryData) => {
          return salaryData.salarys.map(salary => {
            return{
              ename: salary.ename,
              toh: salary.toh,
              twd: salary.twd,
              payd: salary.payd,
              bsal: salary.bsal,
              owork: salary.owork,
              welf: salary.welf,
              epf: salary.epf,
              bonus: salary.bonus,
              stamp: salary.stamp,
              dloan: salary.stamp,
              fadvan: salary.fadvan,
              ins: salary.ins,
              tde: salary.tde,
              gpay: salary.gpay,
              npay: salary.npay,
              sid: salary._id,
            };
          });
      }))
      .subscribe((transformedSalary) => {
        this.salaryArr = transformedSalary;
        this.salaryChanged.next(this.salaryArr.slice());
      });
    return this.salaryArr.slice();
  }

  getPostUpdateListener() {
    return this.SalarysUpdated.asObservable();
  }


  addSalary(salary: Salarys){
    const salaryArray: Salarys = {
      sid: salary.sid,
      ename: salary.ename,
      toh: salary.toh,
      twd: salary.twd,
      payd: salary.payd,
      bsal: salary.bsal,
      owork: salary.owork,
      welf: salary.welf,
      epf: salary.epf,
      bonus: salary.bonus,
      stamp: salary.stamp,
      dloan: salary.dloan,
      fadvan: salary.fadvan,
      ins: salary.ins,
      tde: salary.tde,
      gpay: salary.gpay,
      npay: salary.npay,

    };
    this.http.post<{message: string}>('http://localhost:3000/api/salarys', salaryArray)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.salaryArr.push(salaryArray);
        this.salaryChanged.next(this.salaryArr.slice());
      });

  }

  updateSalary(salary: Salarys){
    const salaryArray: Salarys = {
      sid: salary.sid,
      ename: salary.ename,
      toh: salary.toh,
      twd: salary.twd,
      payd: salary.payd,
      bsal: salary.bsal,
      owork: salary.owork,
      welf: salary.welf,
      epf: salary.epf,
      bonus: salary.bonus,
      stamp: salary.stamp,
      dloan: salary.dloan,
      fadvan: salary.fadvan,
      ins: salary.ins,
      tde: salary.tde,
      gpay: salary.gpay,
      npay: salary.npay,

    };
    this.http.put("http://localhost:3000/api/salarys/" + salary.sid, salaryArray)
      .subscribe(response => {
        const SalarysUpdated = [...this.salaryArr];
        const oldSalarysIndex = SalarysUpdated.findIndex(p => p.sid === salaryArray.sid);
        SalarysUpdated[oldSalarysIndex] = salaryArray;
        this.salaryArr = SalarysUpdated;
        this.SalarysUpdated.next([...this.salaryArr]);

      });
  }

  deleteSalay(Salaryid: string){
    this.http.delete("http://localhost:3000/api/salarys/" + Salaryid)
      .subscribe(() => {
        const SalarysUpdated = this.salaryArr.filter(salary => salary.sid !== Salaryid);
        this.salaryArr = SalarysUpdated;
        this.SalarysUpdated.next([...this.salaryArr]);
      })
  }
}
