import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VerificarAuthService } from '../services/verificar-auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerificarAuthGuard implements CanActivate, CanLoad {

  constructor(private _verificar: VerificarAuthService, private route: Router) {}
  
  canLoad(): boolean  {
    if(this._verificar.auntenticar()) this.route.navigateByUrl('/');
    return true;
  }
  canActivate():  boolean {

    if(this._verificar.auntenticar()) this.route.navigateByUrl('/');
    return true;
  }
  
}
