import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';


import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CustomerViewComponent } from './customer-registration/customer-view/customer-view.component';
import { CustomerNewComponent } from './customer-registration/customer-new/customer-new.component';
import { NavibarComponent } from './navibar/navibar.component';
import { HomeCardComponent } from './home-page/home-card/home-card.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { EmployeeViewComponent } from './employee-management/employee-view/employee-view.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { EmployeeHomePageComponent } from './employee-management/employee-home-page/employee-home-page.component';
import { EventHomeComponent } from './event-management/event-home/event-home.component';
import { EventViewComponent } from './event-management/event-view/event-view.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackHomeComponent } from './feedback-management/feedback-home/feedback-home.component';
import { FeedbackViewComponent } from './feedback-management/feedback-view/feedback-view.component';
import { FeedbackManagementComponent } from './feedback-management/feedback-management.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { PackageHomeComponent } from './package-home/package-home.component';
import { PackageNewComponent } from './package-home/package-new/package-new.component';
import { PackageViewComponent } from './package-home/package-view/package-view.component';
import { PaymentHomeComponent } from './payment-management/payment-home/payment-home.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { PaymentViewComponent } from './payment-management/payment-view/payment-view.component';
import { RoomReservationHomeComponent } from './room-reservation-management/room-reservation-home/room-reservation-home.component';
import { ReservationManagementComponent } from './room-reservation-management/room-reservation-management.component';
import { RoomReservationViewComponent } from './room-reservation-management/room-reservation-view/room-reservation-view.component';
import { SalaryReportHomeComponent } from './salary-report-management/salary-report-home/salary-report-home.component';
import { SalaryReportManagementComponent } from './salary-report-management/salary-report-management.component';
import { SalaryReportViewComponent } from './salary-report-management/salary-report-view/salary-report-view.component';
import { SpaManagementComponent } from './spa-management/spa-management.component';
import { SupplierHomeComponent } from './supplier-management/supplier-home/supplier-home.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';
import { SupplierViewComponent } from './supplier-management/supplier-view/supplier-view.component';
import { TakeawayHomeComponent } from './takeaway-management/takeaway-home/takeaway-home.component';
import { TakeawayManagementComponent } from './takeaway-management/takeaway-management.component';
import { TakeawayViewComponent } from './takeaway-management/takeaway-view/takeaway-view.component';
import { SpaHomeComponent } from './spa-management/spa-home/spa-home.component';
import { SpaViewComponent } from './spa-management/spa-view/spa-view.component';
import { InventoryHomeComponent } from './inventory-management/inventory-home/inventory-home.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { InventoryViewComponent } from './inventory-management/inventory-view/inventory-view.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceNewComponent } from './attendance/attendance-new/attendance-new.component';
import { AttendanceViewComponent } from './attendance/attendance-view/attendance-view.component';

const appRoutes: Routes =[
  { path: 'cusHome' , component:CustomerRegistrationComponent},
  { path: 'cusNew' , component:CustomerNewComponent} ,
  { path: 'edit/:Customerid' , component:CustomerNewComponent} ,

  { path: 'cusView' , component:CustomerViewComponent },

  { path: 'empHome' , component:EmployeeHomePageComponent},
  { path: 'editE/:EmployeeId' , component:EmployeeHomePageComponent},

  { path: 'empNew' , component:EmployeeManagementComponent},
  { path: 'empView' , component:EmployeeViewComponent},
  { path: 'eventHome' , component:EventHomeComponent},
  { path: 'eventNew' , component:EventManagementComponent },
  { path: 'eventView' , component:EventViewComponent},
  { path: 'feedbackHome' , component:FeedbackHomeComponent},
  { path: 'feedbackNew' , component:FeedbackManagementComponent},
  { path: 'feedbackView' , component:FeedbackViewComponent},
  { path: 'footer' , component:FooterComponent },
  { path: 'header' , component:HeaderComponent },
  { path: 'homepageNormal' , component:HomePageComponent},
  { path: 'homepageAdmin' , component:HomeCardComponent},
  { path: 'userlogin' , component:LoginComponent},
  { path: 'adminlogin' , component:AdminLoginComponent},
  { path: 'navibar' , component:NavibarComponent},
  { path: 'orderHome' , component:OrderManagementComponent},
  { path: 'packHome' , component:PackageHomeComponent},

  { path: 'packNew' , component:PackageNewComponent},
  { path: 'editp/:Packageid' , component:PackageNewComponent},

  { path: 'packView' , component:PackageViewComponent},
  { path: 'payHome' , component:PaymentHomeComponent},
  { path: 'PayNew' , component:PaymentManagementComponent},
  { path: 'PayView' , component:PaymentViewComponent},
  { path: 'roomHome' , component:RoomReservationHomeComponent},
  { path: 'roomNew' , component:ReservationManagementComponent},
  { path: 'editRoom/:Reservationid' , component:ReservationManagementComponent},
  { path: 'roomView' , component:RoomReservationViewComponent},

  { path: 'salaryHome' , component:SalaryReportHomeComponent},
  { path: 'editS/:Salaryid' , component:SalaryReportHomeComponent},

  { path: 'salaryNew' , component:SalaryReportManagementComponent},
  { path: 'salaryView' , component:SalaryReportViewComponent},
  { path: 'spaHome' , component:SpaHomeComponent},
  { path: 'spaNew' , component:SpaManagementComponent},
  { path: 'spaView' , component:SpaViewComponent},
  { path: 'supHome' , component:SupplierHomeComponent},
  { path: 'supNew' , component:SupplierManagementComponent},
  { path: 'supView' , component:SupplierViewComponent},
  { path: 'takeHome' , component:TakeawayHomeComponent},
  { path: 'takeNew' , component:TakeawayManagementComponent},
  { path: 'takeView' , component:TakeawayViewComponent},
  { path: 'intHome' , component:InventoryHomeComponent},
  { path: 'intNew' , component:InventoryManagementComponent},
  { path: 'intView' , component:InventoryViewComponent},
  { path: 'attennew' , component:AttendanceNewComponent},

  { path: 'editA/:Attendanceid' , component:AttendanceNewComponent},
  { path: 'attenview' , component:AttendanceViewComponent},
  { path: 'attedel' , component:AttendanceComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
