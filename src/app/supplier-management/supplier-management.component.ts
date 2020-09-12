import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Suppliers } from 'models/supplier.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SupplierRegistrationService } from 'service/supplier-registration.service';

@Component({
  selector: 'app-supplier-management',
  templateUrl: './supplier-management.component.html',
  styleUrls: ['./supplier-management.component.css']
})
export class SupplierManagementComponent implements OnInit {
@ViewChild('sup', {static: false}) addSupplierForm: NgForm;
defaultValue: string = "choose";
suppliers: Suppliers = {
  sid: '',
  sname:'',
  cname: '',
  badd: '',
  btele: '',
  web: '',
  email: '',
  pcode: '',
  stype: '',
  pdes: '',
  semail: '',
  smnumber: '',

};
submitted=false;
//private subscription: Subscription;

constructor(private router: Router,
            private supplierRegistrationService: SupplierRegistrationService,
            private route: ActivatedRoute) { }

ngOnInit(){
}

onSubmit(){
  console.log(this.addSupplierForm);
  this.submitted = true;
  this.suppliers.sid = null;
  this.suppliers.sname = this.addSupplierForm.value.sname;
  this.suppliers.cname = this.addSupplierForm.value.cname;
  this.suppliers.badd = this.addSupplierForm.value.badd;
  this.suppliers.btele = this.addSupplierForm.value.btele;
  this.suppliers.web = this.addSupplierForm.value.web;
  this.suppliers.email = this.addSupplierForm.value.email;
  this.suppliers.pcode = this.addSupplierForm.value.pcode;
  this.suppliers.stype = this.addSupplierForm.value.stype;
  this.suppliers.pdes = this.addSupplierForm.value.pdes;
  this.suppliers.semail = this.addSupplierForm.value.semail;
  this.suppliers.smnumber = this.addSupplierForm.value.smnumber;



  this.addSupplierForm.reset();

  this.supplierRegistrationService.addSupplier(this.suppliers);

  this.router.navigate(['../supView'], {relativeTo: this.route});

}

}
