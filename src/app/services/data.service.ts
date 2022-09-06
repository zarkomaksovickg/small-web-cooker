import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Recipe, RecipeResponse } from '../interfaces/recipe';
import { AppCommonService } from './app-common.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;
  recipesListURL = '/recipes/list'
  // list of recipes for recipe list component
  recipesList = new Subject<Recipe[]>()
  recipesListObs$ = this.recipesList as Observable<Recipe[]>

  constructor(
    private http: HttpClient,
    private commonService: AppCommonService
  ) { }

  getRecipies(keyword: string, queryParam: string) {
    // loading indicator on until response is given
    this.commonService.isLoading.next(true);
    return this.http.get<RecipeResponse>(`${this.baseUrl}${this.recipesListURL}${queryParam}${keyword}`).pipe(
      tap({
        next: event => {
          this.commonService.isLoading.next(false);
          this.recipesList.next(event.results)},
        error: error => {
          this.commonService.isLoading.next(false);
          console.error(error)
        }
      })
    ).subscribe()
  }
}
