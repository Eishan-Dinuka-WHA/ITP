import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Attendances } from '../models/attendance.model';

@Injectable()
export class AttendanceRegistrationService{
  attendanceChanged = new Subject<Attendances[]>();
  private attendanceArr: Attendances[] = [];

  constructor(private http: HttpClient){}

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
              eid: attendance.eid,
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

  addAttendance(attendance: Attendances){
    const attendanceArray: Attendances = {
      aid: attendance.dtime,
      eid: attendance.eid,
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

  deleteCustomer(Attendancid: string){
    this.http.delete("http://localhost:3000/api/attendanses/" + Attendancid)
      .subscribe(() => {
        console.log('Deleted');
      })
  }
}
