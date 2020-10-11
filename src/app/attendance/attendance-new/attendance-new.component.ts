import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Attendances } from 'models/attendance.model';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { AttendanceRegistrationService } from 'service/attendance-management.service';


@Component({
  selector: 'app-attendance-new',
  templateUrl: './attendance-new.component.html',
  styleUrls: ['./attendance-new.component.css']
})
export class AttendanceNewComponent implements OnInit {
  @ViewChild('atten', {static:false}) attendanceForm: NgForm;
  defaultValue: string = "choose";
  demoBtnCLicked: boolean = false;
  attendanceDetails: Attendances;
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

  isLoading = false;
  private mode = "create";
  private Attendanceid: string;

  constructor(private router: Router,
    private attendanceRegistrationService: AttendanceRegistrationService,
    private route: ActivatedRoute) { }


  ngOnInit(){

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("Attendanceid")) {
        this.mode = "edit";
        this.Attendanceid= paramMap.get("Attendanceid");
        this.isLoading = true;
        this.attendanceDetails = this.attendanceRegistrationService.getAttendanceByID(this.Attendanceid);
      } else {
        this.mode = "create";
        this.Attendanceid = null;
      }
    });

  }

  onSubmit(form: NgForm) {
    this.demoBtnCLicked = false;
    if (form.invalid) {
      return;
    }

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



    console.log(this.attendanceForm);
    this.submitted = true;
    if (this.mode === "create") {
      this.attendanceRegistrationService.addAttendance(this.attendances);
      this.router.navigate(['../attenview'], { relativeTo: this.route });
    } else {
      this.attendanceRegistrationService.updateAttendance(this.attendances);
      this.router.navigate(['../../cusView'], { relativeTo: this.route });
    }
    this.attendanceForm.reset();

  }
    fillData(){
      this.attendances.eid = "aa";
      this.attendances.name= "aa";
      this.attendances.date ="aa";
      this.attendances.sta = "aa";
      this.attendances.des = "aa";
      this.attendances.atime = "aa";
      this.attendances.dtime = "aa";

  }

}
