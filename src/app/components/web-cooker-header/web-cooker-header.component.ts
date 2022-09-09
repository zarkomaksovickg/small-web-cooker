import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeHandlerService } from 'src/app/services/recipe-handler.service';

@Component({
  selector: 'app-web-cooker-header',
  templateUrl: './web-cooker-header.component.html',
  styleUrls: ['./web-cooker-header.component.scss']
})
export class WebCookerHeaderComponent {
  // recipe count from cart to display in go to cart button
  recipeCount$ = this.recipeService.recipeCountObs$
  constructor(
    private router: Router,
    private recipeService: RecipeHandlerService,
  ) { }

  onButtonClicked(event: boolean) {
    if (event) {
      this.router.navigateByUrl('/cart')
    }
  }
}
