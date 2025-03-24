import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  mode:boolean=false;//預設關閉更改
  constructor(private router:Router){}
  onclick(){
    this.mode=!this.mode;
    if(this.mode)
      this.router.navigate(['/products'], { queryParams: { mode: 'edit' } });
    else
      this.router.navigate(['/products'], { queryParams: { mode: 'view' } });
  }
}
