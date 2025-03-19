import { product } from './../../../@model/products.model';
import { ProductService } from './../../../@service/product.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addproduct',
  imports: [CommonModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {
  product:product={'category_id':'1','description':'','id':1,
    'name':'','price':0,'stock_quantity':0};//初始數值
  @Output()
  p = new EventEmitter();
  constructor(private productService:ProductService){

  }
  
  e(){
    this.p.emit();
  }

}
