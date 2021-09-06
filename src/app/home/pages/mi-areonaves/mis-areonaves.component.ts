import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-mis-areonaves',
  templateUrl: './mis-areonaves.component.html',
  styleUrls: ['./mis-areonaves.component.css']
})
export class MisAreonavesComponent implements OnInit {

  constructor(public _usuarios: UsuariosService) { }

  ngOnInit(): void {
    console.log(this._usuarios.usuario, 'fghj')
  }

}
