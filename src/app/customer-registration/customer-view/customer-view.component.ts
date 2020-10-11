import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customers } from 'models/customer.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CustomerRegistrationService } from 'service/customer-registration.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


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

  downloadPDF(){
    var element = document.getElementById('table');

    html2canvas(element).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var doc = new jspdf.jsPDF;
      var imgHeight = canvas.height * 210 / canvas.width;
      doc.text('Customer Registry Report', 15, 15);
      doc.addImage(imgData, 0, 20, 210, imgHeight);
      doc.save("report.pdf");
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

