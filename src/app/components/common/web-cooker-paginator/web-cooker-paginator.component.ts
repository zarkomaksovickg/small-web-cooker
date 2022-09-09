import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-web-cooker-paginator',
  templateUrl: './web-cooker-paginator.component.html',
  styleUrls: ['./web-cooker-paginator.component.scss']
})
export class WebCookerPaginatorComponent implements OnInit, OnDestroy {
  offset = 12;
  initialValue = 0;
  isNewSearch: boolean | undefined;
  subs = new Subscription()
  constructor(private dataService: DataService, private viewPort: ViewportScroller) { }


  ngOnInit(): void {
    this.subs.add(
      // listen to new search param from user
      this.dataService.newSearchInitializedObs$.subscribe((response: boolean) => {
        this.isNewSearch = response;
      })
    )
  }

  getData(direction: boolean) {
    // if new search reset initial value
    if (this.isNewSearch) {
      this.initialValue = 0;
    }
    // get direction of pages
    direction ? this.initialValue = this.initialValue + this.offset : this.initialValue = this.initialValue - this.offset;
    this.dataService.getRecipiesPaginated((this.initialValue))
    this.viewPort.scrollToPosition([0,0])
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
