import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  prod : Product;
  idPro : number;
  constructor(private productService: ProductService,
    private router: Router, private fb: FormBuilder, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let resp = JSON.parse(localStorage.getItem('usuario'));
    this.actRoute.paramMap.subscribe((params: any) => {
      this.idPro = params.params.id;
    });

    this.productService.findById(resp.accessToken, this.idPro).subscribe((data: any)=> {
      this.prod = data;
      console.log(JSON.stringify(data));
    },
    error=>{
      console.log('ocurrio algun error al encontrar el usuario');
    });
  }

  update = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    precio: ['', Validators.required],
    cantidad: ['', Validators.required],
    estado: ['', Validators.required]
  });


  get nombre(){ return this.update.get('nombre'); }
  get descripcion(){ return this.update.get('descripcion'); }
  get precio(){ return this.update.get('precio'); }
  get cantidad(){ return this.update.get('cantidad'); }
  get estado(){ return this.update.get('estado'); }


  actualizarProducto(values){
    this.prod.name = values.nombre;
    this.prod.description = values.descripcion;
    this.prod.baseprice = values.precio;
    this.prod.inventoryquantity = values.cantidad;
    this.prod.productsstatus = values.estado;

    let json = JSON.parse(localStorage.getItem('usuario'));
    let resp = this.productService.createProduct(json.accessToken,this.prod);
    resp.subscribe(data=>{
      console.log('producto editado con exito');
      this.router.navigate(['/home']);
    }, error =>{
      console.log('Error al crear producto');
    });
  }


}
