import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-web-cooker-recipes-list',
  templateUrl: './web-cooker-recipes-list.component.html',
  styleUrls: ['./web-cooker-recipes-list.component.scss']
})
export class WebCookerRecipesListComponent  {
  recipes = this.dataService.recipesListObs$
 
  constructor(
    private dataService: DataService
  ) { }
}
