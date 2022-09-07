import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-web-cooker-button',
  templateUrl: './web-cooker-button.component.html',
  styleUrls: ['./web-cooker-button.component.scss']
})
export class WebCookerButtonComponent implements OnInit {
  @Input()
  buttonLabel!: string;
  @Output()buttonClickedEvent = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  clickActionEmmiter() {
    this.buttonClickedEvent.emit(true);
  }
}
