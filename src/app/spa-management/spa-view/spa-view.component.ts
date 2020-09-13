import { Component, OnInit } from '@angular/core';
import { Spas } from '../../../../models/spa.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CustomerRegistrationService } from 'service/customer-registration.service';
import { SpaManagementService } from 'service/spa-management.service';

@Component({
  selector: 'app-spa-view',
  templateUrl: './spa-view.component.html',
  styleUrls: ['./spa-view.component.css']
})
export class SpaViewComponent implements OnInit {

  spas: Spas[] = [];
  private subscription: Subscription;
  isLoading = false;

  constructor(private router: Router, private spamanagementService: SpaManagementService) { }

  ngOnInit(){
    this.isLoading = true;
    this.spas = this.spamanagementService.getspa();
    this.subscription = this.spamanagementService.spaChanged.subscribe(
      (spas: Spas[]) => {
        this.spas = spas;
        this.isLoading = false;
      }
    );

    console.log(this.spas);
  }

  onDelete(sid: string){
    this.spamanagementService.deleteSpa(sid);
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
