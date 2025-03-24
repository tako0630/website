import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductPageComponent } from './productspage/productspage.component';

export const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'products',component:ProductPageComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
