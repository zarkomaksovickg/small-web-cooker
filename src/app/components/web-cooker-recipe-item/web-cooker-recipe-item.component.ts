import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-web-cooker-recipe-item',
  templateUrl: './web-cooker-recipe-item.component.html',
  styleUrls: ['./web-cooker-recipe-item.component.scss']
})
export class WebCookerRecipeItemComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
