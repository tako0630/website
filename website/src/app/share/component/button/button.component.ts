import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent{
  @Input()
  btnname:string = "";
  receive(){
  }
}
