import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { product } from './@model/products.model';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomepageComponent } from "./homepage/homepage.component";
@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, HomepageComponent],
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
