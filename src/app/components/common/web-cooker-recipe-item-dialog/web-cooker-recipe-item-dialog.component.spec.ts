import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCookerRecipeItemDialogComponent } from './web-cooker-recipe-item-dialog.component';

describe('WebCookerRecipeItemDialogComponent', () => {
  let component: WebCookerRecipeItemDialogComponent;
  let fixture: ComponentFixture<WebCookerRecipeItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCookerRecipeItemDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCookerRecipeItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
