import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/home/services/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _usuario: UsuariosService) { }

  ngOnInit(): void {
  }

}
