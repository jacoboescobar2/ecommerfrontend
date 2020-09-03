import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuarioId: User;
  IDLista: number;
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let resp = JSON.parse(localStorage.getItem('usuario'));
    this.actRoute.paramMap.subscribe((params: any) => {
      this.IDLista = params.params.id;
    });

    this.userService.findById(resp.accessToken, this.IDLista).subscribe((data: any)=> {
      this.usuarioId = data;
      console.log(JSON.stringify(data));
    },
    error=>{
      console.log('ocurrio algun error al encontrar el usuario');
    });
  }

  update = this.fb.group({
    rol: ['', Validators.required],
    estado: ['', Validators.required]
  });

  get rol(){ return this.update.get('rol'); }
  get estado(){ return this.update.get('estado'); }

  actualizarUsuario(values){

    let resp = JSON.parse(localStorage.getItem('usuario'));
    this.usuarioId.rol = values.rol;
    this.usuarioId.state = values.estado;
    let upd = this.userService.updateUser(resp.accessToken,this.usuarioId);
    upd.subscribe(data=>{
      console.log(data);
      this.router.navigate(['/gestionar-usuario']);
    },
    error=>{
      console.log('Error al crear usuario ' + error);
    });

  }

}
