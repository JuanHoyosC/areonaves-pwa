import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificarAuthService {

  constructor(private http: HttpClient) { }

  auntenticar() {
    return localStorage.getItem('token') ? true : false;
  }
}
