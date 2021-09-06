import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
 
//Componentes
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { DonaComponent } from './dona/dona.component';
import { TableUsuariosComponent } from './table-usuarios/table-usuarios.component';
import { ModalEditarComponent } from './modal-editar/modal-editar.component';
import { TableAreonavesComponent } from './table-areonaves/table-areonaves.component';
import { EditarAreonaveComponent } from './editar-areonave/editar-areonave.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MisAreonavesTableComponent } from './mis-areonaves-table/mis-areonaves-table.component';

//Pipes
import { PalabrasPipe } from '../pipes/palabras.pipe';

@NgModule({
    declarations: [
        NavbarComponent,
        IndicadoresComponent,
        DonaComponent,
        TableUsuariosComponent,
        ModalEditarComponent,
        TableAreonavesComponent,
        EditarAreonaveComponent,
        FooterComponent,
        MisAreonavesTableComponent,
        PalabrasPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ChartsModule],
    exports: [
        NavbarComponent,
        IndicadoresComponent,
        DonaComponent,
        TableUsuariosComponent,
        ModalEditarComponent,
        TableAreonavesComponent,
        EditarAreonaveComponent,
        FooterComponent,
        MisAreonavesTableComponent,
        PalabrasPipe
    ],
    providers: [],
})
export class ComponentsModule { }