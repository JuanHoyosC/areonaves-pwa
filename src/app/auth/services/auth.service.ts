import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //Envia los datos de usuarios al backend para ver si son correcto y tiene permiso de ingresar
  login(usuario: any) {
    return this.http.get('', usuario);
  }

  //Funciona que comprueba si el usuario está auntenticado
  autenticado() {

  }

  //Funcion para salir del sistema
  salir() {

  }

}
