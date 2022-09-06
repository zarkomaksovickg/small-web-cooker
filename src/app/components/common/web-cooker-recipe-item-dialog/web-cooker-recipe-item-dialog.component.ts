import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-web-cooker-recipe-item-dialog',
  templateUrl: './web-cooker-recipe-item-dialog.component.html',
  styleUrls: ['./web-cooker-recipe-item-dialog.component.scss']
})
export class WebCookerRecipeItemDialogComponent  {
  recipe = this.data;
  
  constructor(
    public dialogRef: MatDialogRef<WebCookerRecipeItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Recipe
    ) {}
}
