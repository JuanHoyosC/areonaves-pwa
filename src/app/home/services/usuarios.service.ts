import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map, filter } from 'rxjs/operators';


import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuario: any = {};

  constructor(private http: HttpClient, private route: Router) {
    this.decodificarToken();

  }


  //Decodifica el token para obtener el usuario enviado por el backend
  decodificarToken() {
    try {
      //Obtiene el token del localstorage y lo decodifica
      const token = localStorage.getItem('token') || '';
      const usuario: any = jwt_decode(token);

      //Añade el usuario a un objeto
      this.usuario = usuario?.uid;
    } catch (error) {

      //Si hubo un error en la decodificacion se envia al login
      localStorage.removeItem('token');
      this.route.navigateByUrl('/auth/login');
    }
  }


  //Obtiene todos los usuarios en la base de datos
  obtenerUsuarios() {
    return this.http.get(`${environment.baseUrl}/usuario/obtener`)
      .pipe(
        map((res: any) => res.usuarios),
        filter((res: any) => res.filter((usuario: any) => usuario.correo !== 'admin@gmail.com'))
      );
  }


  //Manda al id al backend del usuario a eliminar 
  eliminarUsuario(id: string) {
    return this.http.delete(`${environment.baseUrl}/usuario/borrar/${id}`)
  }

  //envia la información del usuario a actualizar
  actualizarUsuario(usuario: any) {
    return this.http.put(`${environment.baseUrl}/usuario/actualizar/${usuario.id}`, usuario)
  }


  //Se encarga de limpiar los datos del usuario y eliminar el token
  salir() {
    this.usuario = {};
    localStorage.removeItem('token');
    this.route.navigateByUrl('auth/login');
  }

  //Valida si el usuario es admin o piloto
  validarRol() {
    return this.usuario.role === 'admin' ? true : false;
  }
}
