import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCookerButtonComponent } from './web-cooker-button.component';

describe('WebCookerButtonComponent', () => {
  let component: WebCookerButtonComponent;
  let fixture: ComponentFixture<WebCookerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCookerButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCookerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
