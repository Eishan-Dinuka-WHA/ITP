import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Packages } from 'models/package.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PackageService } from 'service/package-management.service';
import { CustomerRegistrationService } from 'service/customer-registration.service';
import { Customers } from 'models/customer.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-package-new',
  templateUrl: './package-new.component.html',
  styleUrls: ['./package-new.component.css']
})
export class PackageNewComponent implements OnInit {
  @ViewChild('pac', {static: false}) addPackageForm: NgForm;
  defaultValue: string = "choose";
  private subscription: Subscription;
  customerDetails: Customers[] = [];
  packages: Packages = {
    pid: '',
    fname:'',
    lname: '',
    checkin: '',
    checkout: '',
    adults: '',
    nofch: '',
    des: ''
  };
  nicInvalid: boolean = true;
  submitted=false;
  //private subscription: Subscription;

  constructor(private router: Router,
              private packageService: PackageService,
              private customerRegistrationService: CustomerRegistrationService,
              private route: ActivatedRoute) { }



  ngOnInit(){
    this.customerDetails = this.customerRegistrationService.getCustomer();
    this.subscription = this.customerRegistrationService.customerChanged.subscribe(
      (customers: Customers[]) => {
        this.customerDetails = customers;
      }
    );

  }


  nicValidate(nic: string){
    if(nic.endsWith("V") && nic.length == 10){
      this.nicInvalid = false;
    }else{
      this.nicInvalid = true;
    }
  }

  onSubmit(){
    console.log(this.addPackageForm);
    this.submitted = true;
    this.packages.pid = null;
    this.packages.fname = this.addPackageForm.value.fname;
    this.packages.lname = this.addPackageForm.value.lname;
    this.packages.checkin = this.addPackageForm.value.checkin;
    this.packages.checkout = this.addPackageForm.value.checkout;
    this.packages.adults = this.addPackageForm.value.adults;
    this.packages.nofch = this.addPackageForm.value.nofch;
    this.packages.des = this.addPackageForm.value.des;

    this.addPackageForm.reset();

    this.packageService.addPackage(this.packages);

    this.router.navigate(['../packView'], {relativeTo: this.route});

  }

}
