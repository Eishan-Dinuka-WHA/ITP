import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employees } from 'models/employee.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeService } from 'service/employee-management.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit , OnDestroy {
  employees: Employees[] = [];
  private subscription: Subscription;
  isLoading = false;

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(){
    this.isLoading = true;
    this.employees = this.employeeService.getEmployee();
    this.subscription = this.employeeService.employeeChanged.subscribe(
      (employees: Employees[]) => {
        this.employees = employees;
        this.isLoading = false;
      }
    );
    console.log(this.employees);
  }

  onDelete(eid: string){
    this.employeeService.deleteEmployee(eid);
    window.location.reload();
  }


  downloadPDF(){
    var element = document.getElementById('tablee');

    html2canvas(element).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var doc = new jspdf.jsPDF;
      var imgHeight = canvas.height * 210 / canvas.width;
      doc.text('Employee Registry Report', 15, 15);
      doc.addImage(imgData, 0, 20, 210, imgHeight);
      doc.save("report.pdf");
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
