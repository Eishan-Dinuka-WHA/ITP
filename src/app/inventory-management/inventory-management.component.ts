import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Inventory } from 'models/inventory.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerRegistrationService } from 'service/customer-registration.service';
import { InventoryService } from 'service/inventory.service';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent implements OnInit {
  @ViewChild('inv', {static: false}) addInventoryForm: NgForm;
  defaultValue: string = "choose";
  inventory: Inventory = {
    iid: '',
    IT01: '',
    AV01:'',
    AV02: '',
    U1: '',
    Date1: '',
    Sup: '',

  };
  submitted=false;
  //private subscription: Subscription;

  constructor(private router: Router,
              private customerRegistrationService: CustomerRegistrationService,
              private route: ActivatedRoute,
              private inventoryService: InventoryService) { }

  ngOnInit(){
  }

  onSubmit(){
    // console.log(this.addInventoryForm);
    // this.submitted = true;
    this.inventory.iid = null;
    this.inventory.IT01 = this.addInventoryForm.value.IT01;
    this.inventory.AV01 = this.addInventoryForm.value.AV01;
    this.inventory.AV02 = this.addInventoryForm.value.AV02;
    this.inventory.U1 = this.addInventoryForm.value.U1;
    this.inventory.Date1 = this.addInventoryForm.value.Date1;
    this.inventory.Sup = this.addInventoryForm.value.Sup;


    this.inventoryService.addInventory(this.inventory);

    this.router.navigate(['../intView'], {relativeTo: this.route});

  }

  clear(){
    this.addInventoryForm.reset();
  }

}
