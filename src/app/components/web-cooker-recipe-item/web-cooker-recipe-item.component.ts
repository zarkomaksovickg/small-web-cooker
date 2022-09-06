import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Recipe } from 'src/app/interfaces/recipe';
import { WebCookerRecipeItemDialogComponent } from '../common/web-cooker-recipe-item-dialog/web-cooker-recipe-item-dialog.component';

@Component({
  selector: 'app-web-cooker-recipe-item',
  templateUrl: './web-cooker-recipe-item.component.html',
  styleUrls: ['./web-cooker-recipe-item.component.scss']
})
export class WebCookerRecipeItemComponent {
  @Input() recipe: Recipe | undefined;

  constructor(private dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = this.recipe;
    dialogConfig.panelClass = ['recipe-dialog'];
    dialogConfig.enterAnimationDuration = enterAnimationDuration;
    dialogConfig.exitAnimationDuration = exitAnimationDuration;

    this.dialog.open(WebCookerRecipeItemDialogComponent, dialogConfig);
  }

}
