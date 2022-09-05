import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCookerLogoComponent } from './web-cooker-logo.component';

describe('WebCookerLogoComponent', () => {
  let component: WebCookerLogoComponent;
  let fixture: ComponentFixture<WebCookerLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCookerLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCookerLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
