import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Reservations } from '../models/room.model';

@Injectable()
export class ReservationService{
  reservationChanged = new Subject<Reservations[]>();
  private reservationArr: Reservations[] = [];

  constructor(private http: HttpClient){}

  getReservation(){
    this.http.get<{message: string, reservations: any}>('http://localhost:3000/api/reservations')
      .pipe(map((reservationData) => {
          return reservationData.reservations.map(reservation => {
            return{
              cname: reservation.cname,
              birthday: reservation.birthday,
              gender: reservation.gender,
              email: reservation.email,
              phone : reservation.phone,
              country: reservation.country,
              state: reservation.state,
              city: reservation.city,
              street: reservation.street,
              cchoise: reservation. cchoise,
              pcode: reservation.pcode,
              edate: reservation.edate,
              ddate: reservation.ddate,
              mnumber: reservation.mnumber,
              cn: reservation._id,

            };
          });
      }))
      .subscribe((transformedResevation) => {
        this.reservationArr = transformedResevation;
        this.reservationChanged.next(this.reservationArr.slice());
      });
    return this.reservationArr.slice();
  }


  addReservation(reservation: Reservations){
    const reservationArray: Reservations = {
      cn: reservation.cn,
      cname: reservation.cname,
      birthday: reservation.birthday,
      gender: reservation.gender,
      email: reservation.email,
      phone : reservation.phone,
      country: reservation.country,
      state: reservation.state,
      city: reservation.city,
      street: reservation.street,
      cchoise: reservation.cchoise,
      pcode: reservation.pcode,
      edate: reservation.edate,
      ddate: reservation.ddate,
      mnumber: reservation.mnumber,

    };
    this.http.post<{message: string}>('http://localhost:3000/api/reservations', reservationArray)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.reservationArr.push(reservationArray);
        this.reservationChanged.next(this.reservationArr.slice());
      });
  }

  deleteReservation(id: string){
    this.http.delete("http://localhost:3000/api/reservations/" + id)
      .subscribe(() => {
        console.log('Deleted');
      })
  }
}
