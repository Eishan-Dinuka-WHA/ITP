import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Packages } from '../models/package.model';
import { Router } from '@angular/router';

@Injectable()
export class PackageService{
  packageChanged = new Subject<Packages[]>();
  private packageArr: Packages[] = [];
  private PackageUpdate = new Subject<Packages[]>();

  constructor(private http: HttpClient , private router :Router){}

  getPackageByID(id: string){
    return {...this.packageArr.find(pkg => pkg.pid === id)};

  }


  getPackage(){
    this.http.get<{message: string, packages: any}>('http://localhost:3000/api/packages')
      .pipe(map((packageData) => {
          return packageData.packages.map(Package => {
            return{
              fname: Package.fname,
              lname: Package.lname,
              checkin: Package.checkin,
              checkout: Package.checkout,
              adults: Package.adults,
              nofch: Package.nofch,
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

  getPostUpdateListener() {
    return this.PackageUpdate.asObservable();
  }


  addPackage(Package: Packages){
    const packageArray: Packages = {
      pid: Package.pid,
      fname: Package.fname,
      lname: Package.lname,
      checkin: Package.checkin,
      checkout: Package.checkout,
      adults: Package.adults,
      nofch: Package.nofch,
      des: Package.des,
    };
    this.http.post<{message: string}>('http://localhost:3000/api/packages', packageArray)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.packageArr.push(packageArray);
        this.packageChanged.next(this.packageArr.slice());
      });

  }

  updatePackage(Package: Packages){
    const packageArray: Packages = {
      pid: Package.pid,
      fname: Package.fname,
      lname: Package.lname,
      checkin: Package.checkin,
      checkout: Package.checkout,
      adults: Package.adults,
      nofch: Package.nofch,
      des: Package.des,
    };
    this.http.put("http://localhost:3000/api/packages/" + Package.pid, packageArray)
      .subscribe(response => {
        const PackageUpdate = [...this.packageArr];
        const oldCustomersIndex = PackageUpdate.findIndex(p => p.pid === packageArray.pid);
        PackageUpdate[oldCustomersIndex] = packageArray;
        this.packageArr = PackageUpdate;
        this.PackageUpdate.next([...this.packageArr]);

      });
  }

  deletePackage(Packageid: string){
    this.http.delete("http://localhost:3000/api/packages/" + Packageid)
      .subscribe(() => {
        console.log('Deleted');
      })
  }
}
