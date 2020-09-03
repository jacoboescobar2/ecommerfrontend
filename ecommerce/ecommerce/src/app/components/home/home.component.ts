import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empleado = false;
  administrador = false;
  usuario = false;

  productos: any[];

  constructor(private productService: ProductService, private router: Router) { }

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

    this.productService.findAllProducts(resp.accessToken).subscribe((data: any)=> {
      this.productos = data;
      console.log(JSON.stringify(data));
    },
    error=>{
      console.log('ocurrio algun error al buscar productos');
    });

  }

  deleteProduct(id){
    let json = JSON.parse(localStorage.getItem('usuario'));
    let resp = this.productService.deleteProduct(json.accessToken,id);
    resp.subscribe(data=>{
      console.log('producto eliminado con exito');
      this.router.navigate(['/productos']);
    }, error =>{
      console.log('Error al crear producto');
    });
    this.router.navigate(['/']);
  }

  crearNuevo(){
    this.router.navigate(['/crear-producto']);
  }

}
