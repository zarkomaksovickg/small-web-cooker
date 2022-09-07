import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecipeItem } from '../interfaces/recipe';
import { AppCommonService } from './app-common.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeHandlerService {
  recipes: Observable<RecipeItem[]>
  private _recipes: BehaviorSubject<RecipeItem[]>;
 
  private dataStore: {
    recipes: RecipeItem[]
  };

  constructor(
    private commonService: AppCommonService
    ) {
    this.dataStore = { recipes: [] };
    this._recipes = <BehaviorSubject<RecipeItem[]>><unknown>new BehaviorSubject([]);
    this.recipes = this._recipes.asObservable();
    this.loadAll()
   }


   loadAll() {
      this.dataStore.recipes = JSON.parse(localStorage.getItem('recipeList') || '[]')
      this._recipes.next(Object.assign({}, this.dataStore).recipes);
   }

  handleRecipe(recipeItem: RecipeItem) {
    // search for matches in saved recipes
    let matchFound = false;
    this.dataStore.recipes.forEach((r, i) => {
      if (r.recipe.id == recipeItem.recipe.id) { 
        // match found -> update object
        this.dataStore.recipes[i] = recipeItem; 
        this.manageRecipesHelper()
        matchFound = true;
      } 
    });
    // no match or data store empty -> add new recipe
    if(!matchFound || !this.dataStore.recipes.length) {
      this.addRecipe(recipeItem)
    }
  }

  addRecipe(recipeItem: RecipeItem) {
    this.dataStore.recipes.push(recipeItem);
    this.manageRecipesHelper()
  }

  removeRecipe(recipeId: number) {
    this.dataStore.recipes.forEach((t, i) => {
      if (t.recipe.id === recipeId) { this.dataStore.recipes.splice(i, 1); }
    });
    this.manageRecipesHelper()
    // this._recipes.next(Object.assign({}, this.dataStore).recipes);
  }

  manageRecipesHelper() {
    this._recipes.next(Object.assign({}, this.dataStore).recipes);
    localStorage.setItem('recipeList', JSON.stringify(this.dataStore.recipes))
    this.commonService.openSnackBar('Uspesno sacuvano!', '', 'primary-color')
  }
}
