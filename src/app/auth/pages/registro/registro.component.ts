import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnDestroy {

  public registroObs$: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private _auth: AuthService) { 
  }

  ngOnDestroy(): void {
    this.registroObs$.unsubscribe();
  }

  registroForm = this.formBuilder.group({
    correo: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    usuario: ['', [Validators.required]],
  });


  //Obtiene si el correo fue clikeado y además si aún no es valido
  get validarCorreo() {
    return this.registroForm.get('correo')?.touched && this.registroForm.get('correo')?.invalid;
  }

  //Obtiene si el usuario fue clikeado y además si aún no es valido
  get validarUsuario() {
    return this.registroForm.get('usuario')?.touched && this.registroForm.get('usuario')?.invalid;
  }

  //Obtiene si el password fue clikeado y además si aún no es valido
  get validarPassword() {
    return this.registroForm.get('password')?.touched && this.registroForm.get('password')?.invalid;
  }


  //Se encarga de enviar la información al back midiante el authServices
  registrarse() {
    if (this.registroForm.invalid) return;

    this.registroObs$ = this._auth.registrarse(this.registroForm.value).subscribe();
  }

}
