import { Component, OnInit } from '@angular/core';
import { ProductService } from '../@service/product.service';
import { product } from '../@model/products.model';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "../product-list/product-list.component";
@Component({
  selector: 'app-productspage',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './productspage.component.html',
  styleUrl: './productspage.component.scss'
})
export class ProductPageComponent implements OnInit{
  
  categories = ['All', 'Electronics', 'Fashion', 'Home', 'Toys']; // 商品分类
  selectedCategory = 'All'; // 默认分类
  
  constructor(private productService: ProductService) {}
  products:product[] = [];
  
  filteredProducts = this.products;
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products=data;
      this.filteredProducts = this.products;
    }); // 全部商品

  }

  // 切换分类时触发
  onCategorySelect(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((p) => p.category_id === category);
    }
  }
}
