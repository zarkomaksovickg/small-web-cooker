import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Recipe, RecipeItem, RecipeResponse } from '../interfaces/recipe';
import { AppCommonService } from './app-common.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;
  recipesURL = '/recipes'
  // list of recipes for recipe list component
  recipesList = new BehaviorSubject<Recipe[]>([])
  recipesListObs$ = this.recipesList as Observable<Recipe[]>

  newSearchInitialized = new Subject<boolean>();
  newSearchInitializedObs$ = this.newSearchInitialized as Observable<boolean>;
  private searchData = {
    keyword: '',
    queryParam: ''
  }
  constructor(
    private http: HttpClient,
    private commonService: AppCommonService
  ) { 
  }

  getRecipies(keyword: string, queryParam: string, from: number) {
    // loading indicator on until response is given
    this.commonService.isLoading.next(true);

    const offset = this.checkIfNewSearch(keyword, queryParam, from);

    // get list with params
    return this.http.get<RecipeResponse>(`${this.baseUrl}${this.recipesURL}/list${queryParam}${keyword}&size=12&from=${offset}`).pipe(
      tap({
        next: event => {
          this.commonService.isLoading.next(false);
          this.recipesList.next(event.results)},
        error: error => {
          this.commonService.isLoading.next(false);
          this.commonService.openSnackBar('An error has occured, please try again later', '', 'secondary-color')
          console.error(error)
        }
      })
    ).subscribe()
  }

  getRecipiesPaginated(from: number) {
    this.getRecipies(this.searchData.keyword, this.searchData.queryParam, from)
  }

  checkIfNewSearch(keyword: string, queryParam: string, from?: number): number {
    let offset = from ? from : 0;
    // if new keyword is added 
    if (this.searchData.keyword !== keyword) {
      // store it for later search
      this.searchData.keyword = keyword;
      this.searchData.queryParam = queryParam;
      // inform paginator to start from 0
      this.newSearchInitialized.next(true);
      // reset offset
      offset = 0;
    } else {
      this.newSearchInitialized.next(false)
    }
    return offset;
  }

  getRecipeByID(recipeId: number) {
    this.commonService.isLoading.next(true);
    return this.http.get<any>(`${this.baseUrl}${this.recipesURL}/get-more-info?id=${recipeId}`).pipe(
      tap({
        next: () => {
        this.commonService.isLoading.next(false)},
        error: error => {
          this.commonService.isLoading.next(false);
          this.commonService.openSnackBar('An error has occured, please try again later', '', 'secondary-color')
          console.error(error)
        }
      })
    )
  }
}
