import { Component, OnInit } from '@angular/core';
import { product } from './@model/products.model';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './share/component/button/button.component';
@Component({
  selector: 'app-root',
  imports: [NavbarComponent,RouterModule,ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'website';
  status = 0;
  products : product[] = [];
 
  ngOnInit(): void {
  }
}
