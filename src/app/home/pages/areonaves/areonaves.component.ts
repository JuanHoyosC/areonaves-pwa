import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { AreonavesService } from '../../services/areonaves.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-areonaves',
  templateUrl: './areonaves.component.html',
  styleUrls: ['./areonaves.component.css']
})
export class AreonavesComponent {

  //Se encargan de guardar las areonas, areonaves disponibles y las areonaves alquiladas por el usuario
  areonaves: any[] = [];
  areonavesLibres: any[] = [];
  MisAreonaves: any[] = [];
  
  //Inicializa los arreglos
  constructor(private _areonaves: AreonavesService, private _usuarios: UsuariosService, private formBuilder: FormBuilder, private _alertas: AlertasService) {
    this._usuarios.decodificarToken();
    this.obtenerAreonavesLibres();
    this.obtenerMisAreonaves();
  }

  //Obtiene las areonaves y filtra solo las que se encuentran disponibles
  obtenerAreonavesLibres() {
    this._areonaves.obtenerAreonaves().subscribe(areonaves => {
      this.areonaves = areonaves;
      this.areonavesLibres = areonaves.filter((areonave: any) => !areonave.reservado);
    })
  }

  //Obtiene las areonaves que le pertenece al usuario
  obtenerMisAreonaves() {
    this._areonaves.obtenerAreonavesId().subscribe(areonaves => {
      this.MisAreonaves = areonaves;
    })
  }

  //Formularop
  areonaveForm = this.formBuilder.group({
    ubicacion: ['', [Validators.required]],
    salida: ['', [Validators.required]],
    llegada: ['', [Validators.required]],
    pasajeros: [10, [Validators.required]],
    areonaveId: ['', [Validators.required]]
  },
  {
      validators: [this.validarFecha, this.validarPasajeros]
  });


  //Retorna si se econtro el error de la fecha de salida mayor que la de llegada
  errorFecha() {
    return this.areonaveForm?.hasError('errorFecha') && this.areonaveForm.get('salida')?.dirty && this.areonaveForm.get('llegada')?.dirty
  }

  //Verifica si el campo ha sido tocado, pero no tiene información
  errorCampo(campo: string) {
    return this.areonaveForm.get(campo)?.invalid && this.areonaveForm.get(campo)?.touched
  }

  //Verifica si hay menos de 10 pasajeros
  errorPasajeros() {
    return this.areonaveForm.hasError('errorPasajeros') && this.areonaveForm.get('pasajeros')?.touched
  }

  //Validación personalizada que verifica que la fecha de llegada sea mayor que la de salida
  validarFecha(control: FormGroup): ValidationErrors | null {
    return control.get('salida')?.value <= control.get('llegada')?.value ? null : { errorFecha: 'La fecha de salida debe ser menos a la de llegada' }
  }

  //Validación personalizada que comprueba que haya 10 o más pasajeros
  validarPasajeros(control: FormGroup): ValidationErrors | null {
    return control.get('pasajeros')?.value >= 10 ? null : { errorPasajeros: 'Debe haber minimo 10 pasajeros' }
  }

  //Se encarga de llamar al servicio y alquilar una areonave
  alquilar() {

    if (this.areonaveForm.invalid) return;

    this._areonaves.alquilarAreonave(this.areonaveForm.value).subscribe((res: any) => {
      //Agrega las aroenave a mis areonaves y se encarga de actualizar las areonaves disponibles
      this.MisAreonaves.push(res.areonave);
      this.areonavesLibres = this.areonavesLibres.filter((areonave: any) => areonave.id != this.areonaveForm.value.areonaveId );
      
      //Reinicia el formulario y muestra mensaje de exito
      this.areonaveForm.reset({areonaveId: ''});
      this._alertas.mensajeSuccess(res.msg);
    });
  }

  //Funcion que se encarga de actualizar las areonaves disponibles cuando se libero una areonave
  actualizarAreonavesLibres( id: string){
    this.areonaves = this.areonaves.map(areonave => areonave.id === id ? ({...areonave, reservado: false}) : areonave);
    this.areonavesLibres = this.areonaves.filter((areonave: any) => !areonave.reservado );
  }

}
