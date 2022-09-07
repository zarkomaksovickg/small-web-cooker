import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-cooker-header',
  templateUrl: './web-cooker-header.component.html',
  styleUrls: ['./web-cooker-header.component.scss']
})
export class WebCookerHeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onButtonClicked(event: boolean) {
    if (event) {
      this.router.navigateByUrl('/cart')
    }
  }
}
