import { Component, Input,NgModule} from '@angular/core';
import { product } from '../../../../@model/products.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-update',
  imports: [CommonModule,FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  @Input()
  product!:product; 

  
  saveProduct(): void {
    console.log('已保存的商品資訊:', this.product);
    // 在此處你可以調用 API 提交修改後的數據到後端服務
    // 比如：
    // this.productService.updateProduct(this.product).subscribe(...);

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
