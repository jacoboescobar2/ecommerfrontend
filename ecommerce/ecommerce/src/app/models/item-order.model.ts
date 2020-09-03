import { NgModule } from '@angular/core';
import { Product } from './product.model';

export class ItemOrder {
  id: number;
  quantity: number;
  product: Product[];
}
