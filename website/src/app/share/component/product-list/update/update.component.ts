import { Component, Input,NgModule} from '@angular/core';
import { product } from '../../../../@model/products.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { ProductService } from '../../../../@service/product.service';
@Component({
  selector: 'app-update',
  imports: [CommonModule,FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  @Input()
  product!:product;
  message = '';
  selectedFile!: File;

  constructor(private productService: ProductService) {
    
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; // 獲取用戶選擇的文件
  }
  uploadImage() {
    const formData = new FormData();
    formData.append('file', this.selectedFile); // 文件字段名為 'file'，後端將以該名字接收
    console.log(this.selectedFile);
    // 發送 POST 請求到後端
    /*this.http.post('http://localhost:8080/api/upload-image', formData)
      .subscribe({
        next: (response: any) => {
          console.log('圖片上傳成功', response);
          alert('圖片上傳成功。圖片 URL 是：' + response.imageUrl);
        },
        error: (error) => {
          console.error('圖片上傳失敗', error);
          alert('圖片上傳失敗');
        }
      });*/
  }

  saveProduct(): void {
    console.log('已保存的商品資訊:', this.product);
    //更新資料api
    this.productService.updateProduct(this.product).subscribe(s =>{
      this.message=s;
      console.log(this.message);})
    
    // 在成功或失敗後可以關閉 Modal （如果需要手動控制）
    const modalElement = document.getElementById('editProductModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
      // 手動移除殘留的遮罩
      const backdropElements = document.querySelectorAll('.modal-backdrop'); // 找到所有的 backdrop
      backdropElements.forEach((backdrop) => backdrop.remove()); // 移除每個 backdrop
    }
    if (this.selectedFile) {
      this.uploadImage();
    }
  }

}
