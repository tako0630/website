import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductPageComponent } from './productspage/productspage.component';

export const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'p',component:ProductPageComponent}
];
