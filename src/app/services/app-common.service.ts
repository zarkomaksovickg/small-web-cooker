import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppCommonService {
  // serach types to define if radio buttons or input filed will be displayed
  searchType = new BehaviorSubject<string>('');
  searchTypeObs$ = this.searchType as Observable<string>;

  // radio selection index used to keep the state of selected user choice
  radioSelectionIndex = new BehaviorSubject<number | undefined>(undefined);
  radioSelectionIndexObs$ = this.radioSelectionIndex as Observable<number>

  // radio selection index used to keep the state of selected user choice
  selectedKeyword = new BehaviorSubject<string | null>(null);
  selectedKeywordObs$ = this.selectedKeyword as Observable<string>

    
  // loading observable to show / hide loading screen
  isLoading = new BehaviorSubject<boolean>(false);
  isLoadingObs$ = this.isLoading as Observable<boolean>;

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string, className: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: [className]
    });
  }

}
