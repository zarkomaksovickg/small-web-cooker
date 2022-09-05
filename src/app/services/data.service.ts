import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Recipe, RecipeResponse } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;
  recipesListURL = '/recipes/list'
  recipesList = new Subject<Recipe[]>()
  constructor(
    private http: HttpClient
  ) { }

  getRecipies(keyword: string, queryParam: string) {
    return this.http.get<RecipeResponse>(`${this.baseUrl}${this.recipesListURL}${queryParam}${keyword}`).pipe(
      tap({
        next: event => {
          console.log(event)
          this.recipesList.next(event.results)},
        error: error => console.error(error)
      })
    ).subscribe()
  }
}
