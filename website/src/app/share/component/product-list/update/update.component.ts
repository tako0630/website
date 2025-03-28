import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../../../../@model/products.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { ProductService } from '../../../../@service/product.service';
import { AlertComponent } from "../../alert/alert.component";
@Component({
  selector: 'app-update',
  imports: [CommonModule, FormsModule, AlertComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  @Input()
  products!:product[];
  @Input()
  product!:product;
  @Output()
  refresh = new EventEmitter();
  @Output()
  productsChange = new EventEmitter();
  @Input()
  isediting!:boolean;
  message = '';
  selectedFile!: File;
  selectedProduct!:product;
  categories = ['Electronics', 'Fashion', 'Toys', 'Others'];
  //上傳狀態控制
  alertMessage = "";
  show=false;
  isLoading=false;

  constructor(private productService: ProductService) {
    
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; // 獲取用戶選擇的文件
  }
  uploadImage() {
    const formData = new FormData();
    formData.append('file', this.selectedFile); // 文件字段名為 'file'，後端將以該名字接收
    //console.log(this.selectedFile);
    this.alertMessage="上傳中";
    this.show=true;
    this.isLoading=true;
      this.productService.updateImage(this.product.id,formData).subscribe({
        next: (response: any) => {
          console.log('上傳成功', response);
          
          this.isLoading=false;
          this.alertMessage="上傳成功";
          this.refresh.emit(this.product);
          setTimeout(() => {
            this.show = false;
          }, 3000);
        },
        error: (error) => {
          console.error('上傳失敗', error);
          
          this.isLoading=false;
          this.alertMessage="上傳失敗";
          this.refresh.emit(this.product);
          setTimeout(() => {
            this.show = false;
          }, 3000);
        }
      });
    // 發送 POST 請求到後端
    
  }

  saveProduct(): void {
    this.alertMessage="上傳中";
    this.show=true;
    this.isLoading=true;
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    if(!this.isediting){
      console.log('已新增的商品資訊:', this.product);
      //新增資料api，將json打包成form
      formData.append('name', this.product.name);
      formData.append('description', this.product.description);
      formData.append('category_id', this.product.category_id);
      formData.append('price',this.product.price.toString());
      formData.append('stock_quantity',this.product.stock_quantity.toString());

      this.productService.addProduct(formData).subscribe(data =>{
      this.product=data;
      if (this.product.id) {
        this.products.push(this.product); // 直接加入新的商品
        this.productsChange.emit(this.products);
      }
      this.isLoading=false;
      this.alertMessage="上傳成功";
      this.refresh.emit(this.product);
      setTimeout(() => {
      this.show = false;
      }, 3000);
        
      console.log(this.message);})
    }else{
      console.log('已保存的商品資訊:', this.product);
    //更新資料api
    this.productService.updateProduct(this.product).subscribe(s =>{
      this.message=s;

      
      this.isLoading=false;
      this.alertMessage="上傳成功";
      this.refresh.emit(this.product);
      setTimeout(() => {
        this.show = false;
      }, 3000);
      if (this.selectedFile) {
        this.uploadImage();
        console.log("更新");
      }
      console.log(this.message);})
    }
    
    // 在成功或失敗後可以關閉 Modal （如果需要手動控制）
    const modalElement = document.getElementById('editProductModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
      // 手動移除殘留的遮罩
      const backdropElements = document.querySelectorAll('.modal-backdrop'); // 找到所有的 backdrop
      backdropElements.forEach((backdrop) => backdrop.remove()); // 移除每個 backdrop
    }
    
  }
}
