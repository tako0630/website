import { product } from './../../../@model/products.model';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, ChangeDetectorRef, ViewChild} from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductService } from '../../../@service/product.service';
import { UpdateComponent } from "./update/update.component";
import { AddproductComponent } from "../addproduct/addproduct.component";
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductsComponent, UpdateComponent, AddproductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  @Input()
  products!: product[];
  newupdate!:number;
  @Input()
  show:boolean=false;
  @ViewChild(ProductsComponent) 
  productComponents!: product[];
  isediting:boolean = false;
  product:product={'category_id':'1','description':'','id':1,
    'name':'','price':1,'stock_quantity':1};//初始數值
  constructor(private productService: ProductService,private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this.productService.gethomepage().subscribe(data=>{
      this.products=data;
      this.cdr.detectChanges();
    });
  }
 
  selectproduct(product:product,isediting:boolean){
    this.product = product;
    this.openModal(this.product);
    this.isediting=isediting;
  }

  // 點擊修改商品按鈕，將當前商品設置為選中的商品
  trackById(index: number, product: product){
    return product.id;
  }

  re(product:product){
    console.log(product);
    
    this.newupdate=new Date().getTime();
    const index = this.products.findIndex(p => p.id === product.id);
    if(index!==-1){
      this.products[index] = product;
    }else{
      this.product.id
    }
  }

  openModal(product: product): void {
    // 保存被選中的商品數據
    
    this.product = { ...product };
    console.log(this.product);
    const modalElement = document.getElementById('editProductModal');
  
    if (modalElement) {
      // 手动初始化并打开 Modal
      const modalInstance = new bootstrap.Modal(modalElement, {
        backdrop: true,
        keyboard: true,
      });
      modalInstance.show();
    }
  }

}
