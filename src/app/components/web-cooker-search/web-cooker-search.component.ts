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

  searchKeyword: string | null = null;
  selectedRecipeType: number | undefined;

  private subs = new Subscription();
  private readonly searchSubject = new Subject<string>();

  recipeTypes: SearchTypes[] = [
    {name: 'Američki', value: 'american'},
    {name: 'Grčki', value: 'greek'},
    {name: 'Meksički', value: 'mexican'},
    {name: 'Veganski', value: 'vegan'},
    {name: 'Pića', value: 'drinks'},
  ];
  direction: boolean | undefined;

  constructor(
    private commonService: AppCommonService,
    private dataService: DataService
  ) {
    this.subs.add(
      this.commonService.searchTypeObs$.subscribe((res: string) => this.searchTypeSelected = res)
      );
    this.subs.add(
      this.commonService.radioSelectionIndexObs$.subscribe((res: number) => this.selectedRecipeType = res)
      );
    this.subs.add(
      this.commonService.selectedKeywordObs$.subscribe((res: string) => this.searchKeyword = res)
    );
   }

  ngOnInit(): void {
    this.initializeTypingListener()
  }

  // user typing listener
  initializeTypingListener() {
    this.subs.add(this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(async (searchQuery) => {
      this.commonService.selectedKeyword.next(searchQuery);
      this.commonService.radioSelectionIndex.next(undefined)
      this.dataService.getRecipies(searchQuery, '?q=', 0)
      })
    ).subscribe())
  }

  // query recipes based on radio button selection
  recipeSelected(event: MatRadioChange, index: number) {
      this.dataService.getRecipies(event.value, '?tags=', 0);
      this.commonService.radioSelectionIndex.next(index);
      this.commonService.selectedKeyword.next(null)
  }

  // query recipes based on user input typing
  recipeNameSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchSubject.next(target.value.trim());
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
