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
 
  recipeCount =  new BehaviorSubject<number>(0);
  recipeCountObs$ = this.recipeCount as Observable<number>;

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
    this.getRecipeCartCount()
   }

   loadAll() {
      this.dataStore.recipes = JSON.parse(localStorage.getItem('recipeList') || '[]')
      this._recipes.next(Object.assign({}, this.dataStore).recipes);
      console.log(this.dataStore.recipes)
   }


   getRecipeCartCount() { 
    this.recipes.subscribe((recipeItems: RecipeItem[])=> {
     this.recipeCount.next(0)
     let count: number = 0;
     recipeItems.forEach(item => {
       count += item.count
     })
     this.recipeCount.next(count)
   })
 }

  handleRecipe(recipeItem: RecipeItem, fromList?: boolean) {
    // search for matches in saved recipes
    let matchFound = false;
    this.dataStore.recipes.forEach((r, i) => {
      if (r.recipe.id == recipeItem.recipe.id) { 
        // add from cart -> increase count +1
        if (fromList) {
          recipeItem.count = r.count + 1
        } else {
          // add count from modal to current count
          recipeItem.count = recipeItem.count + r.count
        }
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
  }

  manageRecipesHelper() {
    this._recipes.next(Object.assign({}, this.dataStore).recipes);
    localStorage.setItem('recipeList', JSON.stringify(this.dataStore.recipes))
    this.commonService.openSnackBar('Uspesno sacuvano!', '', 'primary-color')
    console.log(this.dataStore)
  }
}
