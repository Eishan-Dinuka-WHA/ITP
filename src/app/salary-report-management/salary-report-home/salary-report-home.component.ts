import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Salarys } from 'models/salary.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SalaryService } from 'service/salary-management.service';

import { EmployeeService } from 'service/employee-management.service';
import { Employees } from 'models/employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-salary-report-home',
  templateUrl: './salary-report-home.component.html',
  styleUrls: ['./salary-report-home.component.css']
})
export class SalaryReportHomeComponent implements OnInit {
  @ViewChild('sal', {static: false}) addSalaryForm: NgForm;
  defaultValue: string = "choose";
  private subscription :Subscription
  demoBtnCLicked: boolean = false;
  EmployeeDetails: Employees[] =[];
  salaryDetails: Salarys;
  salarys: Salarys = {
    sid: '',
    ename:'',
    toh: '',
    twd: '',
    payd: '',
    bsal: '',
    owork: '',
    welf: '',
    epf:'',
    bonus: '',
    stamp: '',
    dloan: '',
    fadvan: '',
    ins: '',
    tde: '',
    gpay: '',
    npay: ''
  };
  epfAmount: number;
  totalEarning: number;
  totalDeduction: number;
  netPay: number;
  submitted=false;

  isLoading = false;
  private mode = "create";
  private Salaryid: string;
  //private subscription: Subscription;

  constructor(private router: Router,
              private salaryService: SalaryService,
              private employeeService:EmployeeService,
              private route: ActivatedRoute) { }

  ngOnInit(){

    this.EmployeeDetails = this.employeeService.getEmployee();
    this.subscription = this.employeeService.employeeChanged.subscribe(
      (employees: Employees[]) => {
        this.EmployeeDetails = employees;
      }
    );


    this.epfAmount = 0;
    this.totalEarning = 0;
    this.totalDeduction = 0;
    this.netPay = 0;

    this.demoBtnCLicked = false;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("Salaryid")) {
        this.mode = "edit";
        this.Salaryid = paramMap.get("Salaryid");
        this.isLoading = true;
        this.salaryDetails = this.salaryService.getSalaryByID(this.Salaryid);
      } else {
        this.mode = "create";
        this.Salaryid = null;
      }
    });

  }

  calculateEpf(){
    this.epfAmount = +this.addSalaryForm.value.bsal * 0.1;
  }

  calculateTotalEarning(){
    this.totalEarning = +this.addSalaryForm.value.bsal +
                         +this.addSalaryForm.value.owork +
                        +this.addSalaryForm.value.bonus;

  }

  calculateTotalDeduction(){
    this.totalDeduction = +this.addSalaryForm.value.fadvan +
                          +this.addSalaryForm.value.stamp +
                          +this.epfAmount +
                          +this.addSalaryForm.value.welf+
                          +this.addSalaryForm.value.dloan +
                          +this.addSalaryForm.value.ins;

  }

  calculateNetPay(){
    this.netPay = this.totalEarning - this.totalDeduction;
  }



  onSubmit(form: NgForm) {
    this.demoBtnCLicked = false;
    if (form.invalid) {
      return;
    }

    this.salarys.sid = this.Salaryid;
    this.salarys.ename = this.addSalaryForm.value.ename;
    this.salarys.toh = this.addSalaryForm.value.toh;
    this.salarys.twd = this.addSalaryForm.value.twd;
    this.salarys.payd = this.addSalaryForm.value.payd;
    this.salarys.bsal = this.addSalaryForm.value.bsal;
    this.salarys.owork = this.addSalaryForm.value.owork;
    this.salarys.welf = this.addSalaryForm.value.welf;
    this.salarys.epf = this.epfAmount.toString();
    this.salarys.bonus = this.addSalaryForm.value.bonus;
    this.salarys.stamp = this.addSalaryForm.value.stamp;
    this.salarys.dloan = this.addSalaryForm.value.dloan;
    this.salarys.fadvan = this.addSalaryForm.value.fadvan;
    this.salarys.ins = this.addSalaryForm.value.ins;
    this.salarys.tde = this.totalDeduction.toString();
    this.salarys.gpay = this.totalEarning.toString();
    this.salarys.npay = this.netPay.toString();

    console.log(this.addSalaryForm);
    this.submitted = true;
    if (this.mode === "create") {
      this.salaryService.addSalary(this.salarys);
      this.router.navigate(['../salaryView'], { relativeTo: this.route });
    } else {
      this.salaryService.updateSalary(this.salarys);
      this.router.navigate(['../../salaryView'], { relativeTo: this.route });
    }
  }

  fillData(){

    this.salarys.ename = "Himesha";
    this.salarys.toh = "400";
    this.salarys.twd = "240";
    this.salarys.payd = "2020-10-08";
    this.salarys.bsal = "10000";
    this.salarys.owork = "1000";
    this.salarys.welf = "1000";
    this.salarys.bonus = "1000";
    this.salarys.stamp = "500";
    this.salarys.dloan = "400";
    this.salarys.fadvan = "100";
    this.salarys.ins = "500";
    this.demoBtnCLicked = true;

  }

}
