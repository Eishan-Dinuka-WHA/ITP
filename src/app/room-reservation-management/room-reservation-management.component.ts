
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reservations } from 'models/room.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomReservationViewComponent } from './room-reservation-view/room-reservation-view.component';
import { ReservationService } from 'service/room-reservation.service';

@Component({
  selector: 'app-room-reservation-management',
  templateUrl: './room-reservation-management.component.html',
  styleUrls: ['./room-reservation-management.component.css']
})
export class ReservationManagementComponent implements OnInit {
@ViewChild('rom', {static: false}) addRoomForm: NgForm;
defaultValue: string = "choose";
reservations: Reservations = {
  cn: '',
  cname: '',
  birthday: '',
  gender: '',
  email: '',
  phone: '',
  country: '',
  state: '',
  city: '',
  street: '',
  cchoise: '',
  pcode: '',
  edate: '',
  ddate: '',
  mnumber: '',

};
submitted=false;
//private subscription: Subscription;

constructor(private router: Router,
            private roomService: ReservationService,
            private route: ActivatedRoute) { }

ngOnInit(){
}

onSubmit(){
  console.log(this.addRoomForm);
  this.submitted = true;
  this.reservations.cn = null;
  this.reservations.cname = this.addRoomForm.value.cname;
  this.reservations.birthday = this.addRoomForm.value.birthday;
  this.reservations.gender = this.addRoomForm.value.gender;
  this.reservations.email= this.addRoomForm.value.email;
  this.reservations.phone = this.addRoomForm.value.phone;
  this.reservations.country = this.addRoomForm.value.country;
  this.reservations.state = this.addRoomForm.value.state;
  this.reservations.city = this.addRoomForm.value.city;
  this.reservations.street = this.addRoomForm.value.street;
  this.reservations.cchoise = this.addRoomForm.value.cchoise;
  this.reservations.pcode = this.addRoomForm.value.pcode;
  this.reservations.edate = this.addRoomForm.value.edate;
  this.reservations.ddate = this.addRoomForm.value.ddate;
  this.reservations.mnumber = this.addRoomForm.value.mnumber;

  this.addRoomForm.reset();

  this.roomService.addReservation(this.reservations);

  this.router.navigate(['../roomView'], {relativeTo: this.route});

}

}
