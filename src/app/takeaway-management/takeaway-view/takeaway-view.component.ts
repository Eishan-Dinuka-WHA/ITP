import { Component, OnInit, OnDestroy } from '@angular/core';
import { Restaurants } from 'models/takeaway.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TakeawayManagementService } from 'service/takeaway-management.service';


@Component({
  selector: 'app-takeaway-view',
  templateUrl: './takeaway-view.component.html',
  styleUrls: ['./takeaway-view.component.css']
})
export class TakeawayViewComponent implements OnInit, OnDestroy {
  restaurants: Restaurants[] = [];
  private subscription: Subscription;
  isLoading = false;


  constructor(private router: Router, private takeawayManagementService: TakeawayManagementService) { }



  ngOnInit(){
    this.isLoading = true;
    this.restaurants = this.takeawayManagementService.getRestaurant();
    this.subscription = this.takeawayManagementService.restaurantChanged.subscribe(
      (restaurants: Restaurants[]) => {
        this.restaurants = restaurants;
        this.isLoading = false;
      }
    );
    console.log(this.restaurants);
  }

  onDelete(fid: string){
    this.takeawayManagementService.deleteRestaurant(fid);
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  }

