import { Component} from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder) { }

  loginForm= this.formBuilder.group({
   email: ['', [Validators.email, Validators.required]],
   password:['', [Validators.required, Validators.minLength(5)]]
  });


  get validarEmail() {
    return this.loginForm.get('email')?.touched && this.loginForm.get('email')?.invalid;
  }

  get validarPassword() {
    return this.loginForm.get('password')?.touched && this.loginForm.get('password')?.invalid;
  }


  ingresar() {
    if(this.loginForm.invalid) return ;
    console.log(this.loginForm.value)
  }

}
