import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customers } from 'models/customer.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CustomerRegistrationService } from 'service/customer-registration.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit, OnDestroy {
  customers: Customers[] = [];
  private subscription: Subscription;
  isLoading = false;

  constructor(private router: Router, private customerRegistrationService: CustomerRegistrationService) { }

  ngOnInit(){
    this.isLoading = true;
    this.customers = this.customerRegistrationService.getCustomer();
    this.subscription = this.customerRegistrationService.customerChanged.subscribe(
      (customers: Customers[]) => {
        this.customers = customers;
        this.isLoading = false;
      }
    );
    console.log(this.customers);
  }

  onDelete(cid: string){
    this.customerRegistrationService.deleteCustomer(cid);
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}

