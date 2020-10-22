import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Packages } from 'models/package.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PackageService } from 'service/package-management.service';
import { CustomerRegistrationService } from 'service/customer-registration.service';
import { Customers } from 'models/customer.model';
import { Subscription } from 'rxjs';
import { formatCurrency } from '@angular/common';


@Component({
  selector: 'app-package-new',
  templateUrl: './package-new.component.html',
  styleUrls: ['./package-new.component.css']
})
export class PackageNewComponent implements OnInit {
  @ViewChild('pac', {static: false}) addPackageForm: NgForm;
  defaultValue: string = "choose";
  demoBtnCLicked: boolean = false;
  PackageDetails: Packages;
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

  isLoading=false;
  private mode ="create";
  private Packageid: string;
  //private subscription: Subscription;

  constructor(private router: Router,
              private packageService: PackageService,
              private customerRegistrationService: CustomerRegistrationService,
              private route: ActivatedRoute) { }



  ngOnInit(){

    this.demoBtnCLicked = false;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("Packageid")) {
        this.mode = "edit";
        this.Packageid = paramMap.get("Packageid");
        this.isLoading = true;
        this.PackageDetails = this.packageService.getPackageByID(this.Packageid);
      } else {
        this.mode = "create";
        this.Packageid = null;
      }
    });

//-------------------------------------------------------------------------------------
    this.customerDetails = this.customerRegistrationService.getCustomer();
    this.subscription = this.customerRegistrationService.customerChanged.subscribe(
      (customers: Customers[]) => {
        this.customerDetails = customers;
      }
    );
//-------------------------------------------------------------------------------------
  }


  nicValidate(nic: string){
    if(nic.endsWith("V") && nic.length == 10){
      this.nicInvalid = false;
    }else{
      this.nicInvalid = true;
    }
  }

  onSubmit(form:NgForm){
  this.demoBtnCLicked = false;
  if(form.invalid){
    return;
      }

    this.packages.pid = this.Packageid;
    this.packages.fname = this.addPackageForm.value.fname;
    this.packages.lname = this.addPackageForm.value.lname;
    this.packages.checkin = this.addPackageForm.value.checkin;
    this.packages.checkout = this.addPackageForm.value.checkout;
    this.packages.adults = this.addPackageForm.value.adults;
    this.packages.nofch = this.addPackageForm.value.nofch;
    this.packages.des = this.addPackageForm.value.des;

    console.log(this.addPackageForm);
    this.submitted = true;
    if (this.mode === "create") {
      this.packageService.addPackage(this.packages);
      this.router.navigate(['../packView'], { relativeTo: this.route });
    } else {
      this.packageService.updatePackage(this.packages);
      this.router.navigate(['../../packView'], { relativeTo: this.route });
    }
    this.addPackageForm.reset();

  }

  fillData(){
    this.packages.fname ="Eishan";
    this.packages.lname = "971068123V";
    this.packages.checkin = "2020-10-21T12:03";
    this.packages.checkout = "2020-10-21T12:03";
    this.packages.adults = "3";
    this.packages.nofch = "5";
    this.packages.des = "I want something";
    this.demoBtnCLicked = true;
  }
}
