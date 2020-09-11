import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Packages } from '../models/package.model';

@Injectable()
export class PackageService{
  packageChanged = new Subject<Packages[]>();
  private packageArr: Packages[] = [];

  constructor(private http: HttpClient){}

  getPackage(){
    this.http.get<{message: string, packages: any}>('http://localhost:3000/api/packages')
      .pipe(map((packageData) => {
          return packageData.packages.map(Package => {
            return{
              fname: Package.fname,
              lname: Package.lname,
              bdate: Package.bdate,
              pamount: Package.pamount,
              aservice: Package.aservice,
              vduration: Package.vduration,
              scharges: Package.scharges,
              des: Package.des,
              pid: Package._id,
            };
          });
      }))
      .subscribe((transformedPackage) => {
        this.packageArr = transformedPackage;
        this.packageChanged.next(this.packageArr.slice());
      });
    return this.packageArr.slice();
  }



  addPackage(Package: Packages){
    const packageArray: Packages = {
      pid: Package.pid,
      fname: Package.fname,
      lname: Package.lname,
      bdate: Package.bdate,
      pamount: Package.pamount,
      aservice: Package.aservice,
      vduration: Package.vduration,
      scharges: Package.scharges,
      des: Package.des,
    };
    this.http.post<{message: string}>('http://localhost:3000/api/packages', packageArray)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.packageArr.push(packageArray);
        this.packageChanged.next(this.packageArr.slice());
      });

  }

  deletePackage(Packageid: string){
    this.http.delete("http://localhost:3000/api/packages/" + Packageid)
      .subscribe(() => {
        console.log('Deleted');
      })
  }
}
