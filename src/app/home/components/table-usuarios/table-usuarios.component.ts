import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.css']
})
export class TableUsuariosComponent implements OnInit {

  @Input() usuarios: any[] = [];
  usuarioSeleccionado: any = {};

  constructor(private _usuarios: UsuariosService) { }

  ngOnInit(): void {

    this._usuarios.obtenerUsuarios().subscribe(usuarios => this.usuarios = usuarios);

  }


  eliminarUsuario(id: string) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    this._usuarios.eliminarUsuario(id).subscribe( res => console.log(res));
  }

  actualizarUsuario(usuario: any) {
    this._usuarios.actualizarUsuario(usuario).subscribe( res => console.log(res), error => console.log);
  }

  seleccionarUsuario(usuario: any) {
    this.usuarioSeleccionado = usuario;
  }

}
