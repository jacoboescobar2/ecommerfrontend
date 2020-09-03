import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  empleado = false;
  administrador = false;
  usuario = false;

  constructor() { }

  ngOnInit(): void {
    let resp = JSON.parse(localStorage.getItem('usuario'));

    if(resp){ 
      console.log(resp);
      if(resp.rol[0] === 'ROLE_EMPLEADO'){
       this.empleado = true;
      }
      if(resp.rol[0] === 'ROLE_ADMINISTRADOR'){
        this.administrador = true;
      }
      if(resp.rol[0] === 'ROLE_CLIENTE'){
        this.usuario = true;
      }
    }

  }

}
