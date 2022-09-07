import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Recipe } from 'src/app/interfaces/recipe';
import { DataService } from 'src/app/services/data.service';
import { WebCookerRecipeItemDialogComponent } from '../common/web-cooker-recipe-item-dialog/web-cooker-recipe-item-dialog.component';

@Component({
  selector: 'app-web-cooker-recipe-item',
  templateUrl: './web-cooker-recipe-item.component.html',
  styleUrls: ['./web-cooker-recipe-item.component.scss']
})
export class WebCookerRecipeItemComponent {
  @Input() recipe: Recipe | undefined;

  constructor(private dialog: MatDialog, private dataService: DataService) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dataService.getRecipeByID(this.recipe!.id).subscribe((response: Recipe) => {
      const dialogConfig = new MatDialogConfig()
      dialogConfig.data = response;
      dialogConfig.panelClass = ['recipe-dialog'];
      dialogConfig.enterAnimationDuration = enterAnimationDuration;
      dialogConfig.exitAnimationDuration = exitAnimationDuration;
      this.dialog.open(WebCookerRecipeItemDialogComponent, dialogConfig);
    });
  }
}
