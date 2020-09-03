import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, Validators} from '@angular/forms';
import { LoginserviceService } from '../../services/loginservice.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  mensaje: string;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  create = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    usuario: ['', Validators.required],
    contrasenia: ['', Validators.required]
  });

  get nombre(){ return this.create.get('nombre'); }
  get apellido(){ return this.create.get('apellido'); }
  get usuario(){ return this.create.get('usuario'); }
  get contrasenia(){ return this.create.get('contrasenia'); }


  crearUsuario(values){
    if ( (values.usuario === null ||  values.usuario === undefined || values.usuario === '') ||
    (values.contrasenia === null ||  values.contrasenia === undefined || values.contrasenia === '') ||
    (values.nombre === null ||  values.nombre === undefined || values.nombre === '') ||
    (values.apellido === null ||  values.apellido === undefined || values.apellido === '')){
      this.mensaje = 'Por favor ingrese las credenciales';
      return;
    }
    let usuario : User;
    usuario = {
      id: null,
      name: values.nombre,
      password: values.contrasenia,
      lastname: values.apellido,
      user: values.usuario,
      cash: 0,
      state: true,
      rol: 'CLIENTE',
      orders: null
    };

    let resp = this.userService.crearUsuario(usuario);
    resp.subscribe(data=>{
      console.log(data);
      this.router.navigate(['/home']);
    },
    error=>{
      console.log('Error al crear usuario ' + error);
    });

  }

}
