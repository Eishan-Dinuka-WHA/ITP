import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employees } from 'models/employee.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeService } from 'service/employee-management.service';

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
    this.employees = this.employeeService.getCustomer();
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
