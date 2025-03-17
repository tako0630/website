import { product } from './../../../@model/products.model';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductService } from '../../../@service/product.service';
import { UpdateComponent } from "./update/update.component";
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductsComponent, UpdateComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  @Input()
  products!: product[];
  
  product:product={'category_id':'1','description':'','id':1,
    'image_url':'','name':'','price':1,'stock_quantity':1};//初始數值
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this.productService.gethomepage().subscribe(data=>this.products=data);
  }
 
  selectproduct(product:product){
    this.product = product;
  }
  // 點擊修改商品按鈕，將當前商品設置為選中的商品
  

}
