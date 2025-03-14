import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { product } from '../@model/products.model';
import { ProductService } from '../@service/product.service';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  @Input()
  products!: product[];
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this.productService.gethomepage().subscribe(data=>this.products=data);
  }
}
