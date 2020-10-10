import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Attendances } from 'models/attendance.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendanceRegistrationService } from 'service/attendance-management.service';

@Component({
  selector: 'app-attendance-new',
  templateUrl: './attendance-new.component.html',
  styleUrls: ['./attendance-new.component.css']
})
export class AttendanceNewComponent implements OnInit {
  @ViewChild('atten', {static:false}) attendanceForm: NgForm;
  defaultValue: string = "choose";
  attendances: Attendances = {
    aid:'',
    eid:'',
    name: '',
    date:'',
    des:'',
    sta:'',
    atime:'',
    dtime:''
  };

  submitted=false;

  constructor(private router: Router,
              private attendanceRegistrationService: AttendanceRegistrationService,
              private route: ActivatedRoute) { }

  ngOnInit(){
  }

  onSubmit(){
    console.log(this.attendanceForm);
    this.submitted=true;
    this.attendances.aid = null;
    this.attendances.eid = this.attendanceForm.value.eid;
    this.attendances.name= this.attendanceForm.value.name;
    this.attendances.date = this.attendanceForm.value.date;
    this.attendances.sta = this.attendanceForm.value.sta;
    this.attendances.des = this.attendanceForm.value.des;
    this.attendances.atime = this.attendanceForm.value.atime;
    this.attendances.dtime = this.attendanceForm.value.dtime;


    this.attendanceForm.reset();

    this.attendanceRegistrationService.addAttendance(this.attendances);

    this.router.navigate(['../attenview'], {relativeTo: this.route});
  }

}
