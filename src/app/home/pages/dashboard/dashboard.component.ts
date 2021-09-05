import { Component, OnInit } from '@angular/core';
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
    },
    {
      titulo: 'Administradores',
      icono: 'fas fa-user-shield',
    },
    {
      titulo: 'Areonaves',
      icono: 'fas fa-plane',
    },

    {
      titulo: 'Areonaves libre',
      icono: 'fas fa-plane-departure',
    }
  ]


  constructor(private _usuarios: UsuariosService, private _areonaves: AreonavesService) { }
  ngOnInit(): void {

    //Obtiene todos los usuarios que se encuentra en la db
    this._usuarios.obtenerUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
      this.cantidadUsuarios = usuarios.length;
      this.cantidadAdmin = usuarios.filter((usuario: any) => usuario.role === 'admin').length;
    });

    //Obtiene todas las areonaves que se encuentra en la db
    this._areonaves.obtenerAreonaves().subscribe( areonaves => {
      this.areonaves = areonaves;
      this.cantidadAreonaves = areonaves.length;
      this.cantidadAreonavesLibres = areonaves.filter((areonave: any) => !areonave.reservado).length;
    })

  }

}
