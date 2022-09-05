import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCookerHeaderComponent } from './web-cooker-header.component';

describe('WebCookerHeaderComponent', () => {
  let component: WebCookerHeaderComponent;
  let fixture: ComponentFixture<WebCookerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCookerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCookerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
