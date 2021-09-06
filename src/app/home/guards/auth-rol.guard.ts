import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRolGuard implements CanActivate {

  constructor(private _usuarios: UsuariosService, private route: Router) {}
  canActivate(): boolean{

    if(!this._usuarios.validarRol()) {
      this.route.navigateByUrl('/areonaves');
      return false;
    }
    return true;
  }
  
}
