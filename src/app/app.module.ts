import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import{ MatInputModule } from '@angular/material/input';
//import{ MatToolbar } from '@angular/material/toolbar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router'



import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PackageManagementComponent } from './package-management/package-management.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { FeedbackManagementComponent } from './feedback-management/feedback-management.component';
import { SpaManagementComponent } from './spa-management/spa-management.component';
import { RoomReservationManagementComponent } from './room-reservation-management/room-reservation-management.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { SalaryReportManagementComponent } from './salary-report-management/salary-report-management.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { TakeawayManagementComponent } from './takeaway-management/takeaway-management.component';
import { FooterComponent } from './footer/footer.component';
import { LandingHomePageComponent } from './landing-home-page/landing-home-page.component';
import { PackageHomeComponent } from './package-home/package-home.component';
import { NavibarComponent } from './navibar/navibar.component';
import { CustomerViewComponent } from './customer-registration/customer-view/customer-view.component';
import { CustomerRegistrationService } from 'service/customer-registration.service';
import { HomeCardComponent } from './home-page/home-card/home-card.component';
import { CustomerNewComponent } from './customer-registration/customer-new/customer-new.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    LoginComponent,
    PackageManagementComponent,
    EventManagementComponent,
    PaymentManagementComponent,
    FeedbackManagementComponent,
    SpaManagementComponent,
    RoomReservationManagementComponent,
    EmployeeManagementComponent,
    SalaryReportManagementComponent,
    SupplierManagementComponent,
    OrderManagementComponent,
    TakeawayManagementComponent,
    FooterComponent,
    LandingHomePageComponent,
    PackageHomeComponent,
    NavibarComponent,
    CustomerViewComponent,
    HomeCardComponent,
    CustomerNewComponent,
    CustomerRegistrationComponent,

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

    //NoopAnimationsModule
  ],
  providers: [CustomerRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
