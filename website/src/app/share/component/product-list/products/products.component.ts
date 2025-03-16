import { ProductService } from './../../../../@service/product.service';
import { product } from "../../../../@model/products.model";
import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UpdateComponent } from '../update/update.component';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-products',
  imports: [CommonModule,UpdateComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input()
  product!:product; 
  constructor(private productService: ProductService) {
    
  }
  isHovered: boolean = false;
  // 滑鼠進入時執行
  btn_show() {
    this.isHovered = true;
  }

  // 滑鼠離開時執行
  btn_hide() {
    this.isHovered = false;
  }
  openModal(product: any): void {
      // 保存被選中的商品數據
      this.product = { ...product };
    
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

/*id: number;  商品ID，自增主键
name: string;  商品名称
price: number;  商品价格，保留两位小数
description: string;  商品描述
image_url: string;圖片位址
stock_quantity: number;  商品库存数量
category_id: number;商品種類id*/
