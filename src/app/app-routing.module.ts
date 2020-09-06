import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';


import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CustomerViewComponent } from './customer-registration/customer-view/customer-view.component';
import { CustomerNewComponent } from './customer-registration/customer-new/customer-new.component';
import { NavibarComponent } from './navibar/navibar.component';
import { HomeCardComponent } from './home-page/home-card/home-card.component';

const appRoutes: Routes =[
  { path: '' , component: HomePageComponent },
  { path: 'cus-new' , component:CustomerNewComponent} ,
  { path: 'header' , component:HeaderComponent },
  { path: 'navibar' , component:NavibarComponent },
  { path: 'homecard' , component:HomeCardComponent },
  { path: 'navibar' , component:NavibarComponent },
  { path: 'navibar' , component:NavibarComponent },
  { path: 'navibar' , component:NavibarComponent },
  { path: 'navibar' , component:NavibarComponent },
  { path: 'navibar' , component:NavibarComponent },
  { path: 'navibar' , component:NavibarComponent },
  { path: 'navibar' , component:NavibarComponent },
  { path: 'navibar' , component:NavibarComponent },
  { path: 'navibar' , component:NavibarComponent },
  { path: 'cus-view' , component:CustomerViewComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
