import { Component, OnInit, Input } from '@angular/core';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.css']
})
export class TableUsuariosComponent implements OnInit {

  @Input() usuarios: any[] = [];
  usuarioSeleccionado: any = {};

  constructor(private _usuarios: UsuariosService, private _alertas: AlertasService) { }

  ngOnInit(): void {
    this._usuarios.obtenerUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }


  //Se encarga de eliminar un usuario
  eliminarUsuario(id: string) {
    
    if( id != '1') this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    this._usuarios.eliminarUsuario(id).subscribe( (res: any) => this._alertas.mensajeSuccess(res.msg));
  }

  //Se encarga de acutalizar un usuario
  actualizarUsuario(usuario: any) {
    this._usuarios.actualizarUsuario(usuario).subscribe( (res: any) => this._alertas.mensajeSuccess(res.msg));
  }

  //Se encarga de selecciona un usuario para mostrar en el modal
  seleccionarUsuario(usuario: any) {
    this.usuarioSeleccionado = usuario;
  }

}
