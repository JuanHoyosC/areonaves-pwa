import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AlertasService } from 'src/app/services/alertas.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {


  public loginObs$: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private _auth: AuthService, private _alertas: AlertasService) { 
  }

  ngOnDestroy(): void {
    this.loginObs$.unsubscribe();
  }

  loginForm = this.formBuilder.group({
    correo: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });


  //Obtiene si el correo fue clikeado y además si aún no es valido
  get validarCorreo() {
    return this.loginForm.get('correo')?.touched && this.loginForm.get('correo')?.invalid;
  }

  //Obtiene si el password fue clikeado y además si aún no es valido
  get validarPassword() {
    return this.loginForm.get('password')?.touched && this.loginForm.get('password')?.invalid;
  }


  //Se encarga de enviar la información al back midiante el authServices
  ingresar() {
    if (this.loginForm.invalid) return;
    this.loginObs$ = this._auth.login(this.loginForm.value).subscribe();
  }

}
