import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Reservations } from '../models/room.model';
import { Router } from '@angular/router';

@Injectable()
export class ReservationService{
  reservationChanged = new Subject<Reservations[]>();
  private reservationArr: Reservations[] = [];
  private ReservationsUpdated = new Subject<Reservations[]>();

  constructor(private http: HttpClient , private router:Router){}

  getRservationByID(id : string){
    return{...this.reservationArr.find(rus => rus.cn===id)}
  }
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


  getPostUpdateListener() {
    return this.reservationChanged.asObservable();
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

  updateReservation(reservation:  Reservations){
    const reservationArray:  Reservations = {
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
      mnumber: reservation.mnumber


    };
    this.http.put("http://localhost:3000/api/reservations/" + reservation.cn, reservationArray)
      .subscribe(response => {
        const ReservationsUpdated = [...this.reservationArr];
        const oldReservationsIndex = ReservationsUpdated.findIndex(p => p.cn === reservationArray.cn);
        ReservationsUpdated[oldReservationsIndex] = reservationArray;
        this.reservationArr = ReservationsUpdated;
        this.ReservationsUpdated.next([...this.reservationArr]);

      });
  }


  deleteReservation(Reservationid: string){
    this.http.delete("http://localhost:3000/api/reservations/" + Reservationid)
      .subscribe(() => {
        const ReservationsUpdated = this.reservationArr.filter(reservation => reservation.cn !== Reservationid);
        this.reservationArr = ReservationsUpdated;
        this.ReservationsUpdated.next([...this.reservationArr]);
      })
  }
}
