import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employees } from 'models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'service/employee-management.service';


@Component({
  selector: 'app-employee-home-page',
  templateUrl: './employee-home-page.component.html',
  styleUrls: ['./employee-home-page.component.css']
})
export class EmployeeHomePageComponent implements OnInit {
  @ViewChild('emp', {static: false}) addEmployeeForm: NgForm;
  defaultValue: string = "choose";
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
  submitted=false;
  //private subscription: Subscription;

  constructor(private router: Router,
              private employeeService: EmployeeService,
              private route: ActivatedRoute) { }

  ngOnInit(){
  }

  onSubmit(){
    console.log(this.addEmployeeForm);
    this.submitted = true;
    this.employees.eid = null;
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


    this.addEmployeeForm.reset();

    this.employeeService.addEmployee(this.employees);

    this.router.navigate(['../empView'], {relativeTo: this.route});

  }

}
