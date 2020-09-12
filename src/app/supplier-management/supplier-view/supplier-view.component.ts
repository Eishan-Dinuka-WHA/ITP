
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Suppliers } from 'models/supplier.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SupplierRegistrationService } from 'service/supplier-registration.service';

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.css']
})
export class SupplierViewComponent implements OnInit {
  suppliers: Suppliers[] = [];
  private subscription: Subscription;
  isLoading = false;

  constructor(private router: Router, private supplierRegistrationService: SupplierRegistrationService) { }

  ngOnInit(){
    this.isLoading = true;
    this.suppliers = this.supplierRegistrationService.getSupplier();
    this.subscription = this.supplierRegistrationService.supplierChanged.subscribe(
      (suppliers: Suppliers[]) => {
        this.suppliers = suppliers;
        this.isLoading = false;
      }
    );
    console.log(this.suppliers);
  }

  onDelete(sid: string){
    this.supplierRegistrationService.deleteSupplier(sid);
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}

