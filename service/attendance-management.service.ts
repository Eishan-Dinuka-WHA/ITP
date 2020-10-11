import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Attendances } from '../models/attendance.model';
import { Router } from '@angular/router';

@Injectable()
export class AttendanceRegistrationService{
  attendanceChanged = new Subject<Attendances[]>();
  private attendanceArr: Attendances[] = [];
  private  AttendancesUpdated  = new Subject<Attendances[]>();

  constructor(private http: HttpClient , private router:Router){}

  getAttendanceByID(id: string){
    return {...this.attendanceArr.find(cust => cust.aid === id)};
  }

  getAttendance(){
    this.http.get<{message: string, attendances: any}>('http://localhost:3000/api/attendanses')
      .pipe(map((attendanceData) => {
          return attendanceData.attendances.map(attendance => {
            return{

              name: attendance.name,
              date: attendance.date,
              des: attendance.des,
              atime: attendance.atime,
              dtime: attendance.dtime,
              sta: attendance.sta,
              aid: attendance._id,
            };
          });
      }))
      .subscribe((transformedAttendance) => {
        this.attendanceArr = transformedAttendance;
        this.attendanceChanged.next(this.attendanceArr.slice());
      });
    return this.attendanceArr.slice();
  }

  getPostUpdateListener() {
    return this.AttendancesUpdated.asObservable();
  }


  addAttendance(attendance: Attendances){
    const attendanceArray: Attendances = {
      aid: attendance.aid,
      name: attendance.name,
      date: attendance.date,
      des: attendance.des,
      sta: attendance.sta,
      atime: attendance.atime,
      dtime: attendance.dtime
    };
    this.http.post<{message: string}>('http://localhost:3000/api/attendanses', attendanceArray)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.attendanceArr.push(attendanceArray);
        this.attendanceChanged.next(this.attendanceArr.slice());
      });

  }

  updateAttendance(attendance: Attendances){
    const attendancesArray: Attendances = {
      aid: attendance.aid,
      name: attendance.name,
      date: attendance.date,
      des: attendance.des,
      sta: attendance.sta,
      atime: attendance.atime,
      dtime: attendance.dtime
    };
    this.http.put("http://localhost:3000/api/attendanses/" + attendance.aid, attendancesArray)
      .subscribe(response => {
        const AttendancesUpdated = [...this.attendanceArr];
        const oldCustomersIndex = AttendancesUpdated.findIndex(p => p.aid === attendancesArray.aid);
        AttendancesUpdated[oldCustomersIndex] = attendancesArray;
        this.attendanceArr = AttendancesUpdated;
        this.AttendancesUpdated.next([...this.attendanceArr]);

      });
  }

  deleteAttendance(Attendancid: string){
    this.http.delete("http://localhost:3000/api/attendanses/" + Attendancid)
      .subscribe(() => {
        const AttendancesUpdated = this.attendanceArr.filter(attendance => attendance.aid !== Attendancid);
        this.attendanceArr = AttendancesUpdated;
        this.AttendancesUpdated.next([...this.attendanceArr]);
      });
  }
}
