import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeItem } from 'src/app/interfaces/recipe';
import { RecipeHandlerService } from 'src/app/services/recipe-handler.service';

@Component({
  selector: 'app-web-cooker-header',
  templateUrl: './web-cooker-header.component.html',
  styleUrls: ['./web-cooker-header.component.scss']
})
export class WebCookerHeaderComponent implements OnInit {
  recipeCount$ = this.recipeService.recipeCountObs$
  constructor(
    private router: Router,
    private recipeService: RecipeHandlerService,
  ) { }

  ngOnInit(): void {
  }

  onButtonClicked(event: boolean) {
    if (event) {
      this.router.navigateByUrl('/cart')
    }
  }
}
