import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCookerHomeComponent } from './web-cooker-home.component';

describe('WebCookerHomeComponent', () => {
  let component: WebCookerHomeComponent;
  let fixture: ComponentFixture<WebCookerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCookerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCookerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
