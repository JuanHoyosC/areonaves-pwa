import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Modulos
import { HomeRoutingModule } from './home-routing.module';
import { ChartsModule } from 'ng2-charts';


//Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { AreonavesComponent } from './pages/areonaves/areonaves.component';


//Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { DonaComponent } from './components/dona/dona.component';
import { TableUsuariosComponent } from './components/table-usuarios/table-usuarios.component';
import { ModalEditarComponent } from './components/modal-editar/modal-editar.component';
import { TableAreonavesComponent } from './components/table-areonaves/table-areonaves.component';
import { CrearAreonaveComponent } from './components/crear-areonave/crear-areonave.component';
import { FooterComponent } from './components/shared/footer/footer.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    AreonavesComponent,
    IndicadoresComponent,
    DonaComponent,
    TableUsuariosComponent,
    ModalEditarComponent,
    TableAreonavesComponent,
    CrearAreonaveComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ChartsModule
  ]
})
export class HomeModule { }
