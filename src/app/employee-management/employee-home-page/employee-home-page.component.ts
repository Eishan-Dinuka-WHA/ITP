import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employees } from 'models/employee.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'service/employee-management.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-employee-home-page',
  templateUrl: './employee-home-page.component.html',
  styleUrls: ['./employee-home-page.component.css']
})
export class EmployeeHomePageComponent implements OnInit {
  @ViewChild('emp', {static: false}) addEmployeeForm: NgForm;
  defaultValue: string = "choose";
  demoBtnCLicked: boolean = false;
  employeeDetails:Employees;
  employees: Employees = {
    eid: '',
    uname:'',
    fname: '',
    lname: '',
    address: '',
    nic: '',
    dob: '',
    gender: '',
    mno: '',
    edd: '',
    apn: '',
    joind: '',
    dept: '',
    dcs: '',
    empty: '',
    sal: '',
    password: '',
    rpassword: ''
  };
  nicInvalid: boolean = true;
  submitted=false;
  isLoading = false;
  private mode ="create";
  private EmployeeId:string;
  //private subscription: Subscription;

  constructor(private router: Router,
              private employeeService: EmployeeService,
              private route: ActivatedRoute) { }

  ngOnInit(){
    this.demoBtnCLicked = false;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("EmployeeId")) {
        this.mode = "edit";
        this.EmployeeId = paramMap.get("EmployeeId");
        this.isLoading = true;
        this.employeeDetails = this.employeeService.getEmployeeByID(this.EmployeeId);
      } else {
        this.mode = "create";
        this.EmployeeId = null;
      }
    });
  }


  nicValidate(nic: string){
    if(nic.endsWith("V") && nic.length == 10){
      this.nicInvalid = false;
    }else{
      this.nicInvalid = true;
    }
  }

  onSubmit(form: NgForm){
    this.demoBtnCLicked = false;
    if(form.invalid){
      return;
    }
    console.log(this.addEmployeeForm);
    this.submitted = true;
    this.employees.eid = this.EmployeeId;
    this.employees.uname = this.addEmployeeForm.value.uname;
    this.employees.fname = this.addEmployeeForm.value.fname;
    this.employees.lname = this.addEmployeeForm.value.lname;
    this.employees.address = this.addEmployeeForm.value.address;
    this.employees.nic = this.addEmployeeForm.value.nic;
    this.employees.dob = this.addEmployeeForm.value.dob;
    this.employees.gender = this.addEmployeeForm.value.gender;
    this.employees.mno = this.addEmployeeForm.value.mno;
    this.employees.edd = this.addEmployeeForm.value.edd;
    this.employees.apn = this.addEmployeeForm.value.apn;
    this.employees.joind = this.addEmployeeForm.value.joind;
    this.employees.dept = this.addEmployeeForm.value.dept;
    this.employees.dcs = this.addEmployeeForm.value.dcs;
    this.employees.empty = this.addEmployeeForm.value.empty;
    this.employees.sal = this.addEmployeeForm.value.sal;
    this.employees.password = this.addEmployeeForm.value.password;
    this.employees.rpassword = this.addEmployeeForm.value.rpassword;

    console.log(this.addEmployeeForm);
    this.submitted = true;
    if (this.mode === "create") {
      this.employeeService.addEmployee(this.employees);
      this.router.navigate(['../empView'], { relativeTo: this.route });
    } else {
      this.employeeService.updateEmployee(this.employees);
      this.router.navigate(['../../empView'], { relativeTo: this.route });
    }
    this.addEmployeeForm.reset();

  }



  fillData(){
    this.employees.uname ="Sithu";
    this.employees.fname = "Himesha";
    this.employees.lname ="Weerasinghe";
    this.employees.address = "123/malabe";
    this.employees.nic = "971082135V";
    this.employees.dob = "2020-10-21";
    this.employees.gender = "Female";
    this.employees.mno = "071-1212-123";
    this.employees.edd = "Diploma";
    this.employees.apn ="2020-10-21T12:03";
    this.employees.joind = "2020-10-21T12:03";
    this.employees.dept = "Human Resources (HR) Department";
    this.employees.dcs = "HR-Manager";
    this.employees.empty = "Perment Employee";
    this.employees.sal ="1000.00";
    this.employees.password = "1234";
    this.employees.rpassword = "1234";
    this.demoBtnCLicked = true;

  }
}
