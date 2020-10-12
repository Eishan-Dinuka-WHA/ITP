
import { Attendances } from 'models/attendance.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AttendanceRegistrationService } from 'service/attendance-management.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-attendance-view',
  templateUrl: './attendance-view.component.html',
  styleUrls: ['./attendance-view.component.css']
})
export class AttendanceViewComponent implements OnInit, OnDestroy {
  attendances: Attendances[] = [];
  private subscription: Subscription;
  isLoading = false;

  constructor(private router: Router, private attendanceRegistrationService: AttendanceRegistrationService) { }


  ngOnInit(){
    this.isLoading = true;
    this.attendances = this.attendanceRegistrationService.getAttendance();
    this.subscription = this.attendanceRegistrationService.attendanceChanged.subscribe(
      (attendances: Attendances[]) => {
        this.attendances = attendances;
        this.isLoading = false;
      }
    );
    console.log(this.attendances);
  }

  onDelete(aid: string){
    this.attendanceRegistrationService.deleteAttendance(aid);
    window.location.reload();
  }

  downloadPDF(){
    var element = document.getElementById('table1');

    html2canvas(element).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var doc = new jspdf.jsPDF;
      var imgHeight = canvas.height * 210 / canvas.width;
      doc.text('Attendance Registry Report', 15, 15);
      doc.addImage(imgData, 0, 20, 210, imgHeight);
      doc.save("report.pdf");
    })

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

