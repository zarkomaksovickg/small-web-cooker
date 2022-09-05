import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCookerRecipesListComponent } from './web-cooker-recipes-list.component';

describe('WebCookerRecipesListComponent', () => {
  let component: WebCookerRecipesListComponent;
  let fixture: ComponentFixture<WebCookerRecipesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCookerRecipesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCookerRecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
