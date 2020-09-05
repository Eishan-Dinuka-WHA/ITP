import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customers } from 'models/customer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerRegistrationService } from 'service/customer-registration.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {
  @ViewChild('cus', {static: false}) addCustomerForm: NgForm;
  defaultValue: string = "choose";
  customers: Customers = {
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
    this.customers.cid = null;
    this.customers.uname = this.addCustomerForm.value.uname;
    this.customers.title = this.addCustomerForm.value.title;
    this.customers.fname = this.addCustomerForm.value.fname;
    this.customers.lname = this.addCustomerForm.value.lname;
    this.customers.country = this.addCustomerForm.value.country;
    this.customers.state = this.addCustomerForm.value.state;
    this.customers.city = this.addCustomerForm.value.city;
    this.customers.street = this.addCustomerForm.value.street;
    this.customers.ctype = this.addCustomerForm.value.ctype;
    this.customers.pcode = this.addCustomerForm.value.pcode;
    this.customers.email = this.addCustomerForm.value.email;
    this.customers.mnumber = this.addCustomerForm.value.mnumber;
    this.customers.password = this.addCustomerForm.value.password;
    this.customers.rpassword = this.addCustomerForm.value.rpassword;


    this.addCustomerForm.reset();

    this.customerRegistrationService.addCustomer(this.customers);

    this.router.navigate(['../cus-view'], {relativeTo: this.route});

  }

}
