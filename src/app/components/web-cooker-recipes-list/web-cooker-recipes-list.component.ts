import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/interfaces/recipe';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-web-cooker-recipes-list',
  templateUrl: './web-cooker-recipes-list.component.html',
  styleUrls: ['./web-cooker-recipes-list.component.scss']
})
export class WebCookerRecipesListComponent implements OnInit {
  recipes: Observable<Recipe[]>;
 
  constructor(
    private dataService: DataService
  ) { 
    this.recipes = this.dataService.recipesList;
  }

  ngOnInit(): void {
  }

}
