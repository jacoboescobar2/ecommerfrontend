import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, Validators} from '@angular/forms';
import { LoginserviceService } from '../../services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  change = this.fb.group({
    usuario: ['', Validators.required],
    contrasenia: ['', Validators.required]
  });

  get usuario(){ return this.change.get('usuario'); }
  get contrasenia(){ return this.change.get('contrasenia'); }


  cambiarContrasenia(values){

  }

}
