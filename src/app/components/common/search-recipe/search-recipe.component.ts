import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { SearchTypes } from 'src/app/interfaces/search-types';
import { AppCommonService } from 'src/app/services/app-common.service';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss']
})
export class SearchRecipeComponent {
 foods: SearchTypes[] = [
  {value : 'recipe_type', name: 'Po tipu recepta'},
  {value : 'recipe_name', name: 'Po nazivu recepta'},
 ]

  constructor(
    private commonService: AppCommonService,
    private router: Router
  ) { }

  onSearchTypeSelected(event: MatSelectChange) {
    this.commonService.searchType.next(event.value)
    this.router.navigateByUrl('/home')
  }
}
