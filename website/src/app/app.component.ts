import { Component,NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { product } from './@model/products.model';
import { HttpClient } from '@angular/common/http';
import { ProductListComponent } from "./product-list/product-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomepageComponent } from "./homepage/homepage.component";
@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent, NavbarComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'website';
  status = 0;
  products : product[] = [];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get<product[]>('http://localhost:8080/home').subscribe(data =>{
      this.products=data;
    });
  }



}
