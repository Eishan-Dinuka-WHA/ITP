import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Events } from 'models/customerreserve.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerReserveService } from 'service/customer-reserve.service';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {
  @ViewChild('cusres', {static:false}) customerReserveForm: NgForm;
  defaultValue: string = "choose";
  customerreserve: Events = {
    crid:'',
    fname: '',
    lname: '',
    address: '',
    email: '',
    phoneno: '',
    date: '',
    time1: '',
    time2: ''
  };

  submitted=false;

  constructor(private router: Router,
              private customerReserveService: CustomerReserveService,
              private route: ActivatedRoute) { }

  ngOnInit(){
  }

  onSubmit(){
    console.log(this.customerReserveForm);
    this.submitted=true;
    this.customerreserve.crid = null;
    this.customerreserve.fname = this.customerReserveForm.value.fname;
    this.customerreserve.lname = this.customerReserveForm.value.lname;
    this.customerreserve.address = this.customerReserveForm.value.address;
    this.customerreserve.email = this.customerReserveForm.value.email;
    this.customerreserve.phoneno = this.customerReserveForm.value.phoneno;
    this.customerreserve.date = this.customerReserveForm.value.date;
    this.customerreserve.time1 = this.customerReserveForm.value.time1;
    this.customerreserve.time2 = this.customerReserveForm.value.time2;


    this.customerReserveForm.reset();

    this.customerReserveService.addCustomerReserve(this.customerreserve);

    this.router.navigate(['../eventView'], {relativeTo: this.route});
  }


}
