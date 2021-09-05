import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent implements OnInit {

  @Input() usuario: any = {};
  @Output() actualizar: EventEmitter<any> = new EventEmitter();
  constructor(private _usuarios: UsuariosService) { }

  ngOnInit(): void {
  }


  actualizarUsuario() {
    this.actualizar.emit(this.usuario);
  }

}
