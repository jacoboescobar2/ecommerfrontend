import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, Validators} from '@angular/forms';
import { LoginserviceService } from '../../services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  mensaje: string;

  constructor(private router: Router, private fb: FormBuilder) { }

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

  }

}
