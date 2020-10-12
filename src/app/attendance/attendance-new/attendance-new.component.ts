import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Attendances } from 'models/attendance.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AttendanceRegistrationService } from 'service/attendance-management.service';
import { EmployeeService} from'service/employee-management.service';
import { Employees} from 'models/employee.model';
import { Subscription} from 'rxjs';
import { formatCurrency } from '@angular/common';



@Component({
  selector: 'app-attendance-new',
  templateUrl: './attendance-new.component.html',
  styleUrls: ['./attendance-new.component.css']
})
export class AttendanceNewComponent implements OnInit {
  @ViewChild('atten', { static: false }) attendanceForm: NgForm;
  defaultValue: string = "choose";
  demoBtnCLicked: boolean = false;
  private Subscription :Subscription;
  attendanceDetails: Attendances;
  employeeDetails:Employees[]=[];
  attendances: Attendances = {

    aid: '',
    name: '',
    date: '',
    des: '',
    sta: '',
    atime: '',
    dtime: ''
  };

  submitted = false;

  isLoading = false;
  private mode = "create";
  private Attendanceid: string;

  constructor(private router: Router,
    private attendanceRegistrationService: AttendanceRegistrationService,
    private employeeService:EmployeeService,
    private route: ActivatedRoute) { }


  ngOnInit() {
    // update the Employee
    this.demoBtnCLicked = false;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("Attendanceid")) {
        this.mode = "edit";
        this.Attendanceid = paramMap.get("Attendanceid");
        this.isLoading = true;
        this.attendanceDetails = this.attendanceRegistrationService.getAttendanceByID(this.Attendanceid);
      } else {
        this.mode = "create";
        this.Attendanceid = null;
      }
    });


//------------------  using another class -------------------------------------------------------------------
this.employeeDetails = this.employeeService.getEmployee();
this.Subscription = this.employeeService.employeeChanged.subscribe(
  (employees: Employees[]) => {
    this.employeeDetails = employees;
  }
);
//------------------------------------------------------------------------------------------------------------
}



  onSubmit(form: NgForm) {
    this.demoBtnCLicked = false;
    if (form.invalid) {
      return;
    }
    this.demoBtnCLicked = false;
    console.log(this.attendanceForm);
    this.submitted = true;
    this.attendances.aid = this.Attendanceid;
    this.attendances.name = this.attendanceForm.value.name;
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
      this.router.navigate(['../../attenview'], { relativeTo: this.route });
    }
    this.attendanceForm.reset();

  }
  fillData() {
    this.attendances.name = "Kalum";
    this.attendances.date = "2020-10-23";
    this.attendances.sta = "present";
    this.attendances.des = "HR-Manager";
    this.attendances.atime = "20:16";
    this.attendances.dtime = "23:16";
    this.demoBtnCLicked = true;

  }

}
