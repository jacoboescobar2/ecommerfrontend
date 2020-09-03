import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  producto: Product;
  
  constructor(private productService: ProductService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  create = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    precio: ['', Validators.required],
    estado: ['', Validators.required],
    cantidad: ['', Validators.required]
  });

  get nombre(){ return this.create.get('nombre'); }
  get descripcion(){ return this.create.get('descripcion'); }
  get precio(){ return this.create.get('precio'); }
  get estado(){ return this.create.get('estado'); }
  get cantidad(){ return this.create.get('cantidad'); }
  
  crearProducto(values){
    console.log(JSON.stringify(values));
    this.producto = new Product();
    this.producto.name = values.nombre;
    this.producto.description = values.descripcion;
    this.producto.inventoryquantity = values.cantidad;
    this.producto.productsstatus = values.estado;
    this.producto.baseprice = values.precio;

    let json = JSON.parse(localStorage.getItem('usuario'));
    let resp = this.productService.createProduct(json.accessToken,this.producto);
    resp.subscribe(data=>{
      console.log('producto creado con exito');
      this.router.navigate(['/home']);
    }, error =>{
      console.log('Error al crear producto');
    });


  }

}
