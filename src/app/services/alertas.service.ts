import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private toastr: ToastrService) { }

  //Mensaje de exito
  mensajeSuccess(mensaje: string) {
    this.toastr.success(mensaje, 'Correcto');
  }


  mensajeError(mensaje: string) {
    this.toastr.error(mensaje, 'Error');
  }


  mensajeWarning(mensaje: string) {
    this.toastr.warning(mensaje, 'Warning');
  }
}
