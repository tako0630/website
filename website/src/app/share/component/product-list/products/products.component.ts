import { product } from './../../../../@model/products.model';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductService } from '../../../../@service/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  @Input()
  products!:product[];
  @Output()
  productsChange = new EventEmitter();
  @Input()
  product!:product;
  @Output()
  selectproduct = new EventEmitter<product>();
  componentKey = Math.random();
  isHovered: boolean = false;
  @Input()
  lastupdate:number = new Date().getTime();
  @Output()
  mtype = new EventEmitter();
  mode!:String;
  constructor(private productService:ProductService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.mode = params['mode'] || 'view'; // 如果沒有 mode，預設為 view
      if(this.mode=='view')
        this.mtype.emit(true);
      else
        this.mtype.emit(false);
    });
  }
  // 滑鼠進入時執行
  btn_show() {
    this.isHovered = true;
  }

  // 滑鼠離開時執行
  btn_hide() {
    this.isHovered = false;
  }
  
    se(){
      this.selectproduct.emit(this.product);
    }

    handleImageError(event:any){
      event.target.src = "error.png"
    }
    getImage(product:product):string{
      return `http://localhost:8080/api/image/${product.id}?t=${this.lastupdate}`;
      //"'http://localhost:8080/api/image/'+product.id+'?t='+lastupdate"
    }
    delete(id:number){
      let s = '';
      this.products = this.products.filter(p => p.id !== this.product.id);
      this.productsChange.emit(this.products);
      this.productService.delete(id).subscribe(data =>s =data);
      console.log(s);
    }
}

/*id: number;  商品ID，自增主键
name: string;  商品名称
price: number;  商品价格，保留两位小数
description: string;  商品描述
image_url: string;圖片位址
stock_quantity: number;  商品库存数量
category_id: string;商品種類*/
