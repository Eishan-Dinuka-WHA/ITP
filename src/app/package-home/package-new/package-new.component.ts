import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Packages } from 'models/package.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PackageService } from 'service/package-management.service';


@Component({
  selector: 'app-package-new',
  templateUrl: './package-new.component.html',
  styleUrls: ['./package-new.component.css']
})
export class PackageNewComponent implements OnInit {
  @ViewChild('pac', {static: false}) addPackageForm: NgForm;
  defaultValue: string = "choose";
  packages: Packages = {
    pid: '',
    fname:'',
    lname: '',
    bdate: '',
    pamount: '',
    aservice: '',
    vduration: '',
    scharges: '',
    des: ''
  };
  submitted=false;
  //private subscription: Subscription;

  constructor(private router: Router,
              private packageService: PackageService,
              private route: ActivatedRoute) { }

  ngOnInit(){
  }

  onSubmit(){
    console.log(this.addPackageForm);
    this.submitted = true;
    this.packages.pid = null;
    this.packages.fname = this.addPackageForm.value.fname;
    this.packages.lname = this.addPackageForm.value.lname;
    this.packages.bdate = this.addPackageForm.value.bdate;
    this.packages.pamount = this.addPackageForm.value.pamount;
    this.packages.aservice = this.addPackageForm.value.aservice;
    this.packages.vduration = this.addPackageForm.value.vduration;
    this.packages.scharges = this.addPackageForm.value.scharges;
    this.packages.des = this.addPackageForm.value.des;

    this.addPackageForm.reset();

    this.packageService.addPackage(this.packages);

    this.router.navigate(['../packView'], {relativeTo: this.route});

  }

}
