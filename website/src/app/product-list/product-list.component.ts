import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { product } from '../@model/products.model';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input()
  products: product[] = [];

}
