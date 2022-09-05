import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { debounceTime, distinctUntilChanged, Subject, Subscription, switchMap } from 'rxjs';
import { SearchTypes } from 'src/app/interfaces/search-types';
import { AppCommonService } from 'src/app/services/app-common.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-web-cooker-search',
  templateUrl: './web-cooker-search.component.html',
  styleUrls: ['./web-cooker-search.component.scss']
})
export class WebCookerSearchComponent implements OnInit, OnDestroy {
  searchTypeSelected: string | undefined;
  private subs = new Subscription();
  private readonly searchSubject = new Subject<string>();

  recipeTypes: SearchTypes[] = [
    {name: 'American', value: 'american'},
    {name: 'Greek', value: 'greek'},
    {name: 'Mexican', value: 'mexican'},
    {name: 'Vegan', value: 'vegan'},
    {name: 'Drinks', value: 'drinks'},
  ];

  constructor(
    private commonService: AppCommonService,
    private dataService: DataService
  ) {
    this.subs.add(
      this.commonService.searchType.subscribe((res: string) => this.searchTypeSelected = res)
    )
   }


  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.subs.add(this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(async (searchQuery) => this.dataService.getRecipies(searchQuery, '?q='))
    ).subscribe())
  }

  recipeSelected(event: MatRadioChange) {
      console.log(event.value)
      this.dataService.getRecipies(event.value, '?tags=')
  }

  recipeNameSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchSubject.next(target.value.trim());
  }
}
