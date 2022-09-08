import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-web-cooker-button',
  templateUrl: './web-cooker-button.component.html',
  styleUrls: ['./web-cooker-button.component.scss']
})
export class WebCookerButtonComponent  {
  @Input()
  buttonLabel!: string;
  @Input()
  recipeCount$!: Observable<number>;
  @Output()buttonClickedEvent = new EventEmitter<boolean>();
  
  clickActionEmmiter() {
    this.buttonClickedEvent.emit(true);
  }
}
