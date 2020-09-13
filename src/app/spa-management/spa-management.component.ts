import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customers } from 'models/customer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerRegistrationService } from 'service/customer-registration.service';
import { Spas } from 'models/spa.model';
import { SpaManagementService } from 'service/spa-management.service';

@Component({
  selector: 'app-spa-management',
  templateUrl: './spa-management.component.html',
  styleUrls: ['./spa-management.component.css']
})
export class SpaManagementComponent implements OnInit {
  @ViewChild('sp', {static: false}) addSpaForm: NgForm;
  defaultValue: string = "choose";
  spas: Spas = {
    sid: '',
    fname: '',
    lname:'',
    age: '',
    gender: '',
    pnumber: '',
    condition: '',
    cpackage: ''
  };
  submitted=false;
  //private subscription: Subscription;

  constructor(private router: Router,
              private spaMmnagementService: SpaManagementService,
              private route: ActivatedRoute) { }

  ngOnInit(){
  }

  onSubmit(){
    console.log(this.addSpaForm);
    this.submitted = true;
    this.spas.sid = null;
    this.spas.fname = this.addSpaForm.value.fname;
    this.spas.lname = this.addSpaForm.value.lname;
    this.spas.age = this.addSpaForm.value.age;
    this.spas.gender = this.addSpaForm.value.gender;
    this.spas.pnumber = this.addSpaForm.value.pnumber;
    this.spas.condition = this.addSpaForm.value.condition;
    this.spas.cpackage = this.addSpaForm.value.cpackage;

    this.addSpaForm.reset();

    this.spaMmnagementService.addSpa(this.spas);

    this.router.navigate(['../spaView'], {relativeTo: this.route});

  }

}
