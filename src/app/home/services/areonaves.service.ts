import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AlertasService } from 'src/app/services/alertas.service';
import { environment } from 'src/environments/environment';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AreonavesService {

  constructor(private http: HttpClient, private _usuarios: UsuariosService, private _alertas: AlertasService) { }


  //Obtiene todas las areonaves registradas
  obtenerAreonaves() {
    return this.http.get(`${environment.baseUrl}/areonave/obtener`)
      .pipe(
        map((res: any) => res.areonaves)
      );
  }


  //Obtiene las areonaves que ha sido alquilada por el usuario activo
  obtenerAreonavesId() {
    console.log(this._usuarios.usuario, 'adasdas')
    return this.http.get(`${environment.baseUrl}/areonave/obtener/${this._usuarios.usuario.id}`)
      .pipe(
        map((res: any) => res.areonaves)
      );
  }

  crearAreonave() {
    return this.http.post(`${environment.baseUrl}/areonave/crear`, {});
  }

  actualizarAreonave(id: string, areonave: any) {
    return this.http.put(`${environment.baseUrl}/areonave/actualizar/${id}`, areonave);
  }


  //Se encarga de enviar al backend la solicitud de alquiler
  alquilarAreonave(areonave: any) {
    return this.http.put(`${environment.baseUrl}/areonave/alquilar/${this._usuarios.usuario.id}`, areonave);
  }


  //Se encarga de mandar al backend la solicitud de devolución
  devolverAreonave(idAreonave: string) {
    return this.http.put(`${environment.baseUrl}/areonave/devolver/${this._usuarios.usuario.id}`, { idAreonave });
  }

  eliminarAreonave(id: string) {
    return this.http.delete(`${environment.baseUrl}/areonave/borrar/${id}`)
  }
}
