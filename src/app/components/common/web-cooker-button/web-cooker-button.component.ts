import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-cooker-button',
  templateUrl: './web-cooker-button.component.html',
  styleUrls: ['./web-cooker-button.component.scss']
})
export class WebCookerButtonComponent implements OnInit {
  @Input()
  buttonLabel!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
