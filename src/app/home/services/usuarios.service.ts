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

  usuario:any = {};

  constructor(private http: HttpClient, private route: Router) {
    this.decodificarToken();

   }

  private decodificarToken(){
    const token = localStorage.getItem('token') || '';
    const usuario: any = jwt_decode(token);
    this.usuario = usuario?.uid;
    console.log(this.usuario)
  }

  obtenerUsuarios() {
    const token: string = localStorage.getItem('token') || '';
    let headers = new HttpHeaders({
      'x-token': token
    });

    return this.http.get(`${environment.baseUrl}/usuario/obtener`, { headers })
      .pipe(
        map((res: any) => res.usuarios),
        filter((res: any) => res.correo !== 'admin@gmail.com')
      );
  }


  eliminarUsuario(id: string) {
    const token: string = localStorage.getItem('token') || '';
    let headers = new HttpHeaders({
      'x-token': token
    });

    return this.http.delete(`${environment.baseUrl}/usuario/borrar/${id}`, { headers })
  }

  actualizarUsuario(usuario: any) {
    const token: string = localStorage.getItem('token') || '';
    console.log(token)
    let headers = new HttpHeaders({
      'x-token': token
    });

    return this.http.put(`${environment.baseUrl}/usuario/actualizar/${usuario.id}`, usuario, { headers })
  }


  salir() {
    this.usuario = {};
    localStorage.removeItem('token');
    this.route.navigateByUrl('auth/login');
  }

  validarRol() {
    return this.usuario.role === 'piloto' ? false : true;
  }
}
