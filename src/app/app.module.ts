import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import{ MatInputModule } from '@angular/material/input';
import{ MatToolbar } from '@angular/material/toolbar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router'



import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { FeedbackManagementComponent } from './feedback-management/feedback-management.component';
import { SpaManagementComponent } from './spa-management/spa-management.component';
import { ReservationManagementComponent } from './room-reservation-management/room-reservation-management.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { SalaryReportManagementComponent } from './salary-report-management/salary-report-management.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { TakeawayManagementComponent } from './takeaway-management/takeaway-management.component';
import { FooterComponent } from './footer/footer.component';
import { PackageHomeComponent } from './package-home/package-home.component';
import { NavibarComponent } from './navibar/navibar.component';
import { CustomerViewComponent } from './customer-registration/customer-view/customer-view.component';
import { CustomerRegistrationService } from 'service/customer-registration.service';
import { HomeCardComponent } from './home-page/home-card/home-card.component';
import { CustomerNewComponent } from './customer-registration/customer-new/customer-new.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { EmployeeHomePageComponent } from './employee-management/employee-home-page/employee-home-page.component';
import { EmployeeViewComponent } from './employee-management/employee-view/employee-view.component';
import { EventHomeComponent } from './event-management/event-home/event-home.component';
import { EventViewComponent } from './event-management/event-view/event-view.component';
import { FeedbackViewComponent } from './feedback-management/feedback-view/feedback-view.component';
import { FeedbackHomeComponent } from './feedback-management/feedback-home/feedback-home.component';
import { PackageViewComponent } from './package-home/package-view/package-view.component';
import { PackageNewComponent } from './package-home/package-new/package-new.component';
import { PaymentViewComponent } from './payment-management/payment-view/payment-view.component';
import { PaymentHomeComponent } from './payment-management/payment-home/payment-home.component';
import { RoomReservationViewComponent } from './room-reservation-management/room-reservation-view/room-reservation-view.component';
import { RoomReservationHomeComponent } from './room-reservation-management/room-reservation-home/room-reservation-home.component';
import { SalaryReportViewComponent } from './salary-report-management/salary-report-view/salary-report-view.component';
import { SalaryReportHomeComponent } from './salary-report-management/salary-report-home/salary-report-home.component';
import { SupplierViewComponent } from './supplier-management/supplier-view/supplier-view.component';
import { SupplierHomeComponent } from './supplier-management/supplier-home/supplier-home.component';
import { TakeawayViewComponent } from './takeaway-management/takeaway-view/takeaway-view.component';
import { TakeawayHomeComponent } from './takeaway-management/takeaway-home/takeaway-home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { SpaHomeComponent } from './spa-management/spa-home/spa-home.component';
import { SpaViewComponent } from './spa-management/spa-view/spa-view.component';
import { EmployeeService } from 'service/employee-management.service';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { InventoryHomeComponent } from './inventory-management/inventory-home/inventory-home.component';
import { InventoryViewComponent } from './inventory-management/inventory-view/inventory-view.component';
import { PackageService } from 'service/package-management.service';
import { SalaryService } from 'service/salary-management.service';
import { ReservationService } from 'service/room-reservation.service';
import { InventoryService } from 'service/inventory.service';
import { SupplierRegistrationService } from 'service/supplier-registration.service';
import {MatIconModule} from '@angular/material/icon';
import { TakeawayManagementService } from 'service/takeaway-management.service';
import { SpaManagementService } from 'service/spa-management.service';
import { CustomerReserveService }from 'service/customer-reserve.service';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceViewComponent } from './attendance/attendance-view/attendance-view.component';
import { AttendanceNewComponent } from './attendance/attendance-new/attendance-new.component';
import { AttendanceRegistrationService } from 'service/attendance-management.service';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    LoginComponent,
    EventManagementComponent,
    PaymentManagementComponent,
    FeedbackManagementComponent,
    SpaManagementComponent,
    ReservationManagementComponent,
    EmployeeManagementComponent,
    SalaryReportManagementComponent,
    SupplierManagementComponent,
    OrderManagementComponent,
    TakeawayManagementComponent,
    FooterComponent,
    PackageHomeComponent,
    NavibarComponent,
    CustomerViewComponent,
    HomeCardComponent,
    CustomerNewComponent,
    CustomerRegistrationComponent,
    EmployeeHomePageComponent,
    EmployeeViewComponent,
    EventHomeComponent,
    EventViewComponent,
    FeedbackViewComponent,
    FeedbackHomeComponent,
    PackageViewComponent,
    PackageNewComponent,
    PaymentViewComponent,
    PaymentHomeComponent,
    RoomReservationViewComponent,
    RoomReservationHomeComponent,
    SalaryReportViewComponent,
    SalaryReportHomeComponent,
    SupplierViewComponent,
    SupplierHomeComponent,
    TakeawayViewComponent,
    TakeawayHomeComponent,
    AdminLoginComponent,
    SpaHomeComponent,
    SpaViewComponent,
    InventoryManagementComponent,
    InventoryHomeComponent,
    InventoryViewComponent,
    AttendanceComponent,
    AttendanceViewComponent,
    AttendanceNewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,

    //NoopAnimationsModule
  ],
  providers: [CustomerRegistrationService, EmployeeService , PackageService , SalaryService , ReservationService ,InventoryService , SupplierRegistrationService , TakeawayManagementService , SpaManagementService , CustomerReserveService, AttendanceRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
