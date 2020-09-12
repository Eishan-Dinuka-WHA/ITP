import { Component, OnInit, OnDestroy } from '@angular/core';
import { Salarys } from 'models/salary.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SalaryService } from 'service/salary-management.service';

@Component({
  selector: 'app-salary-report-view',
  templateUrl: './salary-report-view.component.html',
  styleUrls: ['./salary-report-view.component.css']
})
export class SalaryReportViewComponent implements OnInit,OnDestroy {
  salarys: Salarys[] = [];
  private subscription: Subscription;
  isLoading = false;

  constructor(private router: Router, private salaryService: SalaryService) { }

  ngOnInit(){
    this.isLoading = true;
    this.salarys = this.salaryService.getSalary();
    this.subscription = this.salaryService.salaryChanged.subscribe(
      (salarys: Salarys[]) => {
        this.salarys = salarys;
        this.isLoading = false;
      }
    );
    console.log(this.salarys);
  }

  onDelete(sid: string){
    this.salaryService.deleteSalay(sid);
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
