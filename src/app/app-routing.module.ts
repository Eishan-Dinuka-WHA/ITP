import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';


import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CustomerViewComponent } from './customer-registration/customer-view/customer-view.component';
import { CustomerNewComponent } from './customer-registration/customer-new/customer-new.component';
import { NavibarComponent } from './navibar/navibar.component';

const appRoutes: Routes =[
  { path: '' , component: HomePageComponent },
  { path: 'users' , component: CustomerNewComponent } ,
  { path: 'header' , component:HeaderComponent },
  { path: 'navibar' , component:NavibarComponent },
  { path: 'cus-view' , component:CustomerViewComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
