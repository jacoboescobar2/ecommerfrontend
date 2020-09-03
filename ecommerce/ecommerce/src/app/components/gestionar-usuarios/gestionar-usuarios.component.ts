import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-gestionar-usuarios',
  templateUrl: './gestionar-usuarios.component.html',
  styleUrls: ['./gestionar-usuarios.component.css']
})
export class GestionarUsuariosComponent implements OnInit {

  users: any[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    let resp = JSON.parse(localStorage.getItem('usuario'));
    this.userService.findAllUsers(resp.accessToken).subscribe((data: any)=> {
      this.users = data;
      console.log(JSON.stringify(data));
    },
    error=>{
      console.log('ocurrio algun error');
    });
  }

}
