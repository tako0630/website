import { product } from '../../@model/products.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input()
  product!:product; 
}

/*id: number;  商品ID，自增主键
name: string;  商品名称
price: number;  商品价格，保留两位小数
description: string;  商品描述
image_url: string;圖片位址
stock_quantity: number;  商品库存数量
category_id: number;商品種類id*/
