import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { VerificarAuthService } from '../services/verificar-auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerificarAuthGuard implements CanActivate {

  constructor(private _verificar: VerificarAuthService, private route: Router) {}
  canActivate():  boolean {

    if(this._verificar.auntenticar()) this.route.navigateByUrl('/');
    return true;
  }
  
}
