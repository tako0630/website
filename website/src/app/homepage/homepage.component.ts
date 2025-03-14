import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../share/component/button/button.component";
import { ProductListComponent } from '../product-list/product-list.component';
import { product } from '../@model/products.model';
@Component({
  selector: 'app-homepage',
  imports: [ButtonComponent,ProductListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent{

}
