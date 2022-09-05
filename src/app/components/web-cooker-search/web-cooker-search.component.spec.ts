import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCookerSearchComponent } from './web-cooker-search.component';

describe('WebCookerSearchComponent', () => {
  let component: WebCookerSearchComponent;
  let fixture: ComponentFixture<WebCookerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCookerSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCookerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
