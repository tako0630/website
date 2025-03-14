import { Component } from '@angular/core';
import { ButtonComponent } from "../share/component/button/button.component";

@Component({
  selector: 'app-homepage',
  imports: [ButtonComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
