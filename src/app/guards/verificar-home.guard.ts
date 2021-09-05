import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VerificarAuthService } from '../services/verificar-auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerificarHomeGuard implements CanActivate {
  constructor(private _verificar: VerificarAuthService, private route: Router) {}

  canActivate():  boolean {
    if(!this._verificar.auntenticar()) this.route.navigateByUrl('/auth/login');
    return true;
  }
  
}
