import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe, RecipeItem } from 'src/app/interfaces/recipe';
import { RecipeHandlerService } from 'src/app/services/recipe-handler.service';

@Component({
  selector: 'app-web-cooker-recipe-item-dialog',
  templateUrl: './web-cooker-recipe-item-dialog.component.html',
  styleUrls: ['./web-cooker-recipe-item-dialog.component.scss']
})
export class WebCookerRecipeItemDialogComponent  {
  recipe = this.data;
  count: number = 1;
  constructor(
    public dialogRef: MatDialogRef<WebCookerRecipeItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Recipe,
    private recipeHandler: RecipeHandlerService
    ) {}

    counterHandler(direction: boolean) {
      direction ? this.count++ : this.count--
    }

    addToCart() {
      const recipe: RecipeItem  = {
        count: this.count,
        recipe: this.recipe
      }
      this.recipeHandler.handleRecipe(recipe)
      this.dialogRef.close()
    }
}
