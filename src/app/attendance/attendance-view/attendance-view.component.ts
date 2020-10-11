
import { Attendances } from 'models/attendance.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AttendanceRegistrationService } from 'service/attendance-management.service';

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

