
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reservations } from 'models/room.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RoomReservationViewComponent } from './room-reservation-view/room-reservation-view.component';
import { ReservationService } from 'service/room-reservation.service';

@Component({
  selector: 'app-room-reservation-management',
  templateUrl: './room-reservation-management.component.html',
  styleUrls: ['./room-reservation-management.component.css']
})
export class ReservationManagementComponent implements OnInit {
  @ViewChild('rom', { static: false }) addRoomForm: NgForm;
  defaultValue: string = "choose";
  demoBtnCLicked: boolean = false;
  reservationDetails: Reservations;
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
  submitted = false;
  isLoading = false;
  private mode = "create";
  private Resrvationid: string;

  constructor(private router: Router,
    private reservationService: ReservationService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.demoBtnCLicked = false;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("Reservationid")) {
        this.mode = "edit";
        this.Resrvationid = paramMap.get("Reservationid");
        this.isLoading = true;
        this.reservationDetails = this.reservationService.getRservationByID(this.Resrvationid);
      } else {
        this.mode = "create";
        this.Resrvationid = null;
      }
    });
  }

  onSubmit(form: NgForm) {
    this.demoBtnCLicked = false;
    if (form.invalid) {
      return;
    }
    console.log(this.addRoomForm);
    this.submitted = true;
    this.reservations.cn = this.Resrvationid;
    this.reservations.cname = this.addRoomForm.value.cname;
    this.reservations.birthday = this.addRoomForm.value.birthday;
    this.reservations.gender = this.addRoomForm.value.gender;
    this.reservations.email = this.addRoomForm.value.email;
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

    console.log(this.addRoomForm);
    this.submitted = true;
    if (this.mode === "create") {

      this.reservationService.addReservation(this.reservations);
      this.router.navigate(['../roomView'], { relativeTo: this.route });

    } else {
      this.reservationService.updateReservation(this.reservations);
      this.router.navigate(['../../roomView'], { relativeTo: this.route });

    }
    this.addRoomForm.reset();

  }

  fillData() {
    this.reservations.cname = "Jayanga";
    this.reservations.birthday = "1996-08-18";
    this.reservations.gender = "Male";
    this.reservations.email = "jjj@gmail.com";
    this.reservations.phone = "041-2283-357";
    this.reservations.country = "Srilanka";
    this.reservations.state = "Western";
    this.reservations.city = "Colombo";
    this.reservations.street = "Hawlock";
    this.reservations.cchoise = "Deluxe rooms";
    this.reservations.pcode = "8080";
    this.reservations.edate = "2020-10-23";
    this.reservations.ddate = "2020-10-23";
    this.reservations.mnumber = "071-8411-150";
    this.demoBtnCLicked = true;

  }

}
