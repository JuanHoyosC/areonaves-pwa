import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertasService } from 'src/app/services/alertas.service';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _alertas: AlertasService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('paso por aqui')
    const token: string = localStorage.getItem('token') || '';

    let headers = new HttpHeaders({
      'x-token': token
    });

    const reqClone = req.clone({ headers });

    return next.handle(reqClone).pipe(  catchError( err => this.mensajeDeError(err))  )
  }


  //Toma todos los errores en las peticiones y los muestra en una alerta
  mensajeDeError(error: HttpErrorResponse) {
    this._alertas.mensajeError(error.error.msg);
    return throwError(error.error.msg);
  }


}
