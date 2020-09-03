import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, Validators} from '@angular/forms';
import { LoginserviceService } from '../../services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  mensaje: string;
  Auth: boolean;
  

  constructor(private loginUsuario: LoginserviceService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login = this.fb.group({
    usuario: ['', Validators.required],
    contrasenia: ['', Validators.required]
  });

  get usuario(){ return this.login.get('usuario'); }
  get contrasenia(){ return this.login.get('contrasenia'); }

  verificar ( values ){

    if ( (values.usuario === null ||  values.usuario === undefined || values.usuario === '') ||
    (values.contrasenia === null ||  values.contrasenia === undefined || values.contrasenia === '') ){
      this.mensaje = 'Por favor ingrese las credenciales';
      return;
    }

    let resp = this.loginUsuario.login(values);
    resp.subscribe(data => {
      console.log(JSON.stringify(data));
      localStorage.setItem('usuario', JSON.stringify(data));
      this.router.navigate(['/home']);
    },
    error => {
      console.log(JSON.stringify(error));
    });

    /*this.loginUsuario.Auth(this.user).subscribe(
      data => {
        localStorage.setItem('usuario', JSON.stringify(data.response));
        this.router.navigate(['/home']);
        this.loginUsuario.changeValue();
        localStorage.setItem('Logeado', JSON.stringify(this.Auth) );
      },
      error => {
        this.mensaje = error.message;
      });*/


  }
}
