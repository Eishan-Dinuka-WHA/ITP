import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Restaurants } from '../models/takeaway.model';

@Injectable()
export class TakeawayManagementService{
  restaurantChanged = new Subject<Restaurants[]>();
  private restaurantArr: Restaurants[] = [];

  constructor(private http: HttpClient){}

  getRestaurant(){
    this.http.get<{message: string, restaurants: any}>('http://localhost:3000/api/restaurants')
      .pipe(map((restaurantData) => {
          return restaurantData.restaurants.map(restaurant => {
            return{
              fname: restaurant.fname,
              lname: restaurant.lname,
              venue: restaurant.venue,
              address: restaurant.address,
              email: restaurant.email,
              phone: restaurant.phone,
              when: restaurant.when,
              time: restaurant.time,
              payment: restaurant.payment,
              fid: restaurant._id,
            };
          });
      }))
      .subscribe((transformedRestaurant) => {
        this.restaurantArr = transformedRestaurant;
        this.restaurantChanged.next(this.restaurantArr.slice());
      });
    return this.restaurantArr.slice();
  }


  addRestaurant(restaurant: Restaurants){
    const restaurantArray: Restaurants = {
      fid: restaurant.fid,
      fname: restaurant.fname,
      lname: restaurant.lname,
      venue: restaurant.venue,
      address: restaurant.address,
      email: restaurant.email,
      phone: restaurant.phone,
      when: restaurant.when,
      time: restaurant.time,
      payment: restaurant.payment,

    };
    this.http.post<{message: string}>('http://localhost:3000/api/restaurants', restaurantArray)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.restaurantArr.push(restaurantArray);
        this.restaurantChanged.next(this.restaurantArr.slice());
      });

  }

  deleteRestaurant(Restaurantid: string){
    this.http.delete("http://localhost:3000/api/restaurants/" + Restaurantid)
      .subscribe(() => {
        console.log('Deleted');
      })
  }
}
