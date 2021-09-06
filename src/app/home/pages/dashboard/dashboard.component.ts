import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/services/alertas.service';
import { AreonavesService } from '../../services/areonaves.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarios: any[] = [];
  areonaves: any[] = [];

  //Se encarga de manejar los indicadores y las graficas
  cantidadUsuarios: number = 0;
  cantidadAdmin: number = 0;
  cantidadAreonaves: number = 0;
  cantidadAreonavesLibres: number = 0;

  //Indicadores que se mostrarán
  indicadores: any[] = [
    {
      titulo: 'Usuarios',
      icono: 'fas fa-users',
      clase: 'indicador-total'
    },
    {
      titulo: 'Administradores',
      icono: 'fas fa-user-shield',
      clase: 'indicador-libre'
    },
    {
      titulo: 'Areonaves',
      icono: 'fas fa-plane',
      clase: 'indicador-total'
    },

    {
      titulo: 'Areonaves libre',
      icono: 'fas fa-plane-departure',
      clase: 'indicador-libre'
    }
  ]


  constructor(private _usuarios: UsuariosService, private _areonaves: AreonavesService, private _alertas: AlertasService) { }
  ngOnInit(): void {

    //Obtiene todos los usuarios que se encuentra en la db
    this._usuarios.obtenerUsuarios().subscribe(usuarios => {

      this.usuarios = usuarios;

      //Cantidad de usuarios
      this.indicadores[0].cantidad = usuarios.length;
      this.cantidadUsuarios =  usuarios.length;

      //Cantidad de adminstradores
      this.indicadores[1].cantidad = usuarios.filter((usuario: any) => usuario.role === 'admin').length;
      this.cantidadAdmin = this.indicadores[1].cantidad;
    });

    //Obtiene todas las areonaves que se encuentra en la db
    this._areonaves.obtenerAreonaves().subscribe( areonaves => {
      this.areonaves = areonaves;

      //Cantidad total de areonaves
      this.indicadores[2].cantidad = areonaves.length;
      this.cantidadAreonaves = areonaves.length;

      //Cuantas areonaves libres hay
      this.indicadores[3].cantidad = areonaves.filter((areonave: any) => !areonave.reservado).length;
      this.cantidadAreonavesLibres = this.indicadores[3].cantidad;
    })

  }


  //Se encarga de crear una areonave por defecto
  crearAreonave() {
    this._areonaves.crearAreonave().subscribe((res: any) => {
      //Añade la areonave creada al array de areonaves
      this.areonaves.push(res.areonave);
      this._alertas.mensajeSuccess(res.msg);
    } )
  }

}
