import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCookerCartComponent } from './web-cooker-cart.component';

describe('WebCookerCartComponent', () => {
  let component: WebCookerCartComponent;
  let fixture: ComponentFixture<WebCookerCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCookerCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCookerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
