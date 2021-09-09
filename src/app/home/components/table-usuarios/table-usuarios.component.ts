import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.css']
})
export class TableUsuariosComponent implements OnDestroy {

  @Input() usuarios: any[] = [];
  usuarioSeleccionado: any = {};

  usuarios$: Subscription = new Subscription();

  constructor(private _usuarios: UsuariosService, private _alertas: AlertasService) { }

  //Elimina las subscripciones
  ngOnDestroy(): void {
    this.usuarios$.unsubscribe();
  }

  //Se encarga de eliminar un usuario
  eliminarUsuario(id: string) {    
    if( id != '1') this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    const eliminar$ =  this._usuarios.eliminarUsuario(id).subscribe( (res: any) => this._alertas.mensajeSuccess(res.msg));
    this.usuarios$.add(eliminar$);
  }

  //Se encarga de acutalizar un usuario
  actualizarUsuario(usuario: any) {
    const actualizar$ =  this._usuarios.actualizarUsuario(usuario).subscribe( (res: any) => this._alertas.mensajeSuccess(res.msg));
    this.usuarios$.add(actualizar$);
  }

  //Se encarga de selecciona un usuario para mostrar en el modal
  seleccionarUsuario(usuario: any) {
    this.usuarioSeleccionado = usuario;
  }

}
