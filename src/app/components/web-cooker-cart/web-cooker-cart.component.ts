import { Component } from '@angular/core';
import { RecipeHandlerService } from 'src/app/services/recipe-handler.service';

@Component({
  selector: 'app-web-cooker-cart',
  templateUrl: './web-cooker-cart.component.html',
  styleUrls: ['./web-cooker-cart.component.scss']
})
export class WebCookerCartComponent {
  recipeItems = this.recipeService.recipes;
  constructor(  private recipeService: RecipeHandlerService,) { }

  deleteItem(index: number) {
    this.recipeService.removeRecipe(index)
  }
}
