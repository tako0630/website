import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
@Component({
  selector: 'app-homepage',
  imports: [ProductListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent{

}
