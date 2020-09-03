import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  empleado = false;
  administrador = false;
  usuario = false;

  constructor(private router: Router) { }

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


  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
