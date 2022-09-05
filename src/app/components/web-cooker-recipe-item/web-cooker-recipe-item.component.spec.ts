import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCookerRecipeItemComponent } from './web-cooker-recipe-item.component';

describe('WebCookerRecipeItemComponent', () => {
  let component: WebCookerRecipeItemComponent;
  let fixture: ComponentFixture<WebCookerRecipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCookerRecipeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCookerRecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
