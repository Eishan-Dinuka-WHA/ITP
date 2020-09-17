
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Events } from 'models/customerreserve.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CustomerReserveService } from 'service/customer-reserve.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  customerreserve: Events[] = [];
  private subscription: Subscription;
  isLoading = false;

  constructor(private router: Router, private customerReserveService: CustomerReserveService) { }

  ngOnInit() {
    this.isLoading = true;
    this.customerreserve = this.customerReserveService.getCustomerReserve();
    this.subscription = this.customerReserveService.customerreserveChanged.subscribe(
      (customerreserve: Events[]) => {
        this.customerreserve = customerreserve;
        this.isLoading = false;
      }
    );
    console.log(this.customerreserve);
  }

  onDelete(crid: string){
    this.customerReserveService.deleteCustomerReserve(crid);
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

}
