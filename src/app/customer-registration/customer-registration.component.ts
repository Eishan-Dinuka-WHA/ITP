import { Component, OnInit, ViewChild } from '@angular/core';
import { Customers } from '../../../models/customer.model';

import { CustomerRegistrationService } from 'service/customer-registration.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  @ViewChild('cus', {static: false}) addCustomerForm: NgForm;
  customer: Customers = {
    cid: '',
    uname:'',
    title: '',
    fname: '',
    lname: '',
    country: '',
    state: '',
    city: '',
    street: '',
    ctype: '',
    pcode: '',
    email: '',
    mnumber: '',
    password: '',
    rpassword: ''
  };
  submitted=false;
  //private subscription: Subscription;

  constructor(private router: Router,
              private customerRegistrationService: CustomerRegistrationService,
              private route: ActivatedRoute) { }

  ngOnInit(){
  }

  onSubmit(){
    console.log(this.addCustomerForm);
    this.submitted = true;
    this.customer.cid = null;
    this.customer.title = this.addCustomerForm.value.title;
    this.customer.fname = this.addCustomerForm.value.fname;
    this.customer.lname = this.addCustomerForm.value.lname;
    this.customer.country = this.addCustomerForm.value.country;
    this.customer.state = this.addCustomerForm.value.state;
    this.customer.city = this.addCustomerForm.value.state;
    this.customer.street = this.addCustomerForm.value.street;
    this.customer.ctype = this.addCustomerForm.value.ctype;
    this.customer.pcode = this.addCustomerForm.value.pcode;
    this.customer.email = this.addCustomerForm.value.email;
    this.customer.mnumber = this.addCustomerForm.value.mnumber;
    this.customer.password = this.addCustomerForm.value.password;
    this.customer.rpassword = this.addCustomerForm.value.rpassword;


    this.addCustomerForm.reset();

    this.customerRegistrationService.addCustomer(this.customer);

    this.router.navigate(['../view'], {relativeTo: this.route});

  }

}
