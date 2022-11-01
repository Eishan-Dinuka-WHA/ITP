
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Reservations } from 'models/room.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ReservationService } from 'service/room-reservation.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-room-resevation-view',
  templateUrl: './room-reservation-view.component.html',
  styleUrls: ['./room-reservation-view.component.css']
})
export class RoomReservationViewComponent implements OnInit, OnDestroy{
  reservations: Reservations[] = [];
  private subscription: Subscription;
  isLoading = false;

  constructor(private router: Router, private ReservationsService: ReservationService) { }

  ngOnInit(){
    this.isLoading = true;
    this.reservations = this.ReservationsService.getReservation();
    this.subscription = this.ReservationsService.reservationChanged.subscribe(
      (reservations: Reservations[]) => {
        this.reservations = reservations;
        this.isLoading = false;
      }
    );
    console.log(this.reservations);
  }

  onDelete(cid: string){
    this.ReservationsService.deleteReservation(cid);
    window.location.reload();
  }

  downloadPDF(){
    var element = document.getElementById('tableres');

    html2canvas(element).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var doc = new jspdf.jsPDF;
      var imgHeight = canvas.height * 210 / canvas.width;
      doc.text('Reservation Registry Report', 15, 15);
      doc.addImage(imgData, 0, 20, 210, imgHeight);
      doc.save("report.pdf");
    })

  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}

