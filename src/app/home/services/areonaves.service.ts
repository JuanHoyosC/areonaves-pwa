import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreonavesService {

  constructor(private http: HttpClient) { }

  obtenerAreonaves() {
    const token: string = localStorage.getItem('token') || '';
    let headers = new HttpHeaders({
      'x-token': token
    });

    return this.http.get(`${environment.baseUrl}/areonave/obtener`, { headers })
      .pipe(
        map((res: any) => res.areonaves)
      );
  }
}
