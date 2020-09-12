import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Salarys } from 'models/salary.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SalaryService } from 'service/salary-management.service';

@Component({
  selector: 'app-salary-report-home',
  templateUrl: './salary-report-home.component.html',
  styleUrls: ['./salary-report-home.component.css']
})
export class SalaryReportHomeComponent implements OnInit {
  @ViewChild('sal', {static: false}) addSalaryForm: NgForm;
  defaultValue: string = "choose";
  salarys: Salarys = {
    sid: '',
    ename:'',
    etype:'',
    dept: '',
    des: '',
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
  submitted=false;
  //private subscription: Subscription;

  constructor(private router: Router,
              private salaryService: SalaryService,
              private route: ActivatedRoute) { }

  ngOnInit(){
  }

  onSubmit(){
    console.log(this.addSalaryForm);
    this.submitted = true;
    this.salarys.sid = null;
    this.salarys.ename = this.addSalaryForm.value.ename;
    this.salarys.etype = this.addSalaryForm.value.etype;
    this.salarys.dept = this.addSalaryForm.value.dept;
    this.salarys.des = this.addSalaryForm.value.des;
    this.salarys.toh = this.addSalaryForm.value.toh;
    this.salarys.twd = this.addSalaryForm.value.twd;
    this.salarys.payd = this.addSalaryForm.value.payd;
    this.salarys.bsal = this.addSalaryForm.value.bsal;
    this.salarys.owork = this.addSalaryForm.value.owork;
    this.salarys.welf = this.addSalaryForm.value.welf;
    this.salarys.epf = this.addSalaryForm.value.epf;
    this.salarys.bonus = this.addSalaryForm.value.bonus;
    this.salarys.stamp = this.addSalaryForm.value.stamp;
    this.salarys.dloan = this.addSalaryForm.value.dloan;
    this.salarys.fadvan = this.addSalaryForm.value.fadvan;
    this.salarys.ins = this.addSalaryForm.value.ins;
    this.salarys.tde = this.addSalaryForm.value.tde;
    this.salarys.gpay = this.addSalaryForm.value.gpay;
    this.salarys.npay = this.addSalaryForm.value.npay;


    this.addSalaryForm.reset();

    this.salaryService.addSalary(this.salarys);

    this.router.navigate(['../salaryView'], {relativeTo: this.route});

  }

}
