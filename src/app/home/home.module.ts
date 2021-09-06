import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Modulos
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from './components/components.module';


//Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { AreonavesComponent } from './pages/areonaves/areonaves.component';


//DarkMode




@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    AreonavesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    ComponentsModule
  ],
  providers: []
})
export class HomeModule { }
