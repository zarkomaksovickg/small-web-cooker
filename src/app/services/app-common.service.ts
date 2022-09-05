import { SelectionChange } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppCommonService {
  searchType = new Subject<string>()
  constructor() { }
}
