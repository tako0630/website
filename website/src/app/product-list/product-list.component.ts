import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { product } from '../@model/products.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  @Input()
  products!: product[];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get<product[]>('http://localhost:8080/home').subscribe(data =>{
      this.products=data;
    });
  }
}
