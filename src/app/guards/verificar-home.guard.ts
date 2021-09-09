import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VerificarAuthService } from '../services/verificar-auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerificarHomeGuard implements CanActivate, CanLoad {
  constructor(private _verificar: VerificarAuthService, private route: Router) {}

  canLoad(): boolean {
    if(!this._verificar.auntenticar()) this.route.navigateByUrl('/auth/login');
    return true;
  }

  canActivate():  boolean {
    if(!this._verificar.auntenticar()) this.route.navigateByUrl('/auth/login');
    return true;
  }
  
}
