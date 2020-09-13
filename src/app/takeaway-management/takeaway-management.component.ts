import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurants } from 'models/takeaway.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TakeawayManagementService } from 'service/takeaway-management.service';


@Component({
  selector: 'app-takeaway-management',
  templateUrl: './takeaway-management.component.html',
  styleUrls: ['./takeaway-management.component.css']
})
export class TakeawayManagementComponent implements OnInit {
  @ViewChild('rest', {static: false}) addRestaurantForm: NgForm;
  defaultValue: string = "choose";
  restaurants: Restaurants = {
    fid: '',
    fname:'',
    lname: '',
    venue: '',
    address: '',
    email: '',
    phone: '',
    when: '',
    time: '',
    payment: ''
  };
  submitted=false;
  //private subscription: Subscription;

  constructor(private router: Router,
              private TakeawayManagementService: TakeawayManagementService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }



onSubmit(){
  console.log(this.addRestaurantForm);
  this.submitted = true;
  this.restaurants.fid = null;
  this.restaurants.fname = this.addRestaurantForm.value.fname;
  this.restaurants.lname = this.addRestaurantForm.value.lname;
  this.restaurants.venue = this.addRestaurantForm.value.venue;
  this.restaurants.lname = this.addRestaurantForm.value.lname;
  this.restaurants.address = this.addRestaurantForm.value.address;
  this.restaurants.email = this.addRestaurantForm.value.email;
  this.restaurants.phone = this.addRestaurantForm.value.phone;
  this.restaurants.when = this.addRestaurantForm.value.when;
  this.restaurants.time = this.addRestaurantForm.value.time;
  this.restaurants.payment = this.addRestaurantForm.value.payment;

  this.addRestaurantForm.reset();

  this.TakeawayManagementService.addRestaurant(this.restaurants);

  this.router.navigate(['../takeView'], {relativeTo: this.route});

 }
}



