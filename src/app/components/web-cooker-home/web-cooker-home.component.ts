import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-web-cooker-home',
  templateUrl: './web-cooker-home.component.html',
  styleUrls: ['./web-cooker-home.component.scss']
})
export class WebCookerHomeComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    // this.dataService.getRecipies().subscribe()
  }

}
