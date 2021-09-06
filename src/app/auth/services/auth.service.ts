import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  map } from 'rxjs/operators'
import { Router } from '@angular/router';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  //Envia los datos de usuarios al backend para ver si son correcto y tiene permiso de ingresar
  login(usuario: any) {
    return this.http.post(`${environment.baseUrl}/auth/login`, usuario)
      .pipe(
        map((res: any) => { this.guardarToken(res.token); return res; })
      )
  }

  //Envia los datos de usuario al backend para ser registrado
  registrarse(usuario: any) {
    return this.http.post(`${environment.baseUrl}/auth/registrarse`, usuario)
    .pipe(
      map((res: any) => { this.guardarToken(res.token); return res; })
    )
  }

  //Funcion que guarda el token en el localstorage
  guardarToken(token: string) {
    localStorage.setItem('token', token);

    //Verifica si el usuario logueado es piloto o administrador
    const usuario: any = jwt_decode(token);
    const url = usuario.uid.role === 'piloto' ? '/areonaves' : '/dashboard';
    this.route.navigateByUrl('/dashboard');
  }

}
