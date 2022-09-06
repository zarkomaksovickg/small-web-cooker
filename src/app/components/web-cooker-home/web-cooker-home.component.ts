import { Component } from '@angular/core';
import { AppCommonService } from 'src/app/services/app-common.service';

@Component({
  selector: 'app-web-cooker-home',
  templateUrl: './web-cooker-home.component.html',
  styleUrls: ['./web-cooker-home.component.scss']
})
export class WebCookerHomeComponent {
  isLoading$ = this.commonService.isLoadingObs$
  constructor(
    private commonService: AppCommonService
  ) { }
}
