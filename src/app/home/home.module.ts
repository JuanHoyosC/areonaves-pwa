import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { HomeRoutingModule } from './home-routing.module';


//Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
